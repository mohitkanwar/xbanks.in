(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Wfu":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/onboarding/onboarding-start-options/onboarding-start-options.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: OnboardingStartOptionsComponent */

    /***/
    function Wfu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingStartOptionsComponent", function () {
        return OnboardingStartOptionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var OnboardingStartOptionsComponent = /*#__PURE__*/function () {
        function OnboardingStartOptionsComponent(router, dialogRef) {
          _classCallCheck(this, OnboardingStartOptionsComponent);

          this.router = router;
          this.dialogRef = dialogRef;
        }

        _createClass(OnboardingStartOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "startRetailOnboarding",
          value: function startRetailOnboarding() {
            this.dialogRef.close();
            this.router.navigate(['/retail-onboarding']);
          }
        }]);

        return OnboardingStartOptionsComponent;
      }();

      OnboardingStartOptionsComponent.ɵfac = function OnboardingStartOptionsComponent_Factory(t) {
        return new (t || OnboardingStartOptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
      };

      OnboardingStartOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnboardingStartOptionsComponent,
        selectors: [["app-onboarding-start-options"]],
        decls: 51,
        vars: 6,
        consts: [[1, "start-onboarding"], ["cols", "3", "rowHeight", "100px"], [1, "onboarding-tile", 3, "colspan", "rowspan"], [1, "onboarding-card"], ["mat-card-avatar", "", 1, "material-icons", "md-48"], ["mat-button", "", 3, "click"], ["mat-button", ""]],
        template: function OnboardingStartOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Great to have you onboard!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please chose an option which best identifies you :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "face");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Individual");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Retail Banking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Apply now and get access to 7% interest rate on your savings account. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingStartOptionsComponent_Template_button_click_19_listener() {
              return ctx.startRetailOnboarding();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Apply Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "admin_panel_settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Corporate Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Corporate Banking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Apply now for a complete corporate banking solution for your business. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Apply Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Corporate User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Corporate Banking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Already have your business registered with us? Join here to access your business details. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Apply Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".onboarding-tile[_ngcontent-%COMP%]{\n    margin:16px;\n    overflow: visible;\n}\n.mat-card[_ngcontent-%COMP%] {\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n    display: block;\n    position: relative;\n    padding: 16px;\n    border-radius: 4px;\n    margin:10px;\n    width: 100%;\n}\n.retail-header-image[_ngcontent-%COMP%] {\n    background-size: cover;\n  }\n.onboarding-card[_ngcontent-%COMP%]{\n background-color: orange;    \n transition: all 1s ease;\n}\n.onboarding-card[_ngcontent-%COMP%]:hover {\n    background-color: brown;    \n    transform:scale(1.15);\n}\n.start-onboarding[_ngcontent-%COMP%] {\n    width: 75%;\n    margin-left: 12.5%;\n}\n.mat-grid-tile[_ngcontent-%COMP%]    > .mat-figure[_ngcontent-%COMP%] {\n    margin: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctc3RhcnQtb3B0aW9ucy9vbmJvYXJkaW5nLXN0YXJ0LW9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlEQUF5RDtJQUN6RCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksc0JBQXNCO0VBQ3hCO0FBQ0Y7Q0FDQyx3QkFBd0IsRUFDUyxzQkFBc0IsRUFDdEIsWUFBWSxFQUNiLFNBQVMsRUFDVixVQUFVO0NBQ3RDLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksdUJBQXVCLEVBQ1Esc0JBQXNCLEVBQ3pCLFlBQVksRUFDYixTQUFTLEVBQ1YsVUFBVTtJQUNuQyxxQkFBcUI7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29uYm9hcmRpbmcvb25ib2FyZGluZy1zdGFydC1vcHRpb25zL29uYm9hcmRpbmctc3RhcnQtb3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9uYm9hcmRpbmctdGlsZXtcbiAgICBtYXJnaW46MTZweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5tYXQtY2FyZCB7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46MTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJldGFpbC1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbi5vbmJvYXJkaW5nLWNhcmR7XG4gYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgLyogRmlyZWZveCAqL1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgLyogSUUgOSAqL1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlOyAvKiBPcGVyYSAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuXG4ub25ib2FyZGluZy1jYXJkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjI1KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTsgLyogRmlyZWZveCAqL1xuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7IC8qIElFIDkgKi9cbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7IC8qIE9wZXJhICovXG4gICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcbn1cblxuLnN0YXJ0LW9uYm9hcmRpbmcge1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xufVxuLm1hdC1ncmlkLXRpbGUgPiAubWF0LWZpZ3VyZSB7XG4gICAgbWFyZ2luOiA0MHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingStartOptionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-onboarding-start-options',
            templateUrl: './onboarding-start-options.component.html',
            styleUrls: ['./onboarding-start-options.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/mohitk/projects/Xbank/retail-banking-angular/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0I2G":
    /*!*****************************************!*\
      !*** ./src/environments/backendAPIs.ts ***!
      \*****************************************/

    /*! exports provided: BackendAPIService */

    /***/
    function I2G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackendAPIService", function () {
        return BackendAPIService;
      });
      /* harmony import */


      var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BackendAPIService = /*#__PURE__*/function () {
        function BackendAPIService() {
          _classCallCheck(this, BackendAPIService);
        }

        _createClass(BackendAPIService, [{
          key: "getBaseUrl",
          value: function getBaseUrl() {
            var backendUrl = _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backendUrl;
            var PATH_SEPERATOR = '/';
            var context = _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].contextName;
            var baseURL = backendUrl + PATH_SEPERATOR;

            if (context !== '') {
              baseURL = baseURL + context + PATH_SEPERATOR;
            }

            return baseURL;
          }
        }, {
          key: "getAccountsAPI",
          value: function getAccountsAPI() {
            return this.getBaseUrl() + 'user/products/accounts';
          }
        }, {
          key: "getDepositAccountsAPI",
          value: function getDepositAccountsAPI() {
            return this.getBaseUrl() + 'user/products/deposits';
          }
        }, {
          key: "getLoanAccountsAPI",
          value: function getLoanAccountsAPI() {
            return this.getBaseUrl() + 'user/products/loans';
          }
        }, {
          key: "getCardsAccountsAPI",
          value: function getCardsAccountsAPI() {
            return this.getBaseUrl() + 'user/products/cards';
          }
        }, {
          key: "getCorporatesAPI",
          value: function getCorporatesAPI() {
            return this.getBaseUrl() + 'corporates/';
          }
        }, {
          key: "getLogintAPI",
          value: function getLogintAPI() {
            return this.getBaseUrl() + 'auth/login';
          }
        }, {
          key: "getLogOutAPI",
          value: function getLogOutAPI() {
            return this.getBaseUrl() + 'logout';
          }
        }, {
          key: "getInventoryListAPI",
          value: function getInventoryListAPI(pageSize, pageNumber) {
            return this.getBaseUrl() + 'inventory/list' + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&sortBy=id';
          }
        }, {
          key: "getUpdateInventoryListAPI",
          value: function getUpdateInventoryListAPI(companyName, medicineName) {
            return this.getBaseUrl() + 'inventory/update/' + companyName + '/' + medicineName + '/';
          }
        }, {
          key: "getSearchInventoryListAPI",
          value: function getSearchInventoryListAPI(searchCriteria) {
            return this.getBaseUrl() + 'inventory/search?q=' + searchCriteria;
          }
        }, {
          key: "getDeleteArticleAPI",
          value: function getDeleteArticleAPI(id) {
            return this.getBaseUrl() + 'article' + '/' + id;
          }
        }, {
          key: "getCreateArticleAPI",
          value: function getCreateArticleAPI() {
            return this.getBaseUrl() + 'article';
          }
        }, {
          key: "getArticleListAPI",
          value: function getArticleListAPI(pageSize, pageNumber) {
            return this.getBaseUrl() + 'article/list?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&sortBy=id';
          }
        }, {
          key: "getUsersListAPI",
          value: function getUsersListAPI(pageSize, pageNumber) {
            return this.getBaseUrl() + 'user/list?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&sortBy=id';
          }
        }, {
          key: "getLoggedInUserAPI",
          value: function getLoggedInUserAPI() {
            return this.getBaseUrl() + 'users/me';
          }
        }]);

        return BackendAPIService;
      }();

      BackendAPIService.ɵfac = function BackendAPIService_Factory(t) {
        return new (t || BackendAPIService)();
      };

      BackendAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BackendAPIService,
        factory: BackendAPIService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackendAPIService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1itm":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts ***!
      \****************************************************************************/

    /*! exports provided: ConfirmationDialogueInput, ConfirmationDialogueButtons */

    /***/
    function itm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueInput", function () {
        return ConfirmationDialogueInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueButtons", function () {
        return ConfirmationDialogueButtons;
      });

      var ConfirmationDialogueInput = function ConfirmationDialogueInput() {
        _classCallCheck(this, ConfirmationDialogueInput);
      };

      var ConfirmationDialogueButtons = function ConfirmationDialogueButtons(text, returnText, color) {
        _classCallCheck(this, ConfirmationDialogueButtons);

        this.text = text;
        this.returnText = returnText;
        this.color = color;
      };
      /***/

    },

    /***/
    "2RIa":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/welcome/welcome-component/welcome-component.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function RIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _common_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../common/image-slider/image-slider.component */
      "ReRb");
      /* harmony import */


      var _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../login/login-form/login-form.component */
      "lRZq");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../register/register.component */
      "iBhv");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent() {
          _classCallCheck(this, WelcomeComponent);

          console.log('Welcome Component');
        }

        _createClass(WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.imagesUrl = ['/assets/images/welcome/1.jpg'];
          }
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
        return new (t || WelcomeComponent)();
      };

      WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WelcomeComponent,
        selectors: [["app-welcome-component"]],
        decls: 7,
        vars: 7,
        consts: [["cols", "11", "rowHeight", "100px"], [3, "colspan", "rowspan"], [3, "images"], [1, "register"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-slider", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-login-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-register", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 8)("rowspan", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.imagesUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 3)("rowspan", 2);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _common_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_2__["ImageSliderComponent"], _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        styles: [".register[_ngcontent-%COMP%]{\n    width: 76%;\n}\n\nimg[_ngcontent-%COMP%] { display: block; }\n\n.triangle[_ngcontent-%COMP%] { position: relative; \n    overflow: hidden; \n    padding: 0; \n    margin: 0; \n    display: inline-block; }\n\n.triangle[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    z-index: 2;\n    left: 92%;\n    width: 100%;\n    height: 114%;\n    display: block;\n    background: #FFF;\n}\n\n.triangle[_ngcontent-%COMP%]:before { \n    transform: rotate(-80deg); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWxjb21lL3dlbGNvbWUtY29tcG9uZW50L3dlbGNvbWUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsTUFBTSxjQUFjLEVBQUU7O0FBQ3RCLFlBQVksa0JBQWtCO0lBQzFCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQixFQUFFOztBQUUzQjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFHSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dlbGNvbWUvd2VsY29tZS1jb21wb25lbnQvd2VsY29tZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcbiAgICB3aWR0aDogNzYlO1xufVxuXG5pbWcgeyBkaXNwbGF5OiBibG9jazsgfVxuLnRyaWFuZ2xlIHsgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICBwYWRkaW5nOiAwOyBcbiAgICBtYXJnaW46IDA7IFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4udHJpYW5nbGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGxlZnQ6IDkyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDExNCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuLnRyaWFuZ2xlOmJlZm9yZSB7IFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTgwZGVnKTsgXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtODBkZWcpOyBcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtODBkZWcpOyBcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-welcome-component',
            templateUrl: './welcome-component.component.html',
            styleUrls: ['./welcome-component.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "4s4N":
    /*!************************************************************!*\
      !*** ./src/app/auto-generated/auto-generated.component.ts ***!
      \************************************************************/

    /*! exports provided: AutoGeneratedComponent */

    /***/
    function s4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function () {
        return AutoGeneratedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AutoGeneratedComponent = /*#__PURE__*/function () {
        function AutoGeneratedComponent() {
          _classCallCheck(this, AutoGeneratedComponent);
        }

        _createClass(AutoGeneratedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AutoGeneratedComponent;
      }();

      AutoGeneratedComponent.ɵfac = function AutoGeneratedComponent_Factory(t) {
        return new (t || AutoGeneratedComponent)();
      };

      AutoGeneratedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AutoGeneratedComponent,
        selectors: [["app-auto-generated"]],
        decls: 2,
        vars: 0,
        template: function AutoGeneratedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auto-generated works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoGeneratedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auto-generated',
            templateUrl: './auto-generated.component.html',
            styleUrls: ['./auto-generated.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "5ys1":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/dashboard/portfolio-summary/accounts.service.ts ***!
      \*************************************************************************/

    /*! exports provided: AccountsService */

    /***/
    function ys1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
        return AccountsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/backendAPIs */
      "0I2G");

      var AccountsService = /*#__PURE__*/function () {
        function AccountsService(http, backendApis) {
          _classCallCheck(this, AccountsService);

          this.http = http;
          this.backendApis = backendApis;
        }

        _createClass(AccountsService, [{
          key: "getSavingsAccounts",
          value: function getSavingsAccounts() {
            return this.http.get(this.backendApis.getAccountsAPI());
          }
        }, {
          key: "getDepositAccounts",
          value: function getDepositAccounts() {
            return this.http.get(this.backendApis.getDepositAccountsAPI());
          }
        }, {
          key: "getLoanAccounts",
          value: function getLoanAccounts() {
            return this.http.get(this.backendApis.getLoanAccountsAPI());
          }
        }, {
          key: "getCardAccounts",
          value: function getCardAccounts() {
            return this.http.get(this.backendApis.getCardsAccountsAPI());
          }
        }]);

        return AccountsService;
      }();

      AccountsService.ɵfac = function AccountsService_Factory(t) {
        return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_2__["BackendAPIService"]));
      };

      AccountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountsService,
        factory: AccountsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_2__["BackendAPIService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6ACK":
    /*!********************************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard/dashboard.component.ts ***!
      \********************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function ACK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../portfolio-summary/portfolio-summary.component */
      "sOB0");
      /* harmony import */


      var _quick_actions_bar_quick_actions_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quick-actions-bar/quick-actions-bar.component */
      "uI0C");
      /* harmony import */


      var _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../transactions-summary/transactions-summary.component */
      "Zreb");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 7,
        vars: 12,
        consts: [["cols", "11", "rowHeight", "100px"], [3, "colspan", "rowspan"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-portfolio-summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-quick-actions-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-transactions-summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 7)("rowspan", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 4)("rowspan", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 7)("rowspan", 4);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"], _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioSummaryComponent"], _quick_actions_bar_quick_actions_bar_component__WEBPACK_IMPORTED_MODULE_3__["QuickActionsBarComponent"], _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_4__["TransactionsSummaryComponent"]],
        styles: [".mat-grid-tile[_ngcontent-%COMP%]{\n    border: 1px solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1ncmlkLXRpbGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6FW0":
    /*!**********************************************************!*\
      !*** ./src/app/theme/footer-bar/footer-bar.component.ts ***!
      \**********************************************************/

    /*! exports provided: FooterBarComponent */

    /***/
    function FW0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function () {
        return FooterBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var FooterBarComponent = /*#__PURE__*/function () {
        function FooterBarComponent() {
          _classCallCheck(this, FooterBarComponent);
        }

        _createClass(FooterBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterBarComponent;
      }();

      FooterBarComponent.ɵfac = function FooterBarComponent_Factory(t) {
        return new (t || FooterBarComponent)();
      };

      FooterBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterBarComponent,
        selectors: [["app-footer-bar"]],
        decls: 6,
        vars: 0,
        template: function FooterBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "copyright");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Mohit Kanwar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
        styles: ["footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom:0;\n    width:100%;\n    height:64px;   \n    background:#6cf;\n    margin-top: 10px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZm9vdGVyLWJhci9mb290ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXLElBQUkseUJBQXlCO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9mb290ZXItYmFyL2Zvb3Rlci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjY0cHg7ICAgLyogSGVpZ2h0IG9mIHRoZSBmb290ZXIgKi9cbiAgICBiYWNrZ3JvdW5kOiM2Y2Y7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer-bar',
            templateUrl: './footer-bar.component.html',
            styleUrls: ['./footer-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "798l":
    /*!************************************************************!*\
      !*** ./src/app/theme/notification/notification.service.ts ***!
      \************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService() {
          _classCallCheck(this, NotificationService);

          this.notificationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(NotificationService, [{
          key: "sendNotification",
          value: function sendNotification(message) {
            this.notificationEvent.emit({
              message: message
            });
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)();
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, {
          notificationEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ARGo":
    /*!*****************************************************!*\
      !*** ./src/app/page-layouts/page-layouts.module.ts ***!
      \*****************************************************/

    /*! exports provided: PageLayoutsModule */

    /***/
    function ARGo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function () {
        return PageLayoutsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pre-login/pre-login.component */
      "pqYQ");
      /* harmony import */


      var _common_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/common.module */
      "a6Df");

      var PageLayoutsModule = function PageLayoutsModule() {
        _classCallCheck(this, PageLayoutsModule);
      };

      PageLayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutsModule
      });
      PageLayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutsModule_Factory(t) {
          return new (t || PageLayoutsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonAppModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsModule, {
          declarations: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_2__["PreLoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonAppModule"]],
          exports: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_2__["PreLoginComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_2__["PreLoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_3__["CommonAppModule"]],
            exports: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_2__["PreLoginComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AcBg":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/users/email-verification/email-verification.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: EmailVerificationComponent */

    /***/
    function AcBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function () {
        return EmailVerificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EmailVerificationComponent = /*#__PURE__*/function () {
        function EmailVerificationComponent(activatedRoute) {
          var _this = this;

          _classCallCheck(this, EmailVerificationComponent);

          this.activatedRoute = activatedRoute;
          this.activatedRoute.queryParams.subscribe(function (params) {
            var queryParam = params.q;
            console.log(queryParam);

            if (queryParam == null || queryParam === '') {
              _this.message = 'Unable to verify the email';
            } else {
              _this.message = 'Email verified successfully';
            }
          });
        }

        _createClass(EmailVerificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmailVerificationComponent;
      }();

      EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) {
        return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      EmailVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmailVerificationComponent,
        selectors: [["app-email-verification"]],
        decls: 2,
        vars: 1,
        template: function EmailVerificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlcnMvZW1haWwtdmVyaWZpY2F0aW9uL2VtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-email-verification',
            templateUrl: './email-verification.component.html',
            styleUrls: ['./email-verification.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AkfZ":
    /*!************************************************!*\
      !*** ./src/app/modules/login/login.service.ts ***!
      \************************************************/

    /*! exports provided: LoginService */

    /***/
    function AkfZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/backendAPIs */
      "0I2G");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http, backendAPIs) {
          _classCallCheck(this, LoginService);

          this.http = http;
          this.backendAPIs = backendAPIs;
        }

        _createClass(LoginService, [{
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return sessionStorage.getItem('authenticated') === 'true';
          }
        }, {
          key: "login",
          value: function login(user) {
            var authKey = 'Basic ' + btoa(user.username + ':' + user.password);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](user ? {
              authorization: authKey
            } : {});
            sessionStorage.setItem('auth-key', authKey);
            return this.http.post(this.backendAPIs.getLogintAPI(), user, {
              headers: headers
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var authKey = sessionStorage.getItem('auth-key');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](authKey ? {
              authorization: authKey
            } : {});
            return this.http.post(this.backendAPIs.getLogOutAPI(), null, {
              headers: headers
            });
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_2__["BackendAPIService"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_2__["BackendAPIService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        backendUrl: 'http://localhost:8080',
        mockBackendUrl: 'assets/mocks',
        contextName: ''
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BLWB":
    /*!***************************************!*\
      !*** ./src/app/theme/theme.module.ts ***!
      \***************************************/

    /*! exports provided: ThemeModule */

    /***/
    function BLWB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
        return ThemeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./top-fixed-bar/top-fixed-bar.component */
      "sYca");
      /* harmony import */


      var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-layout/main-layout.component */
      "c5fU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./footer-bar/footer-bar.component */
      "6FW0");
      /* harmony import */


      var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./notification/notification.component */
      "WZkU");
      /* harmony import */


      var _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./expandable-list/expandable-list.component */
      "H3Ni");
      /* harmony import */


      var _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./confirmation-dialogue/confirmation-dialogue.component */
      "EbMe");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");

      var ThemeModule = function ThemeModule() {
        _classCallCheck(this, ThemeModule);
      };

      ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ThemeModule,
        bootstrap: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"]]
      });
      ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ThemeModule_Factory(t) {
          return new (t || ThemeModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
          declarations: [_top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopFixedBarComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_12__["FooterBarComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_14__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogueComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]],
          exports: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_14__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogueComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopFixedBarComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_12__["FooterBarComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_14__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogueComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]],
            providers: [],
            bootstrap: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"]],
            exports: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_14__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmationDialogueComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "EV6F":
    /*!**********************************************************!*\
      !*** ./src/app/modules/login/logout/logout.component.ts ***!
      \**********************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function EV6F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/theme/notification/notification.service */
      "798l");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../login.service */
      "AkfZ");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(router, notificationService, logoutService) {
          _classCallCheck(this, LogoutComponent);

          this.router = router;
          this.notificationService = notificationService;
          this.logoutService = logoutService;
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            sessionStorage.removeItem('authenticated');
            sessionStorage.removeItem('auth-key');
            this.router.navigate(['login']);
            this.logoutService.logout();
            this.notificationService.sendNotification('Logged out successfully!');
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
        return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
      };

      LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoutComponent,
        selectors: [["app-logout"]],
        decls: 0,
        vars: 0,
        template: function LogoutComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
          }, {
            type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EbMe":
    /*!********************************************************************************!*\
      !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ConfirmationDialogueComponent */

    /***/
    function EbMe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueComponent", function () {
        return ConfirmationDialogueComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirmation-dialogue-input */
      "1itm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ConfirmationDialogueComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogueComponent_span_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.buttonClicked(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var button_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", button_r2.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](button_r2.text);
        }
      }

      function ConfirmationDialogueComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogueComponent_span_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onCloseClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var buttonText_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](buttonText_r6);
        }
      }

      var ConfirmationDialogueComponent = /*#__PURE__*/function () {
        function ConfirmationDialogueComponent(dialogRef, data) {
          _classCallCheck(this, ConfirmationDialogueComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ConfirmationDialogueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onCloseClick",
          value: function onCloseClick() {
            this.dialogRef.close('');
          }
        }, {
          key: "buttonClicked",
          value: function buttonClicked(i) {
            this.dialogRef.close(this.data.buttons[i].returnText);
          }
        }]);

        return ConfirmationDialogueComponent;
      }();

      ConfirmationDialogueComponent.ɵfac = function ConfirmationDialogueComponent_Factory(t) {
        return new (t || ConfirmationDialogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ConfirmationDialogueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmationDialogueComponent,
        selectors: [["app-confirmation-dialogue"]],
        decls: 5,
        vars: 3,
        consts: [[1, "dialogue"], [4, "ngFor", "ngForOf"], ["mat-button", "", "mat-flat-button", "", 1, "button-class", 3, "color", "click"], ["mat-button", "", "mat-flat-button", "", "color", "warn", 1, "button-class", 3, "click"]],
        template: function ConfirmationDialogueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmationDialogueComponent_span_3_Template, 3, 2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmationDialogueComponent_span_4_Template, 3, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.buttons);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.closeButtons);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".button-class[_ngcontent-%COMP%]{\n    margin: 3%;\n}\n.dialogue[_ngcontent-%COMP%]{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29uZmlybWF0aW9uLWRpYWxvZ3VlL2NvbmZpcm1hdGlvbi1kaWFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb25maXJtYXRpb24tZGlhbG9ndWUvY29uZmlybWF0aW9uLWRpYWxvZ3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNsYXNze1xuICAgIG1hcmdpbjogMyU7XG59XG4uZGlhbG9ndWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogueComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confirmation-dialogue',
            templateUrl: './confirmation-dialogue.component.html',
            styleUrls: ['./confirmation-dialogue.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogueInput"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H3Ni":
    /*!********************************************************************!*\
      !*** ./src/app/theme/expandable-list/expandable-list.component.ts ***!
      \********************************************************************/

    /*! exports provided: ExpandableListComponent */

    /***/
    function H3Ni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpandableListComponent", function () {
        return ExpandableListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _pageupdatedevent_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pageupdatedevent.model */
      "V+XA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");

      function ExpandableListComponent_ng_container_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5, " ");
        }
      }

      function ExpandableListComponent_ng_container_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var detailRow_r9 = ctx.$implicit;

          var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", detailRow_r9[column_r5], " ");
        }
      }

      function ExpandableListComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpandableListComponent_ng_container_1_th_1_Template, 2, 1, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExpandableListComponent_ng_container_1_td_2_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r5);
        }
      }

      function ExpandableListComponent_td_3_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r13 = ctx.$implicit;

          var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r11[column_r13]);
        }
      }

      function ExpandableListComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpandableListComponent_td_3_tr_3_Template, 6, 2, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r11 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r1.columnsToDisplayInDetails.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", row_r11 == ctx_r1.expandedRow ? "expanded" : "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columnsToDisplayInDetails);
        }
      }

      function ExpandableListComponent_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
        }
      }

      function ExpandableListComponent_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpandableListComponent_tr_5_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var row_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.toggleExpandedRow(row_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r15 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("user-details-expanded-row", ctx_r3.expandedRow === row_r15);
        }
      }

      function ExpandableListComponent_tr_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      var _c0 = function _c0() {
        return ["expandedDetail"];
      };

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      var ExpandableListComponent = /*#__PURE__*/function () {
        function ExpandableListComponent(route) {
          _classCallCheck(this, ExpandableListComponent);

          this.route = route;
          this.pageSize = 5;
          this.pageNumber = 1;
          this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ExpandableListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.params.subscribe(function (params) {
              _this2.getPaginatedItems({
                length: 0,
                pageIndex: 1,
                pageSize: 5,
                previousPageIndex: 1
              });
            });
          }
        }, {
          key: "toggleExpandedRow",
          value: function toggleExpandedRow(row) {
            if (this.expandedRow !== row) {
              this.expandedRow = row;
            } else {
              this.expandedRow = '';
            }
          }
        }, {
          key: "getPaginatedItems",
          value: function getPaginatedItems(event) {
            var paginationUpdate = new _pageupdatedevent_model__WEBPACK_IMPORTED_MODULE_2__["PageUpdatedEventData"]();
            paginationUpdate.length = event.length;
            paginationUpdate.pageIndex = event.pageIndex;
            paginationUpdate.pageSize = event.pageSize;
            paginationUpdate.previousPageIndex = event.previousPageIndex;
            this.pageChanged.emit(paginationUpdate);
          }
        }]);

        return ExpandableListComponent;
      }();

      ExpandableListComponent.ɵfac = function ExpandableListComponent_Factory(t) {
        return new (t || ExpandableListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      ExpandableListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExpandableListComponent,
        selectors: [["app-expandable-list"]],
        inputs: {
          listData: "listData",
          listColumns: "listColumns",
          detailsColumns: "detailsColumns",
          totalNumberOfItems: "totalNumberOfItems",
          pageSize: "pageSize",
          pageNumber: "pageNumber"
        },
        outputs: {
          pageChanged: "pageChanged",
          deleteEvent: "deleteEvent"
        },
        decls: 8,
        vars: 11,
        consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "user-details-row", 3, "user-details-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "user-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "user-details"], [1, "user-details-table"], ["class", "user-details-row", 4, "ngFor", "ngForOf"], [1, "user-details-row"], [1, "user-details-header"], [1, "user-details-details"], ["mat-header-row", ""], ["mat-row", "", 1, "user-details-row", 3, "click"], ["mat-row", "", 1, "user-detail-row"]],
        template: function ExpandableListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExpandableListComponent_ng_container_1_Template, 3, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExpandableListComponent_td_3_Template, 4, 3, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExpandableListComponent_tr_4_Template, 1, 0, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExpandableListComponent_tr_5_Template, 1, 2, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExpandableListComponent_tr_6_Template, 1, 0, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-paginator", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ExpandableListComponent_Template_mat_paginator_page_7_listener($event) {
              return ctx.getPaginatedItems($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.listData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.listColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.listColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalNumberOfItems)("pageSize", ctx.pageSize)("pageIndex", ctx.pageNumber)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  tr.user-detail-row[_ngcontent-%COMP%] {\n    height: 0;\n  }\n  \n  tr.user-details-row[_ngcontent-%COMP%]:not(.user-details-expanded-row):hover {\n    background: #f5f5f5;\n  }\n  \n  tr.user-details-row[_ngcontent-%COMP%]:not(.user-details-expanded-row):active {\n    background: #efefef;\n  }\n  \n  .user-details-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom-width: 0;\n  }\n  \n  .user-details[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: flex;\n  }\n  \n  .user-details-box[_ngcontent-%COMP%] {\n    min-width: 80px;\n    border: 2px solid black;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n  \n  .user-details-id[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 40px;\n    line-height: normal;\n  }\n  \n  .user-details-table[_ngcontent-%COMP%]{\n    min-width: 80px;\n    border: 2px solid lightgray;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZXhwYW5kYWJsZS1saXN0L2V4cGFuZGFibGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2V4cGFuZGFibGUtbGlzdC9leHBhbmRhYmxlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdHIudXNlci1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIHRyLnVzZXItZGV0YWlscy1yb3c6bm90KC51c2VyLWRldGFpbHMtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgfVxuICBcbiAgdHIudXNlci1kZXRhaWxzLXJvdzpub3QoLnVzZXItZGV0YWlscy1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscy1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC51c2VyLWRldGFpbHMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscy1ib3gge1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIFxuICAudXNlci1kZXRhaWxzLWlkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscy10YWJsZXtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAiXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px',
            minHeight: '0',
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandableListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-expandable-list',
            templateUrl: './expandable-list.component.html',
            styleUrls: ['./expandable-list.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '0px',
              minHeight: '0',
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '*'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          listData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          listColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          detailsColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          totalNumberOfItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          deleteEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "IeBz":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/onboarding/onboarding-components/onboardinghost.directive.ts ***!
      \**************************************************************************************/

    /*! exports provided: OnboardingDirective */

    /***/
    function IeBz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingDirective", function () {
        return OnboardingDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OnboardingDirective = function OnboardingDirective(viewContainerRef) {
        _classCallCheck(this, OnboardingDirective);

        this.viewContainerRef = viewContainerRef;
      };

      OnboardingDirective.ɵfac = function OnboardingDirective_Factory(t) {
        return new (t || OnboardingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      OnboardingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OnboardingDirective,
        selectors: [["", "appOnboardingHost", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appOnboardingHost]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "LAIc":
    /*!*********************************************!*\
      !*** ./src/app/common/token.interceptor.ts ***!
      \*********************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function LAIc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor() {
          _classCallCheck(this, TokenInterceptor);
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var accessToken = sessionStorage.getItem('auth-key');
            request = request.clone({
              setHeaders: {
                Authorization: "".concat(accessToken)
              }
            });
            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)();
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "MKdW":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/onboarding/retail-onboarding/retailoffer.model.ts ***!
      \***************************************************************************/

    /*! exports provided: RetailOffer */

    /***/
    function MKdW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailOffer", function () {
        return RetailOffer;
      });

      var RetailOffer = function RetailOffer() {
        _classCallCheck(this, RetailOffer);
      };
      /***/

    },

    /***/
    "NB6u":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/documentation/privacy-policy/privacy-policy.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: PrivacyPolicyComponent */

    /***/
    function NB6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent() {
          _classCallCheck(this, PrivacyPolicyComponent);
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
        return new (t || PrivacyPolicyComponent)();
      };

      PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyPolicyComponent,
        selectors: [["app-privacy-policy"]],
        decls: 43,
        vars: 0,
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Last Updated on : 9 March 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nThis Privacy Policy explains our practices regarding the collection, usage and disclosure of information that we receive from our users through our chat bot functionalities as made available by our product along with it's implementations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nPlease take a moment to familiarize yourself with our privacy practices and contact us if you have any questions.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\nInformation we collect from you\nPersonal information is data that can be used to identify or contact a single person. Since this chat bot is built to provide answers to basic questions related to a specific topic of discussion (Your Banking Queries), the interactions are not user-specific. Therefore, as we are not dealing with user specific data to provide our services, we do not collect any personal information of our users, except the queries asked by them. Our primary goal in collecting this textual information is to improve our services. But there is certain amount of information that is collected by the platforms and integrations our chat bot uses. This includes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Time zone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Location (Latitude and Longitude values wrapped in a Location object)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Query (Natural language text to be processed )");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "sessionID- a unique anonymous string of characters identifying the session, etc");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "How we use the information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\nWe only store the textual information to better our chat bots questions handling capacity and efficiency and also to ensure that the number of no match conversations is minimum. Other pieces of information mentioned above are necessary for the agents's functioning over various platforms. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "What information do we share?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " We never share the data with anyone. Data is collected solely for enhancing the response quality and the bot is built for the purpose of making the users aware of their banking needs. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "How users can change/delete their data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\nThe only way this chat bot can identify a user is with the help of a 'sessionID' which is a unique, anonymous string of characters which identifies their session. The users can choose any one of the two options called 'Reset App' or 'Stop this app from remembering me'. Doing this will change or reset the unique code the chat bot uses to remember them and hence the user will seem to be a new user during their next interaction with the app.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Privacy Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\nIf you have any questions or concerns about our Privacy Policy or data processing, or if you would like to reach out to us to report a possible breach of local privacy laws, please contact us. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Revisions to this Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\nAny information that is collected via our services is covered by our Privacy Policy in effect at the time such information is collected. We may revise this Privacy Policy from time to time. If any change is brought to this Privacy Policy, we will provide a proper notice of those changes on our service and also update the \u201CLast Updated on\u201D field above to indicate when those changes become effective.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdW1lbnRhdGlvbi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacy-policy',
            templateUrl: './privacy-policy.component.html',
            styleUrls: ['./privacy-policy.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PKdQ":
    /*!************************************************!*\
      !*** ./src/app/common/guards/LoggedInGuard.ts ***!
      \************************************************/

    /*! exports provided: UserStateGuard */

    /***/
    function PKdQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserStateGuard", function () {
        return UserStateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/modules/login/login.service */
      "AkfZ");
      /* harmony import */


      var src_app_modules_users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/users/user.service */
      "cOBw");

      var UserStateGuard = /*#__PURE__*/function () {
        function UserStateGuard(loginService, userService) {
          _classCallCheck(this, UserStateGuard);

          this.loginService = loginService;
          this.userService = userService;
        }

        _createClass(UserStateGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var isAuthenticated = this.loginService.isAuthenticated();
            console.log(sessionStorage.getItem('authenticated') === 'true');

            if (sessionStorage.getItem('authenticated') === 'true') {
              var loggedInUser = this.userService.getLoggedInUser();
              loggedInUser.subscribe(function (data) {
                console.log(data);

                if (!data) {
                  // No response from API
                  console.log('No response from API');
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                }

                if (data.status.status === 'SUCCESS') {
                  var user = data.data;

                  if (!user.accountNonExpired) {
                    // account expired
                    console.log('Account Expired');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                  }

                  if (!user.accountNonLocked) {
                    // account locked
                    console.log('Account Locked');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                  }

                  if (!user.credentialsNonExpired) {
                    // credentials expired
                    console.log('credentials expired');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                  }

                  if (!user.termsAccepted) {
                    // Terms not Accepted
                    console.log('Terms not Accepted');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                  }

                  if (user.firstTimePwdReset) {
                    // First Time Pwd Reset
                    console.log('First Time Pwd Reset');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                  }

                  console.log(' All well, move ahed');
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
                } else {
                  console.log(' some error');
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                }
              }, function (error) {
                console.log(' some error');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
            } else {
              console.log(' user is not authenticated');
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            }
          }
        }]);

        return UserStateGuard;
      }();

      UserStateGuard.ɵfac = function UserStateGuard_Factory(t) {
        return new (t || UserStateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_modules_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      UserStateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserStateGuard,
        factory: UserStateGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStateGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
          }, {
            type: src_app_modules_users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Pm11":
    /*!********************************************!*\
      !*** ./src/app/common/mock.interceptor.ts ***!
      \********************************************/

    /*! exports provided: MockInterceptor */

    /***/
    function Pm11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockInterceptor", function () {
        return MockInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _mock_mockresponse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mock/mockresponse.service */
      "fKSX");

      var MockInterceptor = /*#__PURE__*/function () {
        function MockInterceptor(mockResponseService) {
          _classCallCheck(this, MockInterceptor);

          this.mockResponseService = mockResponseService;
        }

        _createClass(MockInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var mock = sessionStorage.getItem('mock');

            if (mock === 'true' && !request.url.startsWith('assets')) {
              var mockRequestUrl = this.mockResponseService.getMockRequestUrl(request);
              var mockRequest = request.clone({
                url: mockRequestUrl,
                method: 'GET'
              });
              return next.handle(mockRequest);
            } else {
              // mocks are disabled here
              return next.handle(request);
            }
          }
        }]);

        return MockInterceptor;
      }();

      MockInterceptor.ɵfac = function MockInterceptor_Factory(t) {
        return new (t || MockInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mock_mockresponse_service__WEBPACK_IMPORTED_MODULE_1__["MockResponseService"]));
      };

      MockInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MockInterceptor,
        factory: MockInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _mock_mockresponse_service__WEBPACK_IMPORTED_MODULE_1__["MockResponseService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QAJo":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/modules/onboarding/onboarding-components/onboarding-form-notfound-error/onboarding-form-notfound-error.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: OnboardingFormNotfoundErrorComponent */

    /***/
    function QAJo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingFormNotfoundErrorComponent", function () {
        return OnboardingFormNotfoundErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OnboardingFormNotfoundErrorComponent = /*#__PURE__*/function () {
        function OnboardingFormNotfoundErrorComponent() {
          _classCallCheck(this, OnboardingFormNotfoundErrorComponent);
        }

        _createClass(OnboardingFormNotfoundErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OnboardingFormNotfoundErrorComponent;
      }();

      OnboardingFormNotfoundErrorComponent.ɵfac = function OnboardingFormNotfoundErrorComponent_Factory(t) {
        return new (t || OnboardingFormNotfoundErrorComponent)();
      };

      OnboardingFormNotfoundErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnboardingFormNotfoundErrorComponent,
        selectors: [["app-onboarding-form-notfound-error"]],
        decls: 2,
        vars: 0,
        template: function OnboardingFormNotfoundErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There is a setup error on this page. The developers have been informed of the error. Please check back in 1 hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWNvbXBvbmVudHMvb25ib2FyZGluZy1mb3JtLW5vdGZvdW5kLWVycm9yL29uYm9hcmRpbmctZm9ybS1ub3Rmb3VuZC1lcnJvci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingFormNotfoundErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-onboarding-form-notfound-error',
            templateUrl: './onboarding-form-notfound-error.component.html',
            styleUrls: ['./onboarding-form-notfound-error.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ReRb":
    /*!***************************************************************!*\
      !*** ./src/app/common/image-slider/image-slider.component.ts ***!
      \***************************************************************/

    /*! exports provided: ImageSliderComponent */

    /***/
    function ReRb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function () {
        return ImageSliderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ImageSliderComponent = /*#__PURE__*/function () {
        function ImageSliderComponent() {
          _classCallCheck(this, ImageSliderComponent);

          this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(2500);
        }

        _createClass(ImageSliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var i = 0;
            this.selectedImage = this.images[i];
            this.subscription = this.timer.subscribe(function () {
              _this3.selectedImage = _this3.images[i++];

              if (i === _this3.images.length) {
                i = 0;
              }
            });
          }
        }]);

        return ImageSliderComponent;
      }();

      ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) {
        return new (t || ImageSliderComponent)();
      };

      ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ImageSliderComponent,
        selectors: [["app-image-slider"]],
        inputs: {
          images: "images"
        },
        decls: 1,
        vars: 1,
        consts: [["width", "100%", "height", "100%", 3, "src"]],
        template: function ImageSliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSliderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-image-slider',
            templateUrl: './image-slider.component.html',
            styleUrls: ['./image-slider.component.css']
          }]
        }], function () {
          return [];
        }, {
          images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _theme_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./theme/main-layout/main-layout.component */
      "c5fU");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'retail-banking-angular';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-layout");
          }
        },
        directives: [_theme_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TN6E":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/modules/onboarding/onboarding-components/retail-exploring-onboarding/retail-exploring-onboarding.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: RetailExploringOnboardingComponent */

    /***/
    function TN6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailExploringOnboardingComponent", function () {
        return RetailExploringOnboardingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function RetailExploringOnboardingComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailExploringOnboardingComponent_form_0_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onEmailSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.profileForm.valid);
        }
      }

      function RetailExploringOnboardingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
        }
      }

      var RetailExploringOnboardingComponent = /*#__PURE__*/function () {
        function RetailExploringOnboardingComponent(fb) {
          _classCallCheck(this, RetailExploringOnboardingComponent);

          this.fb = fb;
        }

        _createClass(RetailExploringOnboardingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.profileForm = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onEmailSubmit",
          value: function onEmailSubmit() {
            console.log(this.profileForm);
            this.profileForm = null;
            this.message = 'A verification email has been sent to your email address. See you there!';
          }
        }]);

        return RetailExploringOnboardingComponent;
      }();

      RetailExploringOnboardingComponent.ɵfac = function RetailExploringOnboardingComponent_Factory(t) {
        return new (t || RetailExploringOnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      RetailExploringOnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RetailExploringOnboardingComponent,
        selectors: [["app-retail-exploring-onboarding"]],
        decls: 2,
        vars: 2,
        consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], [1, "full-width"], ["matInput", "", "placeholder", "Email Address", "formControlName", "email", "name", "profileForm.email", "email", ""], ["matInput", "", "type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
        template: function RetailExploringOnboardingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RetailExploringOnboardingComponent_form_0_Template, 8, 2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetailExploringOnboardingComponent_div_1_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmJvYXJkaW5nL29uYm9hcmRpbmctY29tcG9uZW50cy9yZXRhaWwtZXhwbG9yaW5nLW9uYm9hcmRpbmcvcmV0YWlsLWV4cGxvcmluZy1vbmJvYXJkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29uYm9hcmRpbmcvb25ib2FyZGluZy1jb21wb25lbnRzL3JldGFpbC1leHBsb3Jpbmctb25ib2FyZGluZy9yZXRhaWwtZXhwbG9yaW5nLW9uYm9hcmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetailExploringOnboardingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-retail-exploring-onboarding',
            templateUrl: './retail-exploring-onboarding.component.html',
            styleUrls: ['./retail-exploring-onboarding.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "V+XA":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/expandable-list/pageupdatedevent.model.ts ***!
      \*****************************************************************/

    /*! exports provided: PageUpdatedEventData */

    /***/
    function VXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageUpdatedEventData", function () {
        return PageUpdatedEventData;
      });

      var PageUpdatedEventData = function PageUpdatedEventData() {
        _classCallCheck(this, PageUpdatedEventData);
      };
      /***/

    },

    /***/
    "WZkU":
    /*!**************************************************************!*\
      !*** ./src/app/theme/notification/notification.component.ts ***!
      \**************************************************************/

    /*! exports provided: NotificationComponent */

    /***/
    function WZkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
        return NotificationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.service */
      "798l");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var NotificationComponent = /*#__PURE__*/function () {
        function NotificationComponent(notificationService, snackbar) {
          _classCallCheck(this, NotificationComponent);

          this.notificationService = notificationService;
          this.snackbar = snackbar;
        }

        _createClass(NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.showNotification = false;
            this.notificationService.notificationEvent.subscribe(function (message) {
              setTimeout(function () {
                _this4.showNotification = true;
                _this4.message = message.message;

                _this4.snackbar.open(_this4.message, 'Close', {
                  duration: 5000
                });

                setTimeout(function () {
                  _this4.showNotification = false;
                  _this4.message = '';
                }, 5000);
              });
            });
          }
        }]);

        return NotificationComponent;
      }();

      NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationComponent,
        selectors: [["app-notification"]],
        decls: 0,
        vars: 0,
        template: function NotificationComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notification',
            templateUrl: './notification.component.html',
            styleUrls: ['./notification.component.css']
          }]
        }], function () {
          return [{
            type: _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XoyV":
    /*!*******************************************************!*\
      !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function XoyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "6ACK");
      /* harmony import */


      var _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./portfolio-summary/portfolio-summary.component */
      "sOB0");
      /* harmony import */


      var src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/common/common.module */
      "a6Df");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./transactions-summary/transactions-summary.component */
      "Zreb");
      /* harmony import */


      var _quick_actions_bar_quick_actions_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./quick-actions-bar/quick-actions-bar.component */
      "uI0C");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioSummaryComponent"], _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_10__["TransactionsSummaryComponent"], _quick_actions_bar_quick_actions_bar_component__WEBPACK_IMPORTED_MODULE_11__["QuickActionsBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]],
          exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioSummaryComponent"], _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_10__["TransactionsSummaryComponent"], _quick_actions_bar_quick_actions_bar_component__WEBPACK_IMPORTED_MODULE_11__["QuickActionsBarComponent"]],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @src/app/app-routing.module */
      "vY5A");
      /* harmony import */


      var _src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @src/app/common/common.module */
      "a6Df");
      /* harmony import */


      var _src_app_modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @src/app/modules/welcome/welcome.module */
      "dODg");
      /* harmony import */


      var _src_app_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @src/app/page-layouts/page-layouts.module */
      "ARGo");
      /* harmony import */


      var _src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @src/app/theme/theme.module */
      "BLWB");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _src_app_common_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @src/app/common/token.interceptor */
      "LAIc");
      /* harmony import */


      var _src_app_common_mock_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @src/app/common/mock.interceptor */
      "Pm11");
      /* harmony import */


      var _src_app_common_mock_mockresponse_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @src/app/common/mock/mockresponse.service */
      "fKSX");
      /* harmony import */


      var _src_app_modules_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @src/app/modules/onboarding/onboarding.module */
      "yehu");
      /* harmony import */


      var _src_app_common_guards_LoggedInGuard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @src/app/common/guards/LoggedInGuard */
      "PKdQ");
      /* harmony import */


      var _src_app_modules_users_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @src/app/modules/users/user.service */
      "cOBw");
      /* harmony import */


      var _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @src/app/auto-generated/auto-generated.component */
      "4s4N");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _src_app_common_mock_interceptor__WEBPACK_IMPORTED_MODULE_11__["MockInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _src_app_common_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
          multi: true
        }, _src_app_common_mock_mockresponse_service__WEBPACK_IMPORTED_MODULE_12__["MockResponseService"], _src_app_common_guards_LoggedInGuard__WEBPACK_IMPORTED_MODULE_14__["UserStateGuard"], _src_app_modules_users_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"], _src_app_modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_5__["WelcomeModule"], _src_app_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutsModule"], _src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _src_app_modules_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_13__["OnboardingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_16__["AutoGeneratedComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"], _src_app_modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_5__["WelcomeModule"], _src_app_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutsModule"], _src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _src_app_modules_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_13__["OnboardingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_16__["AutoGeneratedComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _src_app_common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"], _src_app_modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_5__["WelcomeModule"], _src_app_page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutsModule"], _src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _src_app_modules_onboarding_onboarding_module__WEBPACK_IMPORTED_MODULE_13__["OnboardingModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
              useClass: _src_app_common_mock_interceptor__WEBPACK_IMPORTED_MODULE_11__["MockInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
              useClass: _src_app_common_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
              multi: true
            }, _src_app_common_mock_mockresponse_service__WEBPACK_IMPORTED_MODULE_12__["MockResponseService"], _src_app_common_guards_LoggedInGuard__WEBPACK_IMPORTED_MODULE_14__["UserStateGuard"], _src_app_modules_users_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Zreb":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: TransactionsSummaryComponent, ExampleHttpDatabase */

    /***/
    function Zreb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsSummaryComponent", function () {
        return TransactionsSummaryComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleHttpDatabase", function () {
        return ExampleHttpDatabase;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function TransactionsSummaryComponent_div_1_mat_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function TransactionsSummaryComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionsSummaryComponent_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingResults);
        }
      }

      function TransactionsSummaryComponent_th_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TransactionsSummaryComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r16.date));
        }
      }

      function TransactionsSummaryComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Narration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TransactionsSummaryComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r17.narration);
        }
      }

      function TransactionsSummaryComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cheque/Ref. No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TransactionsSummaryComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r18.reference);
        }
      }

      function TransactionsSummaryComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TransactionsSummaryComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r19.state);
        }
      }

      function TransactionsSummaryComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Closing Balance ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TransactionsSummaryComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r20.closingBalance);
        }
      }

      function TransactionsSummaryComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TransactionsSummaryComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.amount);
        }
      }

      function TransactionsSummaryComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
        }
      }

      function TransactionsSummaryComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
        }
      }

      var TransactionsSummaryComponent = /*#__PURE__*/function () {
        function TransactionsSummaryComponent(httpClient) {
          _classCallCheck(this, TransactionsSummaryComponent);

          this.httpClient = httpClient;
          this.displayedColumns = ['Date', 'Narration', 'Reference', 'State', 'Amount', 'ClosingBalance'];
          this.data = [];
          this.resultsLength = 3;
          this.isLoadingResults = true;
          this.isRateLimitReached = false;
        }

        _createClass(TransactionsSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // tslint:disable-next-line:max-line-length
            this.data.push({
              date: new Date(),
              state: 'debit',
              amount: '300',
              narration: 'Amazon',
              reference: '112423',
              closingBalance: '29700.00'
            }); // tslint:disable-next-line:max-line-length

            this.data.push({
              date: new Date(new Date().getDate() - 1),
              state: 'debit',
              amount: '5000',
              narration: 'School Fee',
              reference: 'check:828823',
              closingBalance: '30000.00'
            }); // tslint:disable-next-line:max-line-length

            this.data.push({
              date: new Date(new Date().getDate() - 1),
              state: 'credit',
              amount: '30000',
              narration: 'Salary Credit',
              reference: '112120',
              closingBalance: '35000.00'
            }); // this.data.push({date : new Date(new Date().getDate() - 2), number: '4', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 4), number: '5', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 8), number: '6', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 12), number: '7', state: 'credit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 12), number: '8', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 15), number: '9', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 21), number: '10', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 31), number: '11', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 41), number: '12', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 61), number: '13', state: 'credit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 71), number: '14', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 81), number: '15', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 91), number: '16', state: 'debit', narration: 'The narration'});
            // this.data.push({date : new Date(new Date().getDate() - 91), number: '17', state: 'debit', narration: 'The narration'});
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.isLoadingResults = false;
          }
        }]);

        return TransactionsSummaryComponent;
      }();

      TransactionsSummaryComponent.ɵfac = function TransactionsSummaryComponent_Factory(t) {
        return new (t || TransactionsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TransactionsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TransactionsSummaryComponent,
        selectors: [["app-transactions-summary"]],
        viewQuery: function TransactionsSummaryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 27,
        vars: 6,
        consts: [[1, "example-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], [1, "example-table-container"], ["mat-table", "", "MatSort", "", "matSortActive", "created", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "Date"], ["mat-header-cell", "", "id", "sno", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Narration"], ["mat-header-cell", "", "id", "title", 4, "matHeaderCellDef"], ["matColumnDef", "Reference"], ["mat-header-cell", "", "id", "state", 4, "matHeaderCellDef"], ["matColumnDef", "State"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", "id", "state", 4, "matHeaderCellDef"], ["matColumnDef", "ClosingBalance"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", "id", "closingBalance", 4, "matHeaderCellDef"], ["matColumnDef", "Amount"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", "id", "amount", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize"], [1, "example-loading-shade"], [4, "ngIf"], ["mat-header-cell", "", "id", "sno"], ["mat-cell", ""], ["mat-header-cell", "", "id", "title"], ["mat-header-cell", "", "id", "state"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", "id", "state"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", "id", "closingBalance"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", "id", "amount"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function TransactionsSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransactionsSummaryComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "caption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latest Transactions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TransactionsSummaryComponent_th_7_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TransactionsSummaryComponent_td_8_Template, 3, 3, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TransactionsSummaryComponent_th_10_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransactionsSummaryComponent_td_11_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransactionsSummaryComponent_th_13_Template, 2, 0, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TransactionsSummaryComponent_td_14_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TransactionsSummaryComponent_th_16_Template, 2, 0, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TransactionsSummaryComponent_td_17_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TransactionsSummaryComponent_th_19_Template, 2, 0, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TransactionsSummaryComponent_td_20_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TransactionsSummaryComponent_th_22_Template, 2, 0, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TransactionsSummaryComponent_td_23_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TransactionsSummaryComponent_tr_24_Template, 1, 0, "tr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TransactionsSummaryComponent_tr_25_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-paginator", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingResults || ctx.isRateLimitReached);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: [".example-container[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 200px;\n  }\n.example-table-container[_ngcontent-%COMP%] {\n    position: relative;\n    max-height: 400px;\n    overflow: auto;\n  }\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n.example-loading-shade[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n    color: #980000;\n    max-width: 360px;\n    text-align: center;\n  }\n\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n    max-width: 64px;\n  }\n.mat-column-created[_ngcontent-%COMP%] {\n    max-width: 124px;\n  }\ntable.mat-table[_ngcontent-%COMP%] {\n    border-spacing: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvdHJhbnNhY3Rpb25zLXN1bW1hcnkvdHJhbnNhY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3RyYW5zYWN0aW9ucy1zdW1tYXJ5L3RyYW5zYWN0aW9ucy1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS10YWJsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA1NnB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XG4gICAgY29sb3I6ICM5ODAwMDA7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8qIENvbHVtbiBXaWR0aHMgKi9cbiAgLm1hdC1jb2x1bW4tbnVtYmVyLFxuICAubWF0LWNvbHVtbi1zdGF0ZSB7XG4gICAgbWF4LXdpZHRoOiA2NHB4O1xuICB9XG4gIFxuICAubWF0LWNvbHVtbi1jcmVhdGVkIHtcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xuICB9XG4gIFxuICB0YWJsZS5tYXQtdGFibGUge1xuICAgIGJvcmRlci1zcGFjaW5nOiAxMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-transactions-summary',
            templateUrl: './transactions-summary.component.html',
            styleUrls: ['./transactions-summary.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
              "static": true
            }]
          }]
        });
      })();
      /** An example database that the data source uses to retrieve data for the table. */


      var ExampleHttpDatabase = /*#__PURE__*/function () {
        function ExampleHttpDatabase(http) {
          _classCallCheck(this, ExampleHttpDatabase);

          this.http = http;
        }

        _createClass(ExampleHttpDatabase, [{
          key: "getRepoIssues",
          value: function getRepoIssues(sort, order, page) {
            var href = 'https://api.github.com/search/issues';
            var requestUrl = "".concat(href, "?q=repo:angular/components&sort=").concat(sort, "&order=").concat(order, "&page=").concat(page + 1);
            console.log(requestUrl);
            return this.http.get(requestUrl);
          }
        }]);

        return ExampleHttpDatabase;
      }();
      /***/

    },

    /***/
    "a6Df":
    /*!*****************************************!*\
      !*** ./src/app/common/common.module.ts ***!
      \*****************************************/

    /*! exports provided: CommonAppModule */

    /***/
    function a6Df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonAppModule", function () {
        return CommonAppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./top-navigation-bar/top-navigation-bar.component */
      "jYA4");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./image-slider/image-slider.component */
      "ReRb");

      var CommonAppModule = function CommonAppModule() {
        _classCallCheck(this, CommonAppModule);
      };

      CommonAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CommonAppModule
      });
      CommonAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CommonAppModule_Factory(t) {
          return new (t || CommonAppModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonAppModule, {
          declarations: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavigationBarComponent"], _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__["ImageSliderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]],
          exports: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavigationBarComponent"], _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__["ImageSliderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonAppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavigationBarComponent"], _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__["ImageSliderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"]],
            exports: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopNavigationBarComponent"], _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_4__["ImageSliderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bupv":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/onboarding/retail-onboarding/retail-onboarding.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RetailOnboardingComponent */

    /***/
    function bupv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailOnboardingComponent", function () {
        return RetailOnboardingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _onboarding_components_onboarding_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../onboarding-components/onboarding.step */
      "qUzy");
      /* harmony import */


      var _onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../onboarding-components/onboardinghost.directive */
      "IeBz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _retailoffer_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./retailoffer.model */
      "MKdW");
      /* harmony import */


      var _onboarding_components_retail_exploring_onboarding_retail_exploring_onboarding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../onboarding-components/retail-exploring-onboarding/retail-exploring-onboarding.component */
      "TN6E");
      /* harmony import */


      var _onboarding_components_onboarding_form_notfound_error_onboarding_form_notfound_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../onboarding-components/onboarding-form-notfound-error/onboarding-form-notfound-error.component */
      "QAJo");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function RetailOnboardingComponent_mat_grid_tile_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailOnboardingComponent_mat_grid_tile_1_Template_mat_card_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var offer_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onOfferSelect(offer_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var offer_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", offer_r2.recomended);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r2.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r2.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r2.description);
        }
      }

      function RetailOnboardingComponent_ng_template_4_Template(rf, ctx) {}

      var RetailOnboardingComponent = /*#__PURE__*/function () {
        function RetailOnboardingComponent(componentFactoryResolver, formBuilder) {
          _classCallCheck(this, RetailOnboardingComponent);

          this.componentFactoryResolver = componentFactoryResolver;
          this.formBuilder = formBuilder;
          this.offers = [];
          this.currentAdIndex = -1;
          this.isLinear = false;
        }

        _createClass(RetailOnboardingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.offers.push(this.getExploringOffer());
            this.offers.push(this.getEnthusiasticOffer());
            this.offers.push(this.getProOffer());
            this.breakpoint = window.innerWidth <= 900 ? 1 : this.offers.length;
            this.onboardingSteps = [new _onboarding_components_onboarding_step__WEBPACK_IMPORTED_MODULE_1__["OnboardingStep"](_onboarding_components_retail_exploring_onboarding_retail_exploring_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["RetailExploringOnboardingComponent"], {
              name: 'Bombasto',
              bio: 'Brave as they come'
            })];
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.interval);
          }
        }, {
          key: "loadOfferForm",
          value: function loadOfferForm() {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.resolveFormComponent(this.selectedOffer.formName));
            var viewContainerRef = this.onboardingHost.viewContainerRef;
            viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = this.selectedOffer;
          }
        }, {
          key: "resolveFormComponent",
          value: function resolveFormComponent(formName) {
            var formComponents = [{
              id: 'RetailExploringOnboardingComponent',
              component: _onboarding_components_retail_exploring_onboarding_retail_exploring_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["RetailExploringOnboardingComponent"]
            }];
            var selectedFormComponent = formComponents.find(function (x) {
              return x.id === formName;
            });

            if (selectedFormComponent == null) {
              return _onboarding_components_onboarding_form_notfound_error_onboarding_form_notfound_error_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingFormNotfoundErrorComponent"];
            }

            return selectedFormComponent.component || _onboarding_components_onboarding_form_notfound_error_onboarding_form_notfound_error_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingFormNotfoundErrorComponent"];
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.breakpoint = event.target.innerWidth <= 900 ? 1 : this.offers.length;
          }
        }, {
          key: "onOfferSelect",
          value: function onOfferSelect(selectedOffer) {
            this.offers.forEach(function (offer) {
              offer.recomended = offer.id === selectedOffer.id;
            });
            this.selectedOffer = selectedOffer;
            this.loadOfferForm();
          }
        }, {
          key: "getExploringOffer",
          value: function getExploringOffer() {
            var exploring = new _retailoffer_model__WEBPACK_IMPORTED_MODULE_4__["RetailOffer"]();
            exploring.id = 1;
            exploring.title = 'Exploring';
            exploring.subtitle = 'No Strings Attached';
            exploring.description = 'Explore our offering without opening a savings account. Best if you would like to view our interface and decide later! We just need your email or phone number to begin with.';
            exploring.formName = 'RetailExploringOnboardingComponent';
            return exploring;
          }
        }, {
          key: "getEnthusiasticOffer",
          value: function getEnthusiasticOffer() {
            var enthusiastic = new _retailoffer_model__WEBPACK_IMPORTED_MODULE_4__["RetailOffer"]();
            enthusiastic.id = 2;
            enthusiastic.recomended = true;
            enthusiastic.title = 'Enthusiastic';
            enthusiastic.subtitle = 'Get your savings account in 2 mins!';
            enthusiastic.description = 'Open your accounts with us. Provide us your Aadhar card, Pan card and initial seed money of Rs. 10,000';
            enthusiastic.formName = 'RetailEnthusiasticOnboardingComponent';
            return enthusiastic;
          }
        }, {
          key: "getProOffer",
          value: function getProOffer() {
            var pro = new _retailoffer_model__WEBPACK_IMPORTED_MODULE_4__["RetailOffer"]();
            pro.id = 3;
            pro.title = 'Pro';
            pro.subtitle = 'Save like a Professional';
            pro.description = 'Get the best of our technological and analytical skills to save your money like a professional';
            pro.formName = 'RetailProOnboardingComponent';
            return pro;
          }
        }]);

        return RetailOnboardingComponent;
      }();

      RetailOnboardingComponent.ɵfac = function RetailOnboardingComponent_Factory(t) {
        return new (t || RetailOnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      RetailOnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RetailOnboardingComponent,
        selectors: [["app-retail-onboarding"]],
        viewQuery: function RetailOnboardingComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_2__["OnboardingDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.onboardingHost = _t.first);
          }
        },
        decls: 5,
        vars: 3,
        consts: [["rowHeight", "200px", 3, "cols", "gutterSize", "resize"], ["class", "offer-tile", 4, "ngFor", "ngForOf"], ["appOnboardingHost", ""], [1, "offer-tile"], [1, "offer-card", 3, "click"]],
        template: function RetailOnboardingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function RetailOnboardingComponent_Template_mat_grid_list_resize_0_listener($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetailOnboardingComponent_mat_grid_tile_1_Template, 8, 5, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RetailOnboardingComponent_ng_template_4_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint)("gutterSize", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.offers);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_2__["OnboardingDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"]],
        styles: [".offer-tile[_ngcontent-%COMP%]{\n    margin:16px;\n}\n.offer-card[_ngcontent-%COMP%] {\n    margin: 4em;\n    background-color: burlywood;\n    text-align: center;\n    box-shadow: 5px 5px rosybrown;    \n    transition: all 1s ease;\n    cursor: pointer;\n}\n.offer-card[_ngcontent-%COMP%]:hover {    \n    transform:scale(1.15);\n}\n.selected[_ngcontent-%COMP%] {\n    background-color: brown;\n    color: wheat;\n}\n.selected[_ngcontent-%COMP%]    > .mat-card-subtitle[_ngcontent-%COMP%] {\n    color: rgb(249, 244, 236);\n}\n.mat-card-actions[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    padding: 8px 0;\n}\n.mat-grid-tile[_ngcontent-%COMP%]    > .mat-figure[_ngcontent-%COMP%] {\n    margin: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vbmJvYXJkaW5nL3JldGFpbC1vbmJvYXJkaW5nL3JldGFpbC1vbmJvYXJkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLDZCQUE2QixFQUNJLHNCQUFzQixFQUN6QixZQUFZLEVBQ2IsU0FBUyxFQUNWLFVBQVU7SUFDdEMsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQSxvQkFDbUMsc0JBQXNCLEVBQ3pCLFlBQVksRUFDYixTQUFTLEVBQ1YsVUFBVTtJQUNuQyxxQkFBcUI7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vbmJvYXJkaW5nL3JldGFpbC1vbmJvYXJkaW5nL3JldGFpbC1vbmJvYXJkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2ZmZXItdGlsZXtcbiAgICBtYXJnaW46MTZweDtcbn1cbi5vZmZlci1jYXJkIHtcbiAgICBtYXJnaW46IDRlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcm9zeWJyb3duO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgLyogRmlyZWZveCAqL1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgLyogSUUgOSAqL1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcyBlYXNlOyAvKiBPcGVyYSAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vZmZlci1jYXJkOmhvdmVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjI1KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTsgLyogRmlyZWZveCAqL1xuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7IC8qIElFIDkgKi9cbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7IC8qIE9wZXJhICovXG4gICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcbn1cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XG4gICAgY29sb3I6IHdoZWF0O1xufVxuLnNlbGVjdGVkID4gLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ0LCAyMzYpO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDA7XG59XG4ubWF0LWdyaWQtdGlsZSA+IC5tYXQtZmlndXJlIHtcbiAgICBtYXJnaW46IDQwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetailOnboardingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-retail-onboarding',
            templateUrl: './retail-onboarding.component.html',
            styleUrls: ['./retail-onboarding.component.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, {
          onboardingHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_2__["OnboardingDirective"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "c5fU":
    /*!************************************************************!*\
      !*** ./src/app/theme/main-layout/main-layout.component.ts ***!
      \************************************************************/

    /*! exports provided: MainLayoutComponent */

    /***/
    function c5fU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
        return MainLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../top-fixed-bar/top-fixed-bar.component */
      "sYca");
      /* harmony import */


      var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../notification/notification.component */
      "WZkU");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../footer-bar/footer-bar.component */
      "6FW0");

      var MainLayoutComponent = /*#__PURE__*/function () {
        function MainLayoutComponent() {
          _classCallCheck(this, MainLayoutComponent);
        }

        _createClass(MainLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainLayoutComponent;
      }();

      MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) {
        return new (t || MainLayoutComponent)();
      };

      MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainLayoutComponent,
        selectors: [["app-main-layout"]],
        decls: 5,
        vars: 0,
        consts: [[1, "mainContent"]],
        template: function MainLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-fixed-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer-bar");
          }
        },
        directives: [_top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopFixedBarComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_4__["FooterBarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-layout',
            templateUrl: './main-layout.component.html',
            styleUrls: ['./main-layout.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cOBw":
    /*!***********************************************!*\
      !*** ./src/app/modules/users/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function cOBw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/backendAPIs */
      "0I2G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, backendAPIs) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.backendAPIs = backendAPIs;
        }

        _createClass(UserService, [{
          key: "getUsers",
          value: function getUsers(pageSize, pageNumber) {
            return this.http.get(this.backendAPIs.getUsersListAPI(pageSize, pageNumber));
          }
        }, {
          key: "getLoggedInUser",
          value: function getLoggedInUser() {
            return this.http.get(this.backendAPIs.getLoggedInUserAPI());
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_1__["BackendAPIService"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_1__["BackendAPIService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dODg":
    /*!***************************************************!*\
      !*** ./src/app/modules/welcome/welcome.module.ts ***!
      \***************************************************/

    /*! exports provided: WelcomeModule */

    /***/
    function dODg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeModule", function () {
        return WelcomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome-component/welcome-component.component */
      "2RIa");
      /* harmony import */


      var _login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../login/login.module */
      "g7DB");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/common/common.module */
      "a6Df");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/register.component */
      "iBhv");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var WelcomeModule = function WelcomeModule() {
        _classCallCheck(this, WelcomeModule);
      };

      WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: WelcomeModule
      });
      WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function WelcomeModule_Factory(t) {
          return new (t || WelcomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, {
          declarations: [_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fKSX":
    /*!*****************************************************!*\
      !*** ./src/app/common/mock/mockresponse.service.ts ***!
      \*****************************************************/

    /*! exports provided: MockResponseService */

    /***/
    function fKSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MockResponseService", function () {
        return MockResponseService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MockResponseService = /*#__PURE__*/function () {
        function MockResponseService(http) {
          _classCallCheck(this, MockResponseService);

          this.http = http;
        }

        _createClass(MockResponseService, [{
          key: "getMockRequestUrl",
          value: function getMockRequestUrl(request) {
            var mockUrl = request.url.replace(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl, '');
            return 'assets/mocks' + mockUrl + '/' + request.method + '/default.json';
          }
        }]);

        return MockResponseService;
      }();

      MockResponseService.ɵfac = function MockResponseService_Factory(t) {
        return new (t || MockResponseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      MockResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MockResponseService,
        factory: MockResponseService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MockResponseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g7DB":
    /*!***********************************************!*\
      !*** ./src/app/modules/login/login.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginModule */

    /***/
    function g7DB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
        return LoginModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-form/login-form.component */
      "lRZq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./logout/logout.component */
      "EV6F");
      /* harmony import */


      var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../dashboard/dashboard.module */
      "XoyV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LoginModule
      });
      LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LoginModule_Factory(t) {
          return new (t || LoginModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
          declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]],
          exports: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]],
            declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]],
            exports: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "iBhv":
    /*!****************************************************************!*\
      !*** ./src/app/modules/welcome/register/register.component.ts ***!
      \****************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function iBhv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _onboarding_onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../onboarding/onboarding-start-options/onboarding-start-options.component */
      "/Wfu");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(dialog) {
          _classCallCheck(this, RegisterComponent);

          this.dialog = dialog;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "startOnboarding",
          value: function startOnboarding() {
            this.dialog.open(_onboarding_onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingStartOptionsComponent"], {
              height: '800px',
              width: '600px'
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 5,
        vars: 1,
        consts: [[1, "register-card"], ["mat-raised-button", "", 3, "color", "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New here? Register to experience a new world of banking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_3_listener() {
              return ctx.startOnboarding();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".register-card[_ngcontent-%COMP%] {\n    min-width: 200px;\n    max-width: 600px;\n    width: 100%; \n    align-self: center;\n    align-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWxjb21lL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFFWCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy93ZWxjb21lL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyOyBcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jYA4":
    /*!***************************************************************************!*\
      !*** ./src/app/common/top-navigation-bar/top-navigation-bar.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TopNavigationBarComponent */

    /***/
    function jYA4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopNavigationBarComponent", function () {
        return TopNavigationBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TopNavigationBarComponent = /*#__PURE__*/function () {
        function TopNavigationBarComponent() {
          _classCallCheck(this, TopNavigationBarComponent);
        }

        _createClass(TopNavigationBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TopNavigationBarComponent;
      }();

      TopNavigationBarComponent.ɵfac = function TopNavigationBarComponent_Factory(t) {
        return new (t || TopNavigationBarComponent)();
      };

      TopNavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TopNavigationBarComponent,
        selectors: [["app-top-navigation-bar"]],
        decls: 2,
        vars: 0,
        template: function TopNavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "top-navigation-bar works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b3AtbmF2aWdhdGlvbi1iYXIvdG9wLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-top-navigation-bar',
            templateUrl: './top-navigation-bar.component.html',
            styleUrls: ['./top-navigation-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "lRZq":
    /*!******************************************************************!*\
      !*** ./src/app/modules/login/login-form/login-form.component.ts ***!
      \******************************************************************/

    /*! exports provided: LoginFormComponent */

    /***/
    function lRZq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
        return LoginFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../login.service */
      "AkfZ");
      /* harmony import */


      var src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/theme/notification/notification.service */
      "798l");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _users_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../users/user.model */
      "pCRl");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function LoginFormComponent_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_mat_icon_8_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.togglePasswordView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginFormComponent_mat_icon_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_mat_icon_9_Template_mat_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.togglePasswordView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "visibility_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginFormComponent = /*#__PURE__*/function () {
        function LoginFormComponent(loginService, notificationService, router) {
          _classCallCheck(this, LoginFormComponent);

          this.loginService = loginService;
          this.notificationService = notificationService;
          this.router = router;
        }

        _createClass(LoginFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showPassword = false;
          }
        }, {
          key: "login",
          value: function login(loginForm) {
            var _this5 = this;

            if (loginForm.valid) {
              var user = new _users_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
              user.username = loginForm.value.username;
              user.password = loginForm.value.password;
              this.loginService.login(user).subscribe(function (response) {
                console.log(' login response');
                console.log(response);

                if (response.status.status === 'SUCCESS') {
                  console.log(sessionStorage.getItem('authenticated') === 'true');
                  sessionStorage.setItem('authenticated', 'true');
                  console.log(sessionStorage.getItem('authenticated') === 'true');
                  var isAdminUser = false;

                  for (var i = 0; i < response.data.authorities.length; i++) {
                    if (response.data.authorities[i].authority === 'ADMIN') {
                      isAdminUser = true;
                      break;
                    }
                  }

                  if (isAdminUser) {
                    _this5.router.navigate(['admin-dashboard']);
                  } else {
                    _this5.router.navigate(['dashboard']);
                  }
                } else {
                  _this5.notificationService.sendNotification('User login Error!');
                }
              }, function (error) {
                console.log('error during login');

                if (error.status === 401) {
                  _this5.notificationService.sendNotification('Invalid Credentials!');
                } else {
                  _this5.notificationService.sendNotification('An error occurred!');
                }

                console.log(error);
              });
            }
          }
        }, {
          key: "togglePasswordView",
          value: function togglePasswordView() {
            this.showPassword = !this.showPassword;
          }
        }]);

        return LoginFormComponent;
      }();

      LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
        return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginFormComponent,
        selectors: [["app-login-form"]],
        decls: 14,
        vars: 6,
        consts: [[1, "login-card"], [1, "login-form", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "login-form"], [1, "full-width"], ["placeholder", "Username", "name", "username", "type", "text", "ngModel", "", "matInput", "", "required", ""], ["placeholder", "Password", "name", "password", "ngModel", "", "matInput", "", "required", "", 3, "type"], ["matSuffix", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", 1, "create-article-save", 3, "disabled", "color"], ["mat-raised-button", "", "type", "reset", 1, "create-article-clear", 3, "color"], ["matSuffix", "", 3, "click"]],
        template: function LoginFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return ctx.login(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginFormComponent_mat_icon_8_Template, 2, 0, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginFormComponent_mat_icon_9_Template, 2, 0, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Clear!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid)("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"]],
        styles: [".login-form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .login-card[_ngcontent-%COMP%] {\n    min-width: 200px;\n    max-width: 600px;\n    width: 100%; \n    align-self: center;\n    align-content: center;\n  }\n  \n  .mat-raised-button[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBRVgsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubG9naW4tY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyOyBcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login-form',
            templateUrl: './login-form.component.html',
            styleUrls: ['./login-form.component.css']
          }]
        }], function () {
          return [{
            type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
          }, {
            type: src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pCRl":
    /*!*********************************************!*\
      !*** ./src/app/modules/users/user.model.ts ***!
      \*********************************************/

    /*! exports provided: User */

    /***/
    function pCRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "pqYQ":
    /*!***************************************************************!*\
      !*** ./src/app/page-layouts/pre-login/pre-login.component.ts ***!
      \***************************************************************/

    /*! exports provided: PreLoginComponent */

    /***/
    function pqYQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreLoginComponent", function () {
        return PreLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _common_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../common/top-navigation-bar/top-navigation-bar.component */
      "jYA4");

      var PreLoginComponent = /*#__PURE__*/function () {
        function PreLoginComponent() {
          _classCallCheck(this, PreLoginComponent);
        }

        _createClass(PreLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PreLoginComponent;
      }();

      PreLoginComponent.ɵfac = function PreLoginComponent_Factory(t) {
        return new (t || PreLoginComponent)();
      };

      PreLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PreLoginComponent,
        selectors: [["app-pre-login"]],
        decls: 3,
        vars: 0,
        template: function PreLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-navigation-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "pre-login works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_common_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopNavigationBarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbGF5b3V0cy9wcmUtbG9naW4vcHJlLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pre-login',
            templateUrl: './pre-login.component.html',
            styleUrls: ['./pre-login.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "qUzy":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/onboarding/onboarding-components/onboarding.step.ts ***!
      \*****************************************************************************/

    /*! exports provided: OnboardingStep */

    /***/
    function qUzy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingStep", function () {
        return OnboardingStep;
      });

      var OnboardingStep = function OnboardingStep(component, data) {
        _classCallCheck(this, OnboardingStep);

        this.component = component;
        this.data = data;
      };
      /***/

    },

    /***/
    "sOB0":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts ***!
      \************************************************************************************/

    /*! exports provided: PortfolioSummaryComponent */

    /***/
    function sOB0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioSummaryComponent", function () {
        return PortfolioSummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accounts.service */
      "5ys1");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PortfolioSummaryComponent = /*#__PURE__*/function () {
        function PortfolioSummaryComponent(accountsService) {
          _classCallCheck(this, PortfolioSummaryComponent);

          this.accountsService = accountsService;
          this.accountsTotal = 0;
          this.totalDueThisMonth = 0;
          this.totalLoanAmountPending = 0;
          this.savingsTotal = 0;
          this.depositsTotal = 0;
        }

        _createClass(PortfolioSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.accountsService.getSavingsAccounts().subscribe(function (accounts) {
              _this6.savingsAccounts = accounts;

              _this6.savingsAccounts.forEach(function (account) {
                _this6.accountsTotal += account.balance;
                _this6.savingsTotal += account.balance;
              });
            });
            this.accountsService.getDepositAccounts().subscribe(function (depositAccounts) {
              _this6.depositAccounts = depositAccounts;

              _this6.depositAccounts.forEach(function (account) {
                _this6.accountsTotal += account.balance;
                _this6.depositsTotal += account.balance;
              });
            });
            this.accountsService.getLoanAccounts().subscribe(function (loans) {
              _this6.loans = loans;

              _this6.loans.forEach(function (account) {
                _this6.totalDueThisMonth += account.monthlyEmi;
                _this6.totalLoanAmountPending += account.initialAmount - account.paidAmount;
              });
            });
            this.accountsService.getCardAccounts().subscribe(function (cards) {
              _this6.cards = cards;

              _this6.cards.forEach(function (card) {
                if (card.balance < 0) {
                  _this6.totalDueThisMonth += card.balance;
                }
              });
            });
          }
        }]);

        return PortfolioSummaryComponent;
      }();

      PortfolioSummaryComponent.ɵfac = function PortfolioSummaryComponent_Factory(t) {
        return new (t || PortfolioSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]));
      };

      PortfolioSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioSummaryComponent,
        selectors: [["app-portfolio-summary"]],
        decls: 14,
        vars: 40,
        consts: [["cols", "6", "rowHeight", "30px"], [3, "colspan", "rowspan"]],
        template: function PortfolioSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 6)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Your total balance is ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](4, 20, ctx.accountsTotal, "\u20B9", "symbol", 0), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Savings ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 25, ctx.savingsTotal, "\u20B9", "symbol", 0), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Deposits ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 30, ctx.depositsTotal, "\u20B9", "symbol", 0), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "white");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 2)("rowspan", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Pending Loans ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](13, 35, ctx.totalLoanAmountPending, "\u20B9", "symbol", 0), " ");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: ["[_nghost-%COMP%] {\n    display: block;\n    left: 0;\n    width: 90%; \n    height: 100%;  \n}\nmat-card[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.mat-grid-tile[_ngcontent-%COMP%] {\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcG9ydGZvbGlvLXN1bW1hcnkvcG9ydGZvbGlvLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcG9ydGZvbGlvLXN1bW1hcnkvcG9ydGZvbGlvLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5MCU7IFxuICAgIGhlaWdodDogMTAwJTsgIFxufVxubWF0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioSummaryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio-summary',
            templateUrl: './portfolio-summary.component.html',
            styleUrls: ['./portfolio-summary.component.css']
          }]
        }], function () {
          return [{
            type: _accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sYca":
    /*!****************************************************************!*\
      !*** ./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts ***!
      \****************************************************************/

    /*! exports provided: TopFixedBarComponent */

    /***/
    function sYca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopFixedBarComponent", function () {
        return TopFixedBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/modules/login/login.service */
      "AkfZ");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function TopFixedBarComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Retail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "business_center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Corporate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "show_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Investment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TopFixedBarComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "business_center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transactions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "show_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Investments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TopFixedBarComponent = /*#__PURE__*/function () {
        function TopFixedBarComponent(loginService) {
          _classCallCheck(this, TopFixedBarComponent);

          this.loginService = loginService;
        }

        _createClass(TopFixedBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isMock = sessionStorage.getItem('mock') === 'true';
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.loginService.isAuthenticated();
          }
        }, {
          key: "toggleMock",
          value: function toggleMock() {
            this.isMock = !this.isMock;
            sessionStorage.setItem('mock', this.isMock ? 'true' : 'false');
            console.log(this.isMock);
          }
        }]);

        return TopFixedBarComponent;
      }();

      TopFixedBarComponent.ɵfac = function TopFixedBarComponent_Factory(t) {
        return new (t || TopFixedBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
      };

      TopFixedBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TopFixedBarComponent,
        selectors: [["app-top-fixed-bar"]],
        decls: 9,
        vars: 3,
        consts: [[1, "primary", "toolbar"], [1, "menuItem"], [4, "ngIf"], [1, "menuItem", "primary", 3, "checked", "change"], ["routerLink", "/", "routerLinkActive", "active", 1, "menuItem", "primary"], ["mat-button", "", "mat-flat-button", "", 1, "primary"], [1, "primary"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "menuItem", "primary"], ["routerLink", "/logout", "routerLinkActive", "active", 1, "menuItem", "primary", "last"]],
        template: function TopFixedBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "XBank!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopFixedBarComponent_span_5_Template, 25, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopFixedBarComponent_span_6_Template, 31, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-checkbox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TopFixedBarComponent_Template_mat_checkbox_change_7_listener() {
              return ctx.toggleMock();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isMock);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        styles: ["button[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\nmat-icon[_ngcontent-%COMP%]{\n    margin-right: 10px;\n}\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%] {\n    min-height: 0; \n}\n.mat-toolbar-row[_ngcontent-%COMP%] {\n    height: unset;\n}\n.last[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0%;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n    color: white;\n}\n.toolbar[_ngcontent-%COMP%] {\n    border-bottom: orange;\n    border-bottom-style: solid;\n    border-width: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdG9wLWZpeGVkLWJhci90b3AtZml4ZWQtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS90b3AtZml4ZWQtYmFyL3RvcC1maXhlZC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5tYXQtaWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XG4gICAgbWluLWhlaWdodDogMDsgXG59XG4ubWF0LXRvb2xiYXItcm93IHtcbiAgICBoZWlnaHQ6IHVuc2V0O1xufVxuXG4ubGFzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwJTtcbn1cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRvb2xiYXIge1xuICAgIGJvcmRlci1ib3R0b206IG9yYW5nZTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopFixedBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-top-fixed-bar',
            templateUrl: './top-fixed-bar.component.html',
            styleUrls: ['./top-fixed-bar.component.css']
          }]
        }], function () {
          return [{
            type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uI0C":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/dashboard/quick-actions-bar/quick-actions-bar.component.ts ***!
      \************************************************************************************/

    /*! exports provided: QuickActionsBarComponent */

    /***/
    function uI0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickActionsBarComponent", function () {
        return QuickActionsBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QuickActionsBarComponent = /*#__PURE__*/function () {
        function QuickActionsBarComponent() {
          _classCallCheck(this, QuickActionsBarComponent);
        }

        _createClass(QuickActionsBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QuickActionsBarComponent;
      }();

      QuickActionsBarComponent.ɵfac = function QuickActionsBarComponent_Factory(t) {
        return new (t || QuickActionsBarComponent)();
      };

      QuickActionsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuickActionsBarComponent,
        selectors: [["app-quick-actions-bar"]],
        decls: 2,
        vars: 0,
        template: function QuickActionsBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quick-actions-bar works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3F1aWNrLWFjdGlvbnMtYmFyL3F1aWNrLWFjdGlvbnMtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickActionsBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-quick-actions-bar',
            templateUrl: './quick-actions-bar.component.html',
            styleUrls: ['./quick-actions-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _modules_welcome_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/welcome/welcome-component/welcome-component.component */
      "2RIa");
      /* harmony import */


      var _modules_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/dashboard/dashboard/dashboard.component */
      "6ACK");
      /* harmony import */


      var _modules_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/login/logout/logout.component */
      "EV6F");
      /* harmony import */


      var _modules_onboarding_retail_onboarding_retail_onboarding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/onboarding/retail-onboarding/retail-onboarding.component */
      "bupv");
      /* harmony import */


      var _modules_users_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modules/users/email-verification/email-verification.component */
      "AcBg");
      /* harmony import */


      var _common_guards_LoggedInGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./common/guards/LoggedInGuard */
      "PKdQ");
      /* harmony import */


      var _modules_documentation_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/documentation/privacy-policy/privacy-policy.component */
      "NB6u");

      var routes = [{
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: 'login',
        redirectTo: 'welcome'
      }, {
        path: 'welcome',
        component: _modules_welcome_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
      }, {
        path: 'retail-onboarding',
        component: _modules_onboarding_retail_onboarding_retail_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["RetailOnboardingComponent"]
      }, {
        path: 'email-verify',
        component: _modules_users_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_6__["EmailVerificationComponent"]
      }, {
        path: 'dashboard',
        component: _modules_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_common_guards_LoggedInGuard__WEBPACK_IMPORTED_MODULE_7__["UserStateGuard"]]
      }, {
        path: 'logout',
        component: _modules_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"]
      }, {
        path: 'privacy',
        component: _modules_documentation_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPolicyComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "yehu":
    /*!*********************************************************!*\
      !*** ./src/app/modules/onboarding/onboarding.module.ts ***!
      \*********************************************************/

    /*! exports provided: OnboardingModule */

    /***/
    function yehu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingModule", function () {
        return OnboardingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./onboarding-start-options/onboarding-start-options.component */
      "/Wfu");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _retail_onboarding_retail_onboarding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./retail-onboarding/retail-onboarding.component */
      "bupv");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./onboarding-components/onboardinghost.directive */
      "IeBz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _onboarding_components_retail_exploring_onboarding_retail_exploring_onboarding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./onboarding-components/retail-exploring-onboarding/retail-exploring-onboarding.component */
      "TN6E");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _onboarding_components_onboarding_form_notfound_error_onboarding_form_notfound_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./onboarding-components/onboarding-form-notfound-error/onboarding-form-notfound-error.component */
      "QAJo");

      var OnboardingModule = function OnboardingModule() {
        _classCallCheck(this, OnboardingModule);
      };

      OnboardingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnboardingModule
      });
      OnboardingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnboardingModule_Factory(t) {
          return new (t || OnboardingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnboardingModule, {
          declarations: [_onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingStartOptionsComponent"], _retail_onboarding_retail_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["RetailOnboardingComponent"], _onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_9__["OnboardingDirective"], _onboarding_components_retail_exploring_onboarding_retail_exploring_onboarding_component__WEBPACK_IMPORTED_MODULE_12__["RetailExploringOnboardingComponent"], _onboarding_components_onboarding_form_notfound_error_onboarding_form_notfound_error_component__WEBPACK_IMPORTED_MODULE_14__["OnboardingFormNotfoundErrorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
          exports: [_onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingStartOptionsComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingStartOptionsComponent"], _retail_onboarding_retail_onboarding_component__WEBPACK_IMPORTED_MODULE_5__["RetailOnboardingComponent"], _onboarding_components_onboardinghost_directive__WEBPACK_IMPORTED_MODULE_9__["OnboardingDirective"], _onboarding_components_retail_exploring_onboarding_retail_exploring_onboarding_component__WEBPACK_IMPORTED_MODULE_12__["RetailExploringOnboardingComponent"], _onboarding_components_onboarding_form_notfound_error_onboarding_form_notfound_error_component__WEBPACK_IMPORTED_MODULE_14__["OnboardingFormNotfoundErrorComponent"]],
            exports: [_onboarding_start_options_onboarding_start_options_component__WEBPACK_IMPORTED_MODULE_2__["OnboardingStartOptionsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map