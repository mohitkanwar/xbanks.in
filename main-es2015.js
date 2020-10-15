(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-layout></app-main-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/top-navigation-bar/top-navigation-bar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/top-navigation-bar/top-navigation-bar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>top-navigation-bar works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-grid-list cols=\"11\" rowHeight=\"100px\">\n    <mat-grid-tile\n        [colspan]=\"11\"\n        [rowspan]=\"1\"\n        [style.background]=\"white\">\n    </mat-grid-tile>\n    \n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"7\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n        <app-portfolio-summary></app-portfolio-summary>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"red\">\n    </mat-grid-tile>\n\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"7\"\n        [rowspan]=\"2\"\n        [style.background]=\"white\">\n        <app-transactions-summary></app-transactions-summary>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        [style.background]=\"red\">\n    </mat-grid-tile>\n\n    \n  </mat-grid-list>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-grid-list cols=\"6\" rowHeight=\"30px\">\n        <mat-grid-tile\n            [colspan]=\"6\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Your total balance is {{accountsTotal |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n        <mat-grid-tile\n            [colspan]=\"2\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Savings {{savingsTotal |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n        <mat-grid-tile\n            [colspan]=\"2\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Deposits {{depositsTotal |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n        <mat-grid-tile\n            [colspan]=\"2\"\n            [rowspan]=\"1\"\n            [style.background]=\"white\">\n            Pending Loans {{totalLoanAmountPending |currency: '₹' :symbol :0}}\n        </mat-grid-tile>\n      </mat-grid-list>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/transactions-summary/transactions-summary.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/dashboard/transactions-summary/transactions-summary.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-loading-shade\"\n         *ngIf=\"isLoadingResults || isRateLimitReached\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n        GitHub's API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div>\n  \n    <div class=\"example-table-container\">\n  \n      <table mat-table [dataSource]=\"data\" class=\"example-table\"\n             matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n        <!-- Number Column -->\n        <ng-container matColumnDef=\"number\">\n          <th mat-header-cell *matHeaderCellDef>#</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n        </ng-container>\n  \n        <!-- Title Column -->\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef>Title</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n        </ng-container>\n  \n        <!-- State Column -->\n        <ng-container matColumnDef=\"state\">\n          <th mat-header-cell *matHeaderCellDef>State</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n        </ng-container>\n  \n        <!-- Created Column -->\n        <ng-container matColumnDef=\"created\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n            Created\n          </th>\n          <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  \n    <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/login/login-form/login-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/login/login-form/login-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-card\">\n    <form (ngSubmit)=\"login(loginForm)\" #loginForm=\"ngForm\" class=\"login-form\">\n        <div class=\"login-form\">\n           <mat-form-field class=\"full-width\">\n             <input \n             placeholder=\"Username\" \n             name=\"username\"\n             type=\"text\"\n             ngModel \n             matInput\n             required>\n           </mat-form-field>\n           <mat-form-field class=\"full-width\">\n              <input \n              placeholder=\"password\" \n              name=\"password\"\n              type=\"password\"\n              ngModel \n              matInput\n              required>\n            </mat-form-field>\n           \n         </div>\n         <button \n         mat-raised-button \n         class=\"create-article-save\" \n         [disabled]=\"loginForm.invalid\"\n         [color]=\"'primary'\" \n         type=\"submit\"\n         > Login</button>\n         <button mat-raised-button class=\"create-article-clear\" [color]=\"'warn'\" type=\"reset\"> Clear!</button>\n       </form>\n</mat-card>\n\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/login/logout/logout.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/login/logout/logout.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/welcome/welcome-component/welcome-component.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/welcome/welcome-component/welcome-component.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"11\" rowHeight=\"100px\">\n    <mat-grid-tile\n        [colspan]=\"11\"\n        [rowspan]=\"1\"\n        >\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"2\"\n        [rowspan]=\"2\"\n        >\n        <p>This is a welcome component. We will use this page to display the following</p>\n            <ul>\n                <li>Latest updates</li>\n                <li>Information of our products</li>\n                <li>onboarding options</li>\n            </ul>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"5\"\n        [rowspan]=\"2\"\n        >\n        \n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"3\"\n        [rowspan]=\"2\"\n        >\n        <app-login-form></app-login-form>\n    </mat-grid-tile>\n    <mat-grid-tile\n        [colspan]=\"1\"\n        [rowspan]=\"2\"\n        >\n    </mat-grid-tile>\n  </mat-grid-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-layouts/pre-login/pre-login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-layouts/pre-login/pre-login.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-navigation-bar></app-top-navigation-bar>\n<p>pre-login works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogue\">\n  <p>\n    {{data.message}}\n  </p>\n  <span *ngFor=\"let button of data.buttons;let i=index\">\n    <button   mat-button mat-flat-button  color=\"{{button.color}}\" (click)=\"buttonClicked(i)\" class=\"button-class\">{{button.text}}</button>\n  </span>\n  <span *ngFor=\"let buttonText of data.closeButtons\">\n    <button   mat-button mat-flat-button  color=\"warn\" (click)=\"onCloseClick()\" class=\"button-class\">{{buttonText}}</button>\n  </span>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/expandable-list/expandable-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/expandable-list/expandable-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table>\n  <tr>\n    <th *ngFor=\"let column of columnsToDisplay\">{{column}}</th>\n  </tr>\n  <tr *ngFor=\"let data of listDataSource\">\n    <td *ngFor=\"let column of columnsToDisplay\">{{data[column]}}</td>\n  </tr>\n</table> -->\n<table mat-table [dataSource]=\"listData\" multiTemplateDataRows class=\"mat-elevation-z8\">\n  \n      <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of listColumns\">\n\n          <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n          <td mat-cell *matCellDef=\"let detailRow\"> {{detailRow[column]}} </td>\n        </ng-container>\n  \n  \n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"columnsToDisplayInDetails.length\">\n      <div class=\"user-details\" [@detailExpand]=\"row == expandedRow ? 'expanded' : 'collapsed'\">\n\n        <table class=\"user-details-table\">\n          <tr class=\"user-details-row\" *ngFor=\"let column of columnsToDisplayInDetails\">\n            <th class=\"user-details-header\"><b>{{column}}</b></th>\n            <td class=\"user-details-details\">{{row[column]}}</td>\n          </tr>\n        </table>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"listColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: listColumns;\" class=\"user-details-row\"\n    [class.user-details-expanded-row]=\"expandedRow === row\" (click)=\"toggleExpandedRow(row)\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"user-detail-row\"></tr>\n</table>\n<mat-paginator [length]=\"totalNumberOfItems\"\n              [pageSize]=\"pageSize\"\n              [pageIndex]=\"pageNumber\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              (page)=\"getPaginatedItems($event)\">\n</mat-paginator>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/footer-bar/footer-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/footer-bar/footer-bar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <mat-toolbar>  \n    <mat-toolbar-row>\n      <mat-icon>copyright</mat-icon> Mohit Kanwar\n    </mat-toolbar-row>\n  </mat-toolbar>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/main-layout/main-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/main-layout/main-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-fixed-bar></app-top-fixed-bar>\n<app-notification></app-notification>\n<div class=\"mainContent\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer-bar></app-footer-bar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/notification/notification.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/notification/notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/top-fixed-bar/top-fixed-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/top-fixed-bar/top-fixed-bar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"primary\">  \n  <mat-toolbar-row>\n      \n    <span class=\"menuItem\">XBank!</span>\n    <span class=\"menuItem\"></span>\n    <span *ngIf=\"!isAuthenticated()\">\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">home</mat-icon><span>Home</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">person</mat-icon><span>Retail</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">business_center</mat-icon><span>Corporate</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">show_chart</mat-icon><span>Investment</span></button></a>  \n    </span>\n    <span *ngIf=\"isAuthenticated()\">\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">home</mat-icon><span>Home</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">person</mat-icon><span>My Accounts</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">business_center</mat-icon><span>Transactions</span></button></a>\n      <a routerLink=\"/\" routerLinkActive=\"active\" class=\"menuItem primary\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon class=\"primary\">show_chart</mat-icon><span>Investments</span></button></a>  \n      <a routerLink=\"/logout\" routerLinkActive=\"active\" class=\"menuItem primary last\"><button   mat-button mat-flat-button class=\"primary\"><mat-icon>face</mat-icon><span>Logout</span></button></a>      \n    </span>\n    \n  </mat-toolbar-row>\n\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_welcome_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/welcome/welcome-component/welcome-component.component */ "./src/app/modules/welcome/welcome-component/welcome-component.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/login/logout/logout.component */ "./src/app/modules/login/logout/logout.component.ts");






const routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'login', redirectTo: 'welcome' },
    { path: 'welcome', component: _modules_welcome_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'dashboard', component: _modules_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'logout', component: _modules_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'retail-banking-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/welcome/welcome.module */ "./src/app/modules/welcome/welcome.module.ts");
/* harmony import */ var _page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-layouts/page-layouts.module */ "./src/app/page-layouts/page-layouts.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/theme.module */ "./src/app/theme/theme.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_request_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/request.interceptor */ "./src/app/common/request.interceptor.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"],
            _modules_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__["WelcomeModule"],
            _page_layouts_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                useClass: _common_request_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppModule", function() { return CommonAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-navigation-bar/top-navigation-bar.component */ "./src/app/common/top-navigation-bar/top-navigation-bar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let CommonAppModule = class CommonAppModule {
};
CommonAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavigationBarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
        ],
        exports: [
            _top_navigation_bar_top_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["TopNavigationBarComponent"],
        ]
    })
], CommonAppModule);



/***/ }),

/***/ "./src/app/common/request.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/common/request.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TokenInterceptor = class TokenInterceptor {
    constructor() {
    }
    intercept(request, next) {
        const accessToken = sessionStorage.getItem('auth-key');
        request = request.clone({
            setHeaders: {
                Authorization: `${accessToken}`
            }
        });
        return next.handle(request);
    }
};
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TokenInterceptor);



