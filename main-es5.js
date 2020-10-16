function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-layout></app-main-layout>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/top-navigation-bar/top-navigation-bar.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/top-navigation-bar/top-navigation-bar.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonTopNavigationBarTopNavigationBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>top-navigation-bar works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard/dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard/dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDashboardDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-grid-list cols=\"11\" rowHeight=\"100px\">\n    <mat-grid-tile\n        [colspan]=\"11\"\n        [rowspan]=\"1\"\n        [style.background]=\"white\">\n    </mat-grid-tile>\n    \n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"7\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n        <app-portfolio-summary></app-portfolio-summary>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"red\">\n    </mat-grid-tile>\n\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"7\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n        <app-transactions-summary></app-transactions-summary>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"red\">\n    </mat-grid-tile>\n\n    \n  </mat-grid-list>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDashboardPortfolioSummaryPortfolioSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n    <mat-grid-list cols=\"6\" rowHeight=\"30px\">\n        <mat-grid-tile\n            [colspan]=\"6\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Your total balance is {{accountsTotal |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n        <mat-grid-tile\n            [colspan]=\"2\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Savings {{savingsTotal |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n        <mat-grid-tile\n            [colspan]=\"2\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Deposits {{depositsTotal |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n        <mat-grid-tile\n            [colspan]=\"2\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Pending Loans {{totalLoanAmountPending |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n      </mat-grid-list>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/transactions-summary/transactions-summary.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/transactions-summary/transactions-summary.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDashboardTransactionsSummaryTransactionsSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-loading-shade\"\n         *ngIf=\"isLoadingResults || isRateLimitReached\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n        GitHub's API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div>\n  \n    <div class=\"example-table-container\">\n  \n      <table mat-table [dataSource]=\"data\" class=\"example-table\"\n             matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"number\">\n          <th mat-header-cell *matHeaderCellDef>#</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n        </ng-container>\n  \n        <!-- Title Column -->\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef>Title</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n        </ng-container>\n  \n        <!-- State Column -->\n        <ng-container matColumnDef=\"state\">\n          <th mat-header-cell *matHeaderCellDef>State</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n        </ng-container>\n  \n        <!-- Created Column -->\n        <ng-container matColumnDef=\"created\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n            Created\n          </th>\n          <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  \n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-form/login-form.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-form/login-form.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLoginLoginFormLoginFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"login-card\">\n    <form (ngSubmit)=\"login(loginForm)\" #loginForm=\"ngForm\" class=\"login-form\">\n        <div class=\"login-form\">\n           <mat-form-field class=\"full-width\">\n             <input \n             placeholder=\"Username\" \n             name=\"username\"\n             type=\"text\"\n             ngModel \n             matInput\n             required>\n           </mat-form-field>\n           <mat-form-field class=\"full-width\">\n              <input \n              placeholder=\"password\" \n              name=\"password\"\n              type=\"password\"\n              ngModel \n              matInput\n              required>\n            </mat-form-field>\n           \n         </div>\n         <button \n         mat-raised-button \n         class=\"create-article-save\" \n         [disabled]=\"loginForm.invalid\"\n         [color]=\"'primary'\" \n         type=\"submit\"\n         > Login</button>\n         <button mat-raised-button class=\"create-article-clear\" [color]=\"'warn'\" type=\"reset\"> Clear!</button>\n       </form>\n</mat-card>\n\n   ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/logout/logout.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/logout/logout.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLoginLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/welcome/welcome-component/welcome-component.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/welcome/welcome-component/welcome-component.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesWelcomeWelcomeComponentWelcomeComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-grid-list cols=\"11\" rowHeight=\"100px\">\n    <mat-grid-tile\n        [colspan]=\"11\"\n        [rowspan]=\"1\"\n        >\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        >\n        <p>This is a welcome component. We will use this page to display the following</p>\n            <ul>\n                <li>Latest updates</li>\n                <li>Information of our products</li>\n                <li>onboarding options</li>\n            </ul>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"5\"\n        [rowspan]=\"2\"\n        >\n        \n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"3\"\n        [rowspan]=\"2\"\n        >\n        <app-login-form></app-login-form>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"2\"\n        >\n    </mat-grid-tile>\n  </mat-grid-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-layouts/pre-login/pre-login.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-layouts/pre-login/pre-login.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageLayoutsPreLoginPreLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-navigation-bar></app-top-navigation-bar>\n<p>pre-login works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeConfirmationDialogueConfirmationDialogueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dialogue\">\n  <p>\n    {{data.message}}\n  </p>\n  <span *ngFor=\"let button of data.buttons;let i=index\">\n    <button   mat-button mat-flat-button  color=\"{{button.color}}\" (click)=\"buttonClicked(i)\" class=\"button-class\">{{button.text}}</button>\n  </span>\n  <span *ngFor=\"let buttonText of data.closeButtons\">\n    <button   mat-button mat-flat-button  color=\"warn\" (click)=\"onCloseClick()\" class=\"button-class\">{{buttonText}}</button>\n  </span>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/expandable-list/expandable-list.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/expandable-list/expandable-list.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeExpandableListExpandableListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <table>\n  <tr>\n    <th *ngFor=\"let column of columnsToDisplay\">{{column}}</th>\n  </tr>\n  <tr *ngFor=\"let data of listDataSource\">\n    <td *ngFor=\"let column of columnsToDisplay\">{{data[column]}}</td>\n  </tr>\n</table> -->\n<table mat-table [dataSource]=\"listData\" multiTemplateDataRows class=\"mat-elevation-z8\">\n  \n      <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of listColumns\">\n\n          <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n          <td mat-cell *matCellDef=\"let detailRow\"> {{detailRow[column]}} </td>\n        </ng-container>\n  \n  \n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"columnsToDisplayInDetails.length\">\n      <div class=\"user-details\" [@detailExpand]=\"row == expandedRow ? 'expanded' : 'collapsed'\">\n\n        <table class=\"user-details-table\">\n          <tr class=\"user-details-row\" *ngFor=\"let column of columnsToDisplayInDetails\">\n            <th class=\"user-details-header\"><b>{{column}}</b></th>\n            <td class=\"user-details-details\">{{row[column]}}</td>\n          </tr>\n        </table>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"listColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: listColumns;\" class=\"user-details-row\"\n    [class.user-details-expanded-row]=\"expandedRow === row\" (click)=\"toggleExpandedRow(row)\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"user-detail-row\"></tr>\n</table>\n<mat-paginator [length]=\"totalNumberOfItems\"\n              [pageSize]=\"pageSize\"\n              [pageIndex]=\"pageNumber\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              (page)=\"getPaginatedItems($event)\">\n</mat-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/footer-bar/footer-bar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/footer-bar/footer-bar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeFooterBarFooterBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n  <mat-toolbar>  \n    <mat-toolbar-row>\n      <mat-icon>copyright</mat-icon> Mohit Kanwar\n    </mat-toolbar-row>\n  </mat-toolbar>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/main-layout/main-layout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/main-layout/main-layout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeMainLayoutMainLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-fixed-bar></app-top-fixed-bar>\n<app-notification></app-notification>\n<div class=\"mainContent\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer-bar></app-footer-bar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/notification/notification.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/notification/notification.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeNotificationNotificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/top-fixed-bar/top-fixed-bar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/top-fixed-bar/top-fixed-bar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeTopFixedBarTopFixedBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"primary\">  \n  <mat-toolbar-row>\n      \n    <span class=\"menuItem\">XBank!</span>\n    <span class=\"menuItem\"></span>\n    <span *ngIf=\"!isAuthenticated()\">\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">home</mat-icon><span>Home</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">person</mat-icon><span>Retail</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">business_center</mat-icon><span>Corporate</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">show_chart</mat-icon><span>Investment</span></button></a>  \n    </span>\n    <span *ngIf=\"isAuthenticated()\">\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">home</mat-icon><span>Home</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">person</mat-icon><span>My Accounts</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">business_center</mat-icon><span>Transactions</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">show_chart</mat-icon><span>Investments</span></button></a>  \n      <a routerLink=\"/logout\" routerLinkActive=\"active\" class=\"menuItem primary last\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon>face</mat-icon><span>Logout</span></button></a>      \n    </span>\n    \n  </mat-toolbar-row>\n\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_welcome_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/welcome/welcome-component/welcome-component.component */
    "./src/app/modules/welcome/welcome-component/welcome-component.component.ts");
    /* harmony import */


    var _modules_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/dashboard/dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/login/logout/logout.component */
    "./src/app/modules/login/logout/logout.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'login',
      redirectTo: 'welcome'
    }, {
      path: 'welcome',
      component: _modules_welcome_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }, {
      path: 'dashboard',
      component: _modules_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'logout',
      component: _modules_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'retail-banking-angular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/common.module */
    "./src/app/common/common.module.ts");
    /* harmony import */


    var _modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/welcome/welcome.module */
    "./src/app/modules/welcome/welcome.module.ts");
    /* harmony import */


    var _page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-layouts/page-layouts.module */
    "./src/app/page-layouts/page-layouts.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./theme/theme.module */
    "./src/app/theme/theme.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _common_request_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./common/request.interceptor */
    "./src/app/common/request.interceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"], _modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__["WelcomeModule"], _page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _common_request_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/common.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/common/common.module.ts ***!
    \*****************************************/

  /*! exports provided: CommonAppModule */

  /***/
  function srcAppCommonCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonAppModule", function () {
      return CommonAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./top-navigation-bar/top-navigation-bar.component */
    "./src/app/common/top-navigation-bar/top-navigation-bar.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CommonAppModule = function CommonAppModule() {
      _classCallCheck(this, CommonAppModule);
    };

    CommonAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavigationBarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]],
      exports: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavigationBarComponent"]]
    })], CommonAppModule);
    /***/
  },

  /***/
  "./src/app/common/request.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/common/request.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppCommonRequestInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/common/top-navigation-bar/top-navigation-bar.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/common/top-navigation-bar/top-navigation-bar.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonTopNavigationBarTopNavigationBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b3AtbmF2aWdhdGlvbi1iYXIvdG9wLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/common/top-navigation-bar/top-navigation-bar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/common/top-navigation-bar/top-navigation-bar.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TopNavigationBarComponent */

  /***/
  function srcAppCommonTopNavigationBarTopNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopNavigationBarComponent", function () {
      return TopNavigationBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    TopNavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-navigation-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-navigation-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/top-navigation-bar/top-navigation-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-navigation-bar.component.css */
      "./src/app/common/top-navigation-bar/top-navigation-bar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TopNavigationBarComponent);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./portfolio-summary/portfolio-summary.component */
    "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts");
    /* harmony import */


    var src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/common.module */
    "./src/app/common/common.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./transactions-summary/transactions-summary.component */
    "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioSummaryComponent"], _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsSummaryComponent"]],
      exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard/dashboard.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard/dashboard.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDashboardDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-grid-tile{\n    border: 1px solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1ncmlkLXRpbGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard/dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard/dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/modules/dashboard/dashboard/dashboard.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/portfolio-summary/accounts.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/dashboard/portfolio-summary/accounts.service.ts ***!
    \*************************************************************************/

  /*! exports provided: AccountsService */

  /***/
  function srcAppModulesDashboardPortfolioSummaryAccountsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
      return AccountsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/backendAPIs */
    "./src/environments/backendAPIs.ts");

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

    AccountsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"]
      }];
    };

    AccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"]])], AccountsService);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDashboardPortfolioSummaryPortfolioSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n    display: block;\n    left: 0;\n    width: 90%; \n    height: 100%;  \n}\nmat-card {\n    width: 100%;\n}\n.mat-grid-tile {\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcG9ydGZvbGlvLXN1bW1hcnkvcG9ydGZvbGlvLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcG9ydGZvbGlvLXN1bW1hcnkvcG9ydGZvbGlvLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5MCU7IFxuICAgIGhlaWdodDogMTAwJTsgIFxufVxubWF0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PortfolioSummaryComponent */

  /***/
  function srcAppModulesDashboardPortfolioSummaryPortfolioSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioSummaryComponent", function () {
      return PortfolioSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accounts.service */
    "./src/app/modules/dashboard/portfolio-summary/accounts.service.ts");

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
          var _this = this;

          this.accountsService.getSavingsAccounts().subscribe(function (accounts) {
            _this.savingsAccounts = accounts;

            _this.savingsAccounts.forEach(function (account) {
              _this.accountsTotal += account.balance;
              _this.savingsTotal += account.balance;
            });
          });
          this.accountsService.getDepositAccounts().subscribe(function (depositAccounts) {
            _this.depositAccounts = depositAccounts;

            _this.depositAccounts.forEach(function (account) {
              _this.accountsTotal += account.balance;
              _this.depositsTotal += account.balance;
            });
          });
          this.accountsService.getLoanAccounts().subscribe(function (loans) {
            _this.loans = loans;

            _this.loans.forEach(function (account) {
              _this.totalDueThisMonth += account.monthlyEmi;
              _this.totalLoanAmountPending += account.initialAmount - account.paidAmount;
            });
          });
          this.accountsService.getCardAccounts().subscribe(function (cards) {
            _this.cards = cards;

            _this.cards.forEach(function (card) {
              if (card.balance < 0) {
                _this.totalDueThisMonth += card.balance;
              }
            });
          });
        }
      }]);

      return PortfolioSummaryComponent;
    }();

    PortfolioSummaryComponent.ctorParameters = function () {
      return [{
        type: _accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]
      }];
    };

    PortfolioSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio-summary.component.css */
      "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]])], PortfolioSummaryComponent);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/dashboard/transactions-summary/transactions-summary.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDashboardTransactionsSummaryTransactionsSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Structure */\n.example-container {\n    position: relative;\n    min-height: 200px;\n  }\n.example-table-container {\n    position: relative;\n    max-height: 400px;\n    overflow: auto;\n  }\ntable {\n    width: 100%;\n  }\n.example-loading-shade {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n.example-rate-limit-reached {\n    color: #980000;\n    max-width: 360px;\n    text-align: center;\n  }\n/* Column Widths */\n.mat-column-number,\n  .mat-column-state {\n    max-width: 64px;\n  }\n.mat-column-created {\n    max-width: 124px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvdHJhbnNhY3Rpb25zLXN1bW1hcnkvdHJhbnNhY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFFQSxrQkFBa0I7QUFDbEI7O0lBRUUsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvdHJhbnNhY3Rpb25zLXN1bW1hcnkvdHJhbnNhY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXRhYmxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWxvYWRpbmctc2hhZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkIHtcbiAgICBjb2xvcjogIzk4MDAwMDtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogQ29sdW1uIFdpZHRocyAqL1xuICAubWF0LWNvbHVtbi1udW1iZXIsXG4gIC5tYXQtY29sdW1uLXN0YXRlIHtcbiAgICBtYXgtd2lkdGg6IDY0cHg7XG4gIH1cbiAgXG4gIC5tYXQtY29sdW1uLWNyZWF0ZWQge1xuICAgIG1heC13aWR0aDogMTI0cHg7XG4gIH1cbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: TransactionsSummaryComponent, ExampleHttpDatabase */

  /***/
  function srcAppModulesDashboardTransactionsSummaryTransactionsSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TransactionsSummaryComponent = /*#__PURE__*/function () {
      function TransactionsSummaryComponent(httpClient) {
        _classCallCheck(this, TransactionsSummaryComponent);

        this.httpClient = httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
      }

      _createClass(TransactionsSummaryComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.exampleDatabase = new ExampleHttpDatabase(this.httpClient); // If the user changes the sort order, reset back to the first page.

          this.sort.sortChange.subscribe(function () {
            return _this2.paginator.pageIndex = 0;
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.sort.sortChange, this.paginator.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            _this2.isLoadingResults = true;

            if (_this2.exampleDatabase) {
              return _this2.exampleDatabase.getRepoIssues(_this2.sort.active, _this2.sort.direction, _this2.paginator.pageIndex);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            // Flip flag to show that loading has finished.
            _this2.isLoadingResults = false;
            _this2.isRateLimitReached = false;
            _this2.resultsLength = data.total_count;
            return data.items;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
            _this2.isLoadingResults = false; // Catch if the GitHub API has reached its rate limit. Return empty data.

            _this2.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
          })).subscribe(function (data) {
            return _this2.data = data;
          });
        }
      }]);

      return TransactionsSummaryComponent;
    }();

    TransactionsSummaryComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], TransactionsSummaryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], TransactionsSummaryComponent.prototype, "sort", void 0);
    TransactionsSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transactions-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transactions-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/transactions-summary/transactions-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transactions-summary.component.css */
      "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TransactionsSummaryComponent);
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
  "./src/app/modules/login/login-form/login-form.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/login/login-form/login-form.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLoginLoginFormLoginFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .full-width {\n    width: 100%;\n  }\n  \n  .login-card {\n    min-width: 200px;\n    max-width: 600px;\n    width: 100%;\n    -webkit-align-self: center; \n    align-self: center;\n    margin-left: 20%;\n    margin-top: 10%;\n    align-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubG9naW4tY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyOyBcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/login/login-form/login-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/login/login-form/login-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppModulesLoginLoginFormLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/modules/login/login.service.ts");
    /* harmony import */


    var src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/notification/notification.service */
    "./src/app/theme/notification/notification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _users_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../users/user.model */
    "./src/app/modules/users/user.model.ts");

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(loginService, notificationService, router) {
        _classCallCheck(this, LoginFormComponent);

        this.loginService = loginService;
        this.notificationService = notificationService;
        this.router = router;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login(loginForm) {
          var _this3 = this;

          if (loginForm.valid) {
            var user = new _users_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
            user.username = loginForm.value.username;
            user.password = loginForm.value.password;
            this.loginService.login(user).subscribe(function (response) {
              if (response.status.status === 'SUCCESS') {
                sessionStorage.setItem('authenticated', 'true');
                var isAdminUser = false;

                for (var i = 0; i < response.data.authorities.length; i++) {
                  if (response.data.authorities[i].authority === 'ADMIN') {
                    isAdminUser = true;
                    break;
                  }
                }

                if (isAdminUser) {
                  _this3.router.navigate(['admin-dashboard']);
                } else {
                  _this3.router.navigate(['dashboard']);
                }
              } else {
                _this3.notificationService.sendNotification('User login Error!');
              }
            }, function (error) {
              if (error.status === 401) {
                _this3.notificationService.sendNotification('Invalid Credentials!');
              } else {
                _this3.notificationService.sendNotification('An error occurred!');
              }

              console.log(error);
            });
          }
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ctorParameters = function () {
      return [{
        type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login-form/login-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-form.component.css */
      "./src/app/modules/login/login-form/login-form.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/login/login.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/login/login.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppModulesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-form/login-form.component */
    "./src/app/modules/login/login-form/login-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/modules/login/logout/logout.component.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard/dashboard.module */
    "./src/app/modules/dashboard/dashboard.module.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"]],
      declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]],
      exports: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/modules/login/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/login/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppModulesLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/backendAPIs */
    "./src/environments/backendAPIs.ts");

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
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](user ? {
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
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](authKey ? {
            authorization: authKey
          } : {});
          return this.http.post(this.backendAPIs.getLogOutAPI(), null, {
            headers: headers
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"]])], LoginService);
    /***/
  },

  /***/
  "./src/app/modules/login/logout/logout.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/modules/login/logout/logout.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLoginLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/login/logout/logout.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/login/logout/logout.component.ts ***!
    \**********************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppModulesLoginLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/theme/notification/notification.service */
    "./src/app/theme/notification/notification.service.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/modules/login/login.service.ts");

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

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/modules/login/logout/logout.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/modules/users/user.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/users/user.model.ts ***!
    \*********************************************/

  /*! exports provided: User */

  /***/
  function srcAppModulesUsersUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/modules/welcome/welcome-component/welcome-component.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/welcome/welcome-component/welcome-component.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesWelcomeWelcomeComponentWelcomeComponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC93ZWxjb21lLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/welcome/welcome-component/welcome-component.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/welcome/welcome-component/welcome-component.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppModulesWelcomeWelcomeComponentWelcomeComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/welcome/welcome-component/welcome-component.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome-component.component.css */
      "./src/app/modules/welcome/welcome-component/welcome-component.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WelcomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/welcome/welcome.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/welcome/welcome.module.ts ***!
    \***************************************************/

  /*! exports provided: WelcomeModule */

  /***/
  function srcAppModulesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeModule", function () {
      return WelcomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./welcome-component/welcome-component.component */
    "./src/app/modules/welcome/welcome-component/welcome-component.component.ts");
    /* harmony import */


    var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/login.module */
    "./src/app/modules/login/login.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var WelcomeModule = function WelcomeModule() {
      _classCallCheck(this, WelcomeModule);
    };

    WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"]]
    })], WelcomeModule);
    /***/
  },

  /***/
  "./src/app/page-layouts/page-layouts.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/page-layouts/page-layouts.module.ts ***!
    \*****************************************************/

  /*! exports provided: PageLayoutsModule */

  /***/
  function srcAppPageLayoutsPageLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function () {
      return PageLayoutsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pre-login/pre-login.component */
    "./src/app/page-layouts/pre-login/pre-login.component.ts");
    /* harmony import */


    var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/common.module */
    "./src/app/common/common.module.ts");

    var PageLayoutsModule = function PageLayoutsModule() {
      _classCallCheck(this, PageLayoutsModule);
    };

    PageLayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_3__["PreLoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"]],
      exports: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_3__["PreLoginComponent"]]
    })], PageLayoutsModule);
    /***/
  },

  /***/
  "./src/app/page-layouts/pre-login/pre-login.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/page-layouts/pre-login/pre-login.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageLayoutsPreLoginPreLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbGF5b3V0cy9wcmUtbG9naW4vcHJlLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-layouts/pre-login/pre-login.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/page-layouts/pre-login/pre-login.component.ts ***!
    \***************************************************************/

  /*! exports provided: PreLoginComponent */

  /***/
  function srcAppPageLayoutsPreLoginPreLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginComponent", function () {
      return PreLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    PreLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pre-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pre-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-layouts/pre-login/pre-login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pre-login.component.css */
      "./src/app/page-layouts/pre-login/pre-login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PreLoginComponent);
    /***/
  },

  /***/
  "./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts ***!
    \****************************************************************************/

  /*! exports provided: ConfirmationDialogueInput, ConfirmationDialogueButtons */

  /***/
  function srcAppThemeConfirmationDialogueConfirmationDialogueInputTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

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
  "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeConfirmationDialogueConfirmationDialogueComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-class{\n    margin: 3%;\n}\n.dialogue{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29uZmlybWF0aW9uLWRpYWxvZ3VlL2NvbmZpcm1hdGlvbi1kaWFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb25maXJtYXRpb24tZGlhbG9ndWUvY29uZmlybWF0aW9uLWRpYWxvZ3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNsYXNze1xuICAgIG1hcmdpbjogMyU7XG59XG4uZGlhbG9ndWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ConfirmationDialogueComponent */

  /***/
  function srcAppThemeConfirmationDialogueConfirmationDialogueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueComponent", function () {
      return ConfirmationDialogueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confirmation-dialogue-input */
    "./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts");

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

    ConfirmationDialogueComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogueInput"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfirmationDialogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation-dialogue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation-dialogue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation-dialogue.component.css */
      "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogueInput"]])], ConfirmationDialogueComponent);
    /***/
  },

  /***/
  "./src/app/theme/expandable-list/expandable-list.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/expandable-list/expandable-list.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeExpandableListExpandableListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  tr.user-detail-row {\n    height: 0;\n  }\n  \n  tr.user-details-row:not(.user-details-expanded-row):hover {\n    background: #f5f5f5;\n  }\n  \n  tr.user-details-row:not(.user-details-expanded-row):active {\n    background: #efefef;\n  }\n  \n  .user-details-row td {\n    border-bottom-width: 0;\n  }\n  \n  .user-details {\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n  }\n  \n  .user-details-box {\n    min-width: 80px;\n    border: 2px solid black;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n  \n  .user-details-id {\n    font-weight: bold;\n    font-size: 40px;\n    line-height: normal;\n  }\n  \n  .user-details-table{\n    min-width: 80px;\n    border: 2px solid lightgray;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZXhwYW5kYWJsZS1saXN0L2V4cGFuZGFibGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvZXhwYW5kYWJsZS1saXN0L2V4cGFuZGFibGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ci51c2VyLWRldGFpbC1yb3cge1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgdHIudXNlci1kZXRhaWxzLXJvdzpub3QoLnVzZXItZGV0YWlscy1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICB9XG4gIFxuICB0ci51c2VyLWRldGFpbHMtcm93Om5vdCgudXNlci1kZXRhaWxzLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG4gIFxuICAudXNlci1kZXRhaWxzLXJvdyB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAudXNlci1kZXRhaWxzLWJveCB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgXG4gIC51c2VyLWRldGFpbHMtaWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAudXNlci1kZXRhaWxzLXRhYmxle1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/expandable-list/expandable-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/theme/expandable-list/expandable-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: ExpandableListComponent */

  /***/
  function srcAppThemeExpandableListExpandableListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpandableListComponent", function () {
      return ExpandableListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _pageupdatedevent_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pageupdatedevent.model */
    "./src/app/theme/expandable-list/pageupdatedevent.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ExpandableListComponent = /*#__PURE__*/function () {
      function ExpandableListComponent(route) {
        _classCallCheck(this, ExpandableListComponent);

        this.route = route;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ExpandableListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.subscribe(function (params) {
            _this4.getPaginatedItems({
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
          var paginationUpdate = new _pageupdatedevent_model__WEBPACK_IMPORTED_MODULE_3__["PageUpdatedEventData"]();
          paginationUpdate.length = event.length;
          paginationUpdate.pageIndex = event.pageIndex;
          paginationUpdate.pageSize = event.pageSize;
          paginationUpdate.previousPageIndex = event.previousPageIndex;
          this.pageChanged.emit(paginationUpdate);
        }
      }]);

      return ExpandableListComponent;
    }();

    ExpandableListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpandableListComponent.prototype, "listData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpandableListComponent.prototype, "listColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpandableListComponent.prototype, "detailsColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpandableListComponent.prototype, "totalNumberOfItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpandableListComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpandableListComponent.prototype, "pageNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ExpandableListComponent.prototype, "pageChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ExpandableListComponent.prototype, "deleteEvent", void 0);
    ExpandableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expandable-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./expandable-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/expandable-list/expandable-list.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0px',
        minHeight: '0',
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./expandable-list.component.css */
      "./src/app/theme/expandable-list/expandable-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], ExpandableListComponent);
    /***/
  },

  /***/
  "./src/app/theme/expandable-list/pageupdatedevent.model.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/expandable-list/pageupdatedevent.model.ts ***!
    \*****************************************************************/

  /*! exports provided: PageUpdatedEventData */

  /***/
  function srcAppThemeExpandableListPageupdatedeventModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageUpdatedEventData", function () {
      return PageUpdatedEventData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PageUpdatedEventData = function PageUpdatedEventData() {
      _classCallCheck(this, PageUpdatedEventData);
    };
    /***/

  },

  /***/
  "./src/app/theme/footer-bar/footer-bar.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/theme/footer-bar/footer-bar.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeFooterBarFooterBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n    position: fixed;\n    bottom:0;\n    width:100%;\n    height:64px;   /* Height of the footer */\n    background:#6cf;\n    margin-top: 10px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZm9vdGVyLWJhci9mb290ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXLElBQUkseUJBQXlCO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9mb290ZXItYmFyL2Zvb3Rlci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjY0cHg7ICAgLyogSGVpZ2h0IG9mIHRoZSBmb290ZXIgKi9cbiAgICBiYWNrZ3JvdW5kOiM2Y2Y7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9Il19 */";
    /***/
  },

  /***/
  "./src/app/theme/footer-bar/footer-bar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/theme/footer-bar/footer-bar.component.ts ***!
    \**********************************************************/

  /*! exports provided: FooterBarComponent */

  /***/
  function srcAppThemeFooterBarFooterBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function () {
      return FooterBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    FooterBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/footer-bar/footer-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-bar.component.css */
      "./src/app/theme/footer-bar/footer-bar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterBarComponent);
    /***/
  },

  /***/
  "./src/app/theme/main-layout/main-layout.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/theme/main-layout/main-layout.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeMainLayoutMainLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainContent{\n    margin: 10px;\n    margin-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250ZW50e1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/main-layout/main-layout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/theme/main-layout/main-layout.component.ts ***!
    \************************************************************/

  /*! exports provided: MainLayoutComponent */

  /***/
  function srcAppThemeMainLayoutMainLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function () {
      return MainLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/main-layout/main-layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-layout.component.css */
      "./src/app/theme/main-layout/main-layout.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MainLayoutComponent);
    /***/
  },

  /***/
  "./src/app/theme/notification/notification.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/theme/notification/notification.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeNotificationNotificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/notification/notification.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/theme/notification/notification.component.ts ***!
    \**************************************************************/

  /*! exports provided: NotificationComponent */

  /***/
  function srcAppThemeNotificationNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationComponent", function () {
      return NotificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notification.service */
    "./src/app/theme/notification/notification.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var NotificationComponent = /*#__PURE__*/function () {
      function NotificationComponent(notificationService, snackbar) {
        _classCallCheck(this, NotificationComponent);

        this.notificationService = notificationService;
        this.snackbar = snackbar;
      }

      _createClass(NotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.showNotification = false;
          this.notificationService.notificationEvent.subscribe(function (message) {
            setTimeout(function () {
              _this5.showNotification = true;
              _this5.message = message.message;

              _this5.snackbar.open(_this5.message, 'Close', {
                duration: 5000
              });

              setTimeout(function () {
                _this5.showNotification = false;
                _this5.message = '';
              }, 5000);
            });
          });
        }
      }]);

      return NotificationComponent;
    }();

    NotificationComponent.ctorParameters = function () {
      return [{
        type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/notification/notification.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.component.css */
      "./src/app/theme/notification/notification.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])], NotificationComponent);
    /***/
  },

  /***/
  "./src/app/theme/notification/notification.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/theme/notification/notification.service.ts ***!
    \************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppThemeNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService() {
        _classCallCheck(this, NotificationService);

        this.notificationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], NotificationService.prototype, "notificationEvent", void 0);
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationService);
    /***/
  },

  /***/
  "./src/app/theme/theme.module.ts":
  /*!***************************************!*\
    !*** ./src/app/theme/theme.module.ts ***!
    \***************************************/

  /*! exports provided: ThemeModule */

  /***/
  function srcAppThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return ThemeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./top-fixed-bar/top-fixed-bar.component */
    "./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts");
    /* harmony import */


    var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-layout/main-layout.component */
    "./src/app/theme/main-layout/main-layout.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer-bar/footer-bar.component */
    "./src/app/theme/footer-bar/footer-bar.component.ts");
    /* harmony import */


    var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./notification/notification.component */
    "./src/app/theme/notification/notification.component.ts");
    /* harmony import */


    var _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./expandable-list/expandable-list.component */
    "./src/app/theme/expandable-list/expandable-list.component.ts");
    /* harmony import */


    var _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./confirmation-dialogue/confirmation-dialogue.component */
    "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");

    var ThemeModule = function ThemeModule() {
      _classCallCheck(this, ThemeModule);
    };

    ThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopFixedBarComponent"], _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"], _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__["FooterBarComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_9__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogueComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]],
      providers: [],
      bootstrap: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"]],
      exports: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_9__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogueComponent"]]
    })], ThemeModule);
    /***/
  },

  /***/
  "./src/app/theme/top-fixed-bar/top-fixed-bar.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/top-fixed-bar/top-fixed-bar.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeTopFixedBarTopFixedBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n    margin-left: 10px;\n}\nmat-icon{\n    margin-right: 10px;\n}\n.mat-toolbar-multiple-rows {\n    min-height: 0; \n}\n.mat-toolbar-row {\n    height: unset;\n}\n.last {\n    position: absolute;\n    right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdG9wLWZpeGVkLWJhci90b3AtZml4ZWQtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RvcC1maXhlZC1iYXIvdG9wLWZpeGVkLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbm1hdC1pY29ue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzIHtcbiAgICBtaW4taGVpZ2h0OiAwOyBcbn1cbi5tYXQtdG9vbGJhci1yb3cge1xuICAgIGhlaWdodDogdW5zZXQ7XG59XG5cbi5sYXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts ***!
    \****************************************************************/

  /*! exports provided: TopFixedBarComponent */

  /***/
  function srcAppThemeTopFixedBarTopFixedBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopFixedBarComponent", function () {
      return TopFixedBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modules/login/login.service */
    "./src/app/modules/login/login.service.ts");

    var TopFixedBarComponent = /*#__PURE__*/function () {
      function TopFixedBarComponent(loginService) {
        _classCallCheck(this, TopFixedBarComponent);

        this.loginService = loginService;
      }

      _createClass(TopFixedBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.loginService.isAuthenticated();
        }
      }]);

      return TopFixedBarComponent;
    }();

    TopFixedBarComponent.ctorParameters = function () {
      return [{
        type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }];
    };

    TopFixedBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-fixed-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-fixed-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/top-fixed-bar/top-fixed-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-fixed-bar.component.css */
      "./src/app/theme/top-fixed-bar/top-fixed-bar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])], TopFixedBarComponent);
    /***/
  },

  /***/
  "./src/environments/backendAPIs.ts":
  /*!*****************************************!*\
    !*** ./src/environments/backendAPIs.ts ***!
    \*****************************************/

  /*! exports provided: BackendAPIService */

  /***/
  function srcEnvironmentsBackendAPIsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendAPIService", function () {
      return BackendAPIService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BackendAPIService = /*#__PURE__*/function () {
      function BackendAPIService() {
        _classCallCheck(this, BackendAPIService);
      }

      _createClass(BackendAPIService, [{
        key: "getBaseUrl",
        value: function getBaseUrl() {
          var mockEnabled = true;
          var backendUrl = mockEnabled ? _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl : _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mockBackendUrl;
          var PATH_SEPERATOR = '/';
          var context = _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].contextName;
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
      }]);

      return BackendAPIService;
    }();

    BackendAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], BackendAPIService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
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
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map