/***/ }),

/***/ "./src/app/common/top-navigation-bar/top-navigation-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/common/top-navigation-bar/top-navigation-bar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b3AtbmF2aWdhdGlvbi1iYXIvdG9wLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/top-navigation-bar/top-navigation-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/common/top-navigation-bar/top-navigation-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: TopNavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationBarComponent", function() { return TopNavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopNavigationBarComponent = class TopNavigationBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopNavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-navigation-bar',
        template: __webpack_require__(/*! raw-loader!./top-navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/top-navigation-bar/top-navigation-bar.component.html"),
        styles: [__webpack_require__(/*! ./top-navigation-bar.component.css */ "./src/app/common/top-navigation-bar/top-navigation-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TopNavigationBarComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-summary/portfolio-summary.component */ "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts");
/* harmony import */ var src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transactions-summary/transactions-summary.component */ "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts");








let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _portfolio_summary_portfolio_summary_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioSummaryComponent"], _transactions_summary_transactions_summary_component__WEBPACK_IMPORTED_MODULE_7__["TransactionsSummaryComponent"]],
        exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_common_module__WEBPACK_IMPORTED_MODULE_5__["CommonAppModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-grid-tile{\n    border: 1px solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1ncmlkLXRpbGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/modules/dashboard/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/portfolio-summary/accounts.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/portfolio-summary/accounts.service.ts ***!
  \*************************************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/backendAPIs */ "./src/environments/backendAPIs.ts");




let AccountsService = class AccountsService {
    constructor(http, backendApis) {
        this.http = http;
        this.backendApis = backendApis;
    }
    getSavingsAccounts() {
        return this.http.get(this.backendApis.getAccountsAPI());
    }
    getDepositAccounts() {
        return this.http.get(this.backendApis.getDepositAccountsAPI());
    }
    getLoanAccounts() {
        return this.http.get(this.backendApis.getLoanAccountsAPI());
    }
    getCardAccounts() {
        return this.http.get(this.backendApis.getCardsAccountsAPI());
    }
};
AccountsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"] }
];
AccountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"]])
], AccountsService);



/***/ }),

/***/ "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: block;\n    left: 0;\n    width: 90%; \n    height: 100%;  \n}\nmat-card {\n    width: 100%;\n}\n.mat-grid-tile {\n    border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcG9ydGZvbGlvLXN1bW1hcnkvcG9ydGZvbGlvLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcG9ydGZvbGlvLXN1bW1hcnkvcG9ydGZvbGlvLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA5MCU7IFxuICAgIGhlaWdodDogMTAwJTsgIFxufVxubWF0LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.ts ***!
  \************************************************************************************/
/*! exports provided: PortfolioSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioSummaryComponent", function() { return PortfolioSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accounts.service */ "./src/app/modules/dashboard/portfolio-summary/accounts.service.ts");



let PortfolioSummaryComponent = class PortfolioSummaryComponent {
    constructor(accountsService) {
        this.accountsService = accountsService;
        this.accountsTotal = 0;
        this.totalDueThisMonth = 0;
        this.totalLoanAmountPending = 0;
        this.savingsTotal = 0;
        this.depositsTotal = 0;
    }
    ngOnInit() {
        this.accountsService.getSavingsAccounts().subscribe((accounts) => {
            this.savingsAccounts = accounts;
            this.savingsAccounts.forEach((account) => {
                this.accountsTotal += account.balance;
                this.savingsTotal += account.balance;
            });
        });
        this.accountsService.getDepositAccounts().subscribe((depositAccounts) => {
            this.depositAccounts = depositAccounts;
            this.depositAccounts.forEach((account) => {
                this.accountsTotal += account.balance;
                this.depositsTotal += account.balance;
            });
        });
        this.accountsService.getLoanAccounts().subscribe((loans) => {
            this.loans = loans;
            this.loans.forEach((account) => {
                this.totalDueThisMonth += account.monthlyEmi;
                this.totalLoanAmountPending += (account.initialAmount - account.paidAmount);
            });
        });
        this.accountsService.getCardAccounts().subscribe((cards) => {
            this.cards = cards;
            this.cards.forEach((card) => {
                if (card.balance < 0) {
                    this.totalDueThisMonth += card.balance;
                }
            });
        });
    }
};
PortfolioSummaryComponent.ctorParameters = () => [
    { type: _accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] }
];
PortfolioSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio-summary',
        template: __webpack_require__(/*! raw-loader!./portfolio-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.html"),
        styles: [__webpack_require__(/*! ./portfolio-summary.component.css */ "./src/app/modules/dashboard/portfolio-summary/portfolio-summary.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]])
], PortfolioSummaryComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/dashboard/transactions-summary/transactions-summary.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n    position: relative;\n    min-height: 200px;\n  }\n.example-table-container {\n    position: relative;\n    max-height: 400px;\n    overflow: auto;\n  }\ntable {\n    width: 100%;\n  }\n.example-loading-shade {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n.example-rate-limit-reached {\n    color: #980000;\n    max-width: 360px;\n    text-align: center;\n  }\n/* Column Widths */\n.mat-column-number,\n  .mat-column-state {\n    max-width: 64px;\n  }\n.mat-column-created {\n    max-width: 124px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvdHJhbnNhY3Rpb25zLXN1bW1hcnkvdHJhbnNhY3Rpb25zLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0FBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVBLGtCQUFrQjtBQUNsQjs7SUFFRSxlQUFlO0VBQ2pCO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC90cmFuc2FjdGlvbnMtc3VtbWFyeS90cmFuc2FjdGlvbnMtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtdGFibGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1yYXRlLWxpbWl0LXJlYWNoZWQge1xuICAgIGNvbG9yOiAjOTgwMDAwO1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKiBDb2x1bW4gV2lkdGhzICovXG4gIC5tYXQtY29sdW1uLW51bWJlcixcbiAgLm1hdC1jb2x1bW4tc3RhdGUge1xuICAgIG1heC13aWR0aDogNjRweDtcbiAgfVxuICBcbiAgLm1hdC1jb2x1bW4tY3JlYXRlZCB7XG4gICAgbWF4LXdpZHRoOiAxMjRweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dashboard/transactions-summary/transactions-summary.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionsSummaryComponent, ExampleHttpDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsSummaryComponent", function() { return TransactionsSummaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDatabase", function() { return ExampleHttpDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TransactionsSummaryComponent = class TransactionsSummaryComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this.httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            this.isLoadingResults = true;
            if (this.exampleDatabase) {
                return this.exampleDatabase.getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        })).subscribe(data => this.data = data);
    }
};
TransactionsSummaryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TransactionsSummaryComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], TransactionsSummaryComponent.prototype, "sort", void 0);
TransactionsSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions-summary',
        template: __webpack_require__(/*! raw-loader!./transactions-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/dashboard/transactions-summary/transactions-summary.component.html"),
        styles: [__webpack_require__(/*! ./transactions-summary.component.css */ "./src/app/modules/dashboard/transactions-summary/transactions-summary.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TransactionsSummaryComponent);

/** An example database that the data source uses to retrieve data for the table. */
class ExampleHttpDatabase {
    constructor(http) {
        this.http = http;
    }
    getRepoIssues(sort, order, page) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        console.log(requestUrl);
        return this.http.get(requestUrl);
    }
}
ExampleHttpDatabase.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];


/***/ }),

/***/ "./src/app/modules/login/login-form/login-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/login/login-form/login-form.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .full-width {\n    width: 100%;\n  }\n  \n  .login-card {\n    min-width: 200px;\n    max-width: 600px;\n    width: 100%; \n    align-self: center;\n    margin-left: 20%;\n    margin-top: 10%;\n    align-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBRVgsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sb2dpbi1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7IFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/login/login-form/login-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/login/login-form/login-form.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/modules/login/login.service.ts");
/* harmony import */ var src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/notification/notification.service */ "./src/app/theme/notification/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/user.model */ "./src/app/modules/users/user.model.ts");






let LoginFormComponent = class LoginFormComponent {
    constructor(loginService, notificationService, router) {
        this.loginService = loginService;
        this.notificationService = notificationService;
        this.router = router;
    }
    ngOnInit() {
    }
    login(loginForm) {
        if (loginForm.valid) {
            const user = new _users_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
            user.username = loginForm.value.username;
            user.password = loginForm.value.password;
            this.loginService.login(user).subscribe(response => {
                if (response.status.status === 'SUCCESS') {
                    sessionStorage.setItem('authenticated', 'true');
                    let isAdminUser = false;
                    for (let i = 0; i < response.data.authorities.length; i++) {
                        if (response.data.authorities[i].authority === 'ADMIN') {
                            isAdminUser = true;
                            break;
                        }
                    }
                    if (isAdminUser) {
                        this.router.navigate(['admin-dashboard']);
                    }
                    else {
                        this.router.navigate(['dashboard']);
                    }
                }
                else {
                    this.notificationService.sendNotification('User login Error!');
                }
            }, error => {
                if (error.status === 401) {
                    this.notificationService.sendNotification('Invalid Credentials!');
                }
                else {
                    this.notificationService.sendNotification('An error occurred!');
                }
                console.log(error);
            });
        }
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/login/login-form/login-form.component.html"),
        styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/modules/login/login-form/login-form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginFormComponent);



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/modules/login/login-form/login-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/modules/login/logout/logout.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts");








let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"]
        ],
        declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]],
        exports: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/modules/login/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/login/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/backendAPIs */ "./src/environments/backendAPIs.ts");




let LoginService = class LoginService {
    constructor(http, backendAPIs) {
        this.http = http;
        this.backendAPIs = backendAPIs;
    }
    isAuthenticated() {
        return sessionStorage.getItem('authenticated') === 'true';
    }
    login(user) {
        const authKey = 'Basic ' + btoa(user.username + ':' + user.password);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](user ? {
            authorization: authKey
        } : {});
        sessionStorage.setItem('auth-key', authKey);
        return this.http.post(this.backendAPIs.getLogintAPI(), user, { headers });
    }
    logout() {
        const authKey = sessionStorage.getItem('auth-key');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](authKey ? {
            authorization: authKey
        } : {});
        return this.http.post(this.backendAPIs.getLogOutAPI(), null, { headers });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_environments_backendAPIs__WEBPACK_IMPORTED_MODULE_3__["BackendAPIService"]])
], LoginService);



/***/ }),

/***/ "./src/app/modules/login/logout/logout.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/login/logout/logout.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/login/logout/logout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/login/logout/logout.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/notification/notification.service */ "./src/app/theme/notification/notification.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/modules/login/login.service.ts");





let LogoutComponent = class LogoutComponent {
    constructor(router, notificationService, logoutService) {
        this.router = router;
        this.notificationService = notificationService;
        this.logoutService = logoutService;
    }
    ngOnInit() {
        sessionStorage.removeItem('authenticated');
        sessionStorage.removeItem('auth-key');
        this.router.navigate(['login']);
        this.logoutService.logout();
        this.notificationService.sendNotification('Logged out successfully!');
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/login/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/modules/login/logout/logout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_theme_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/modules/users/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/users/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "./src/app/modules/welcome/welcome-component/welcome-component.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/welcome/welcome-component/welcome-component.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC93ZWxjb21lLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/welcome/welcome-component/welcome-component.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/welcome/welcome-component/welcome-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-component',
        template: __webpack_require__(/*! raw-loader!./welcome-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/welcome/welcome-component/welcome-component.component.html"),
        styles: [__webpack_require__(/*! ./welcome-component.component.css */ "./src/app/modules/welcome/welcome-component/welcome-component.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WelcomeComponent);



/***/ }),

/***/ "./src/app/modules/welcome/welcome.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/welcome/welcome.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-component/welcome-component.component */ "./src/app/modules/welcome/welcome-component/welcome-component.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.module */ "./src/app/modules/login/login.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let WelcomeModule = class WelcomeModule {
};
WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_welcome_component_welcome_component_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"]
        ]
    })
], WelcomeModule);



/***/ }),

/***/ "./src/app/page-layouts/page-layouts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/page-layouts/page-layouts.module.ts ***!
  \*****************************************************/
/*! exports provided: PageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-login/pre-login.component */ "./src/app/page-layouts/pre-login/pre-login.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common.module */ "./src/app/common/common.module.ts");





let PageLayoutsModule = class PageLayoutsModule {
};
PageLayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_3__["PreLoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_4__["CommonAppModule"]
        ],
        exports: [
            _pre_login_pre_login_component__WEBPACK_IMPORTED_MODULE_3__["PreLoginComponent"]
        ]
    })
], PageLayoutsModule);



/***/ }),

/***/ "./src/app/page-layouts/pre-login/pre-login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/page-layouts/pre-login/pre-login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbGF5b3V0cy9wcmUtbG9naW4vcHJlLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-layouts/pre-login/pre-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/page-layouts/pre-login/pre-login.component.ts ***!
  \***************************************************************/
/*! exports provided: PreLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoginComponent", function() { return PreLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreLoginComponent = class PreLoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
PreLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pre-login',
        template: __webpack_require__(/*! raw-loader!./pre-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-layouts/pre-login/pre-login.component.html"),
        styles: [__webpack_require__(/*! ./pre-login.component.css */ "./src/app/page-layouts/pre-login/pre-login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PreLoginComponent);



/***/ }),

/***/ "./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmationDialogueInput, ConfirmationDialogueButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueInput", function() { return ConfirmationDialogueInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueButtons", function() { return ConfirmationDialogueButtons; });
class ConfirmationDialogueInput {
}
class ConfirmationDialogueButtons {
    constructor(text, returnText, color) {
        this.text = text;
        this.returnText = returnText;
        this.color = color;
    }
}
ConfirmationDialogueButtons.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-class{\n    margin: 3%;\n}\n.dialogue{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29uZmlybWF0aW9uLWRpYWxvZ3VlL2NvbmZpcm1hdGlvbi1kaWFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9jb25maXJtYXRpb24tZGlhbG9ndWUvY29uZmlybWF0aW9uLWRpYWxvZ3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNsYXNze1xuICAgIG1hcmdpbjogMyU7XG59XG4uZGlhbG9ndWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmationDialogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogueComponent", function() { return ConfirmationDialogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialogue-input */ "./src/app/theme/confirmation-dialogue/confirmation-dialogue-input.ts");




let ConfirmationDialogueComponent = class ConfirmationDialogueComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onCloseClick() {
        this.dialogRef.close('');
    }
    buttonClicked(i) {
        this.dialogRef.close(this.data.buttons[i].returnText);
    }
};
ConfirmationDialogueComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogueInput"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmationDialogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation-dialogue',
        template: __webpack_require__(/*! raw-loader!./confirmation-dialogue.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.html"),
        styles: [__webpack_require__(/*! ./confirmation-dialogue.component.css */ "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _confirmation_dialogue_input__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogueInput"]])
], ConfirmationDialogueComponent);



/***/ }),

/***/ "./src/app/theme/expandable-list/expandable-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/theme/expandable-list/expandable-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n  tr.user-detail-row {\n    height: 0;\n  }\n  \n  tr.user-details-row:not(.user-details-expanded-row):hover {\n    background: #f5f5f5;\n  }\n  \n  tr.user-details-row:not(.user-details-expanded-row):active {\n    background: #efefef;\n  }\n  \n  .user-details-row td {\n    border-bottom-width: 0;\n  }\n  \n  .user-details {\n    overflow: hidden;\n    display: flex;\n  }\n  \n  .user-details-box {\n    min-width: 80px;\n    border: 2px solid black;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n  \n  .user-details-id {\n    font-weight: bold;\n    font-size: 40px;\n    line-height: normal;\n  }\n  \n  .user-details-table{\n    min-width: 80px;\n    border: 2px solid lightgray;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZXhwYW5kYWJsZS1saXN0L2V4cGFuZGFibGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2V4cGFuZGFibGUtbGlzdC9leHBhbmRhYmxlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdHIudXNlci1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIHRyLnVzZXItZGV0YWlscy1yb3c6bm90KC51c2VyLWRldGFpbHMtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgfVxuICBcbiAgdHIudXNlci1kZXRhaWxzLXJvdzpub3QoLnVzZXItZGV0YWlscy1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscy1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC51c2VyLWRldGFpbHMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscy1ib3gge1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIFxuICAudXNlci1kZXRhaWxzLWlkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLnVzZXItZGV0YWlscy10YWJsZXtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/theme/expandable-list/expandable-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/expandable-list/expandable-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ExpandableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableListComponent", function() { return ExpandableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _pageupdatedevent_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageupdatedevent.model */ "./src/app/theme/expandable-list/pageupdatedevent.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ExpandableListComponent = class ExpandableListComponent {
    constructor(route) {
        this.route = route;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.getPaginatedItems({ length: 0, pageIndex: 1, pageSize: 5, previousPageIndex: 1 });
        });
    }
    toggleExpandedRow(row) {
        if (this.expandedRow !== row) {
            this.expandedRow = row;
        }
        else {
            this.expandedRow = '';
        }
    }
    getPaginatedItems(event) {
        const paginationUpdate = new _pageupdatedevent_model__WEBPACK_IMPORTED_MODULE_3__["PageUpdatedEventData"]();
        paginationUpdate.length = event.length;
        paginationUpdate.pageIndex = event.pageIndex;
        paginationUpdate.pageSize = event.pageSize;
        paginationUpdate.previousPageIndex = event.previousPageIndex;
        this.pageChanged.emit(paginationUpdate);
    }
};
ExpandableListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableListComponent.prototype, "listData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableListComponent.prototype, "listColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableListComponent.prototype, "detailsColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableListComponent.prototype, "totalNumberOfItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableListComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpandableListComponent.prototype, "pageNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ExpandableListComponent.prototype, "pageChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ExpandableListComponent.prototype, "deleteEvent", void 0);
ExpandableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable-list',
        template: __webpack_require__(/*! raw-loader!./expandable-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/expandable-list/expandable-list.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__webpack_require__(/*! ./expandable-list.component.css */ "./src/app/theme/expandable-list/expandable-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ExpandableListComponent);



/***/ }),

/***/ "./src/app/theme/expandable-list/pageupdatedevent.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/expandable-list/pageupdatedevent.model.ts ***!
  \*****************************************************************/
/*! exports provided: PageUpdatedEventData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUpdatedEventData", function() { return PageUpdatedEventData; });
class PageUpdatedEventData {
}


/***/ }),

/***/ "./src/app/theme/footer-bar/footer-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/theme/footer-bar/footer-bar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    position: fixed;\n    bottom:0;\n    width:100%;\n    height:64px;   /* Height of the footer */\n    background:#6cf;\n    margin-top: 10px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZm9vdGVyLWJhci9mb290ZXItYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXLElBQUkseUJBQXlCO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9mb290ZXItYmFyL2Zvb3Rlci1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjY0cHg7ICAgLyogSGVpZ2h0IG9mIHRoZSBmb290ZXIgKi9cbiAgICBiYWNrZ3JvdW5kOiM2Y2Y7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiB9Il19 */"

/***/ }),

/***/ "./src/app/theme/footer-bar/footer-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/footer-bar/footer-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBarComponent", function() { return FooterBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterBarComponent = class FooterBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-bar',
        template: __webpack_require__(/*! raw-loader!./footer-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/footer-bar/footer-bar.component.html"),
        styles: [__webpack_require__(/*! ./footer-bar.component.css */ "./src/app/theme/footer-bar/footer-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterBarComponent);



/***/ }),

/***/ "./src/app/theme/main-layout/main-layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/theme/main-layout/main-layout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\n    margin: 10px;\n    margin-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250ZW50e1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/main-layout/main-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/main-layout/main-layout.component.ts ***!
  \************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainLayoutComponent = class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(/*! raw-loader!./main-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/main-layout/main-layout.component.html"),
        styles: [__webpack_require__(/*! ./main-layout.component.css */ "./src/app/theme/main-layout/main-layout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainLayoutComponent);



/***/ }),

/***/ "./src/app/theme/notification/notification.component.css":
/*!***************************************************************!*\
  !*** ./src/app/theme/notification/notification.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/theme/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ "./src/app/theme/notification/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let NotificationComponent = class NotificationComponent {
    constructor(notificationService, snackbar) {
        this.notificationService = notificationService;
        this.snackbar = snackbar;
    }
    ngOnInit() {
        this.showNotification = false;
        this.notificationService.notificationEvent.subscribe(message => {
            setTimeout(() => {
                this.showNotification = true;
                this.message = message.message;
                this.snackbar.open(this.message, 'Close', {
                    duration: 5000,
                });
                setTimeout(() => {
                    this.showNotification = false;
                    this.message = '';
                }, 5000);
            });
        });
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/notification/notification.component.html"),
        styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/theme/notification/notification.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], NotificationComponent);



/***/ }),

/***/ "./src/app/theme/notification/notification.service.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/notification/notification.service.ts ***!
  \************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationService = class NotificationService {
    constructor() {
        this.notificationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    sendNotification(message) {
        this.notificationEvent.emit({ message });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], NotificationService.prototype, "notificationEvent", void 0);
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NotificationService);



/***/ }),

/***/ "./src/app/theme/theme.module.ts":
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-fixed-bar/top-fixed-bar.component */ "./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/theme/main-layout/main-layout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-bar/footer-bar.component */ "./src/app/theme/footer-bar/footer-bar.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/theme/notification/notification.component.ts");
/* harmony import */ var _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expandable-list/expandable-list.component */ "./src/app/theme/expandable-list/expandable-list.component.ts");
/* harmony import */ var _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirmation-dialogue/confirmation-dialogue.component */ "./src/app/theme/confirmation-dialogue/confirmation-dialogue.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");












let ThemeModule = class ThemeModule {
};
ThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _top_fixed_bar_top_fixed_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopFixedBarComponent"],
            _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
            _footer_bar_footer_bar_component__WEBPACK_IMPORTED_MODULE_7__["FooterBarComponent"],
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"],
            _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_9__["ExpandableListComponent"],
            _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogueComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"]
        ],
        providers: [],
        bootstrap: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"]],
        exports: [_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"], _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"], _expandable_list_expandable_list_component__WEBPACK_IMPORTED_MODULE_9__["ExpandableListComponent"], _confirmation_dialogue_confirmation_dialogue_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmationDialogueComponent"]]
    })
], ThemeModule);



/***/ }),

/***/ "./src/app/theme/top-fixed-bar/top-fixed-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/theme/top-fixed-bar/top-fixed-bar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    margin-left: 10px;\n}\nmat-icon{\n    margin-right: 10px;\n}\n.mat-toolbar-multiple-rows {\n    min-height: 0; \n}\n.mat-toolbar-row {\n    height: unset;\n}\n.last {\n    position: absolute;\n    right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdG9wLWZpeGVkLWJhci90b3AtZml4ZWQtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RvcC1maXhlZC1iYXIvdG9wLWZpeGVkLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbm1hdC1pY29ue1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzIHtcbiAgICBtaW4taGVpZ2h0OiAwOyBcbn1cbi5tYXQtdG9vbGJhci1yb3cge1xuICAgIGhlaWdodDogdW5zZXQ7XG59XG5cbi5sYXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/top-fixed-bar/top-fixed-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: TopFixedBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopFixedBarComponent", function() { return TopFixedBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/login/login.service */ "./src/app/modules/login/login.service.ts");



let TopFixedBarComponent = class TopFixedBarComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
    isAuthenticated() {
        return this.loginService.isAuthenticated();
    }
};
TopFixedBarComponent.ctorParameters = () => [
    { type: src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
TopFixedBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-fixed-bar',
        template: __webpack_require__(/*! raw-loader!./top-fixed-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/top-fixed-bar/top-fixed-bar.component.html"),
        styles: [__webpack_require__(/*! ./top-fixed-bar.component.css */ "./src/app/theme/top-fixed-bar/top-fixed-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], TopFixedBarComponent);



/***/ }),

/***/ "./src/environments/backendAPIs.ts":
/*!*****************************************!*\
  !*** ./src/environments/backendAPIs.ts ***!
  \*****************************************/
/*! exports provided: BackendAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendAPIService", function() { return BackendAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BackendAPIService = class BackendAPIService {
    getBaseUrl() {
        const mockEnabled = true;
        const backendUrl = mockEnabled ? _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backendUrl : _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mockBackendUrl;
        const PATH_SEPERATOR = '/';
        const context = _environment__WEBPACK_IMPORTED_MODULE_1__["environment"].contextName;
        let baseURL = backendUrl + PATH_SEPERATOR;
        if (context !== '') {
            baseURL = baseURL + context + PATH_SEPERATOR;
        }
        return baseURL;
    }
    getAccountsAPI() {
        return this.getBaseUrl() + 'user/products/accounts';
    }
    getDepositAccountsAPI() {
        return this.getBaseUrl() + 'user/products/deposits';
    }
    getLoanAccountsAPI() {
        return this.getBaseUrl() + 'user/products/loans';
    }
    getCardsAccountsAPI() {
        return this.getBaseUrl() + 'user/products/cards';
    }
    getCorporatesAPI() {
        return this.getBaseUrl() + 'corporates/';
    }
    getLogintAPI() {
        return this.getBaseUrl() + 'auth/login';
    }
    getLogOutAPI() {
        return this.getBaseUrl() + 'logout';
    }
    getInventoryListAPI(pageSize, pageNumber) {
        return this.getBaseUrl() +
            'inventory/list' + '?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&sortBy=id';
    }
    getUpdateInventoryListAPI(companyName, medicineName) {
        return this.getBaseUrl() +
            'inventory/update/' + companyName + '/' + medicineName + '/';
    }
    getSearchInventoryListAPI(searchCriteria) {
        return this.getBaseUrl() +
            'inventory/search?q=' + searchCriteria;
    }
    getDeleteArticleAPI(id) {
        return this.getBaseUrl() + 'article' + '/' + id;
    }
    getCreateArticleAPI() {
        return this.getBaseUrl() + 'article';
    }
    getArticleListAPI(pageSize, pageNumber) {
        return this.getBaseUrl()
            + 'article/list?pageSize='
            + pageSize
            + '&pageNumber='
            + pageNumber
            + '&sortBy=id';
    }
    getUsersListAPI(pageSize, pageNumber) {
        return this.getBaseUrl() + 'user/list?pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&sortBy=id';
    }
};
BackendAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], BackendAPIService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backendUrl: 'http://localhost:8080',
    mockBackendUrl: 'assets/mocks',
    contextName: '',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohitk/projects/Xbank/retail-banking-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map