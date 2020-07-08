(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./movies/movies.module": "./src/app/movies/movies.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-sidebar></app-sidebar>\n  <div class=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/sidebar.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/sidebar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <a href=\"\">BM</a>\n  <nav>\n    <a href=\"#\">\n      <img src=\"assets/icons/eye.svg\" alt=\"sidebar nav link icon\">\n    </a>\n    <a href=\"#\" class=\"active\">\n      <img src=\"assets/icons/monitor.svg\" alt=\"sidebar nav link icon\">\n    </a>\n    <a href=\"#\">\n      <img src=\"assets/icons/folder.svg\" alt=\"sidebar nav link icon\">\n    </a>\n    <a href=\"#\">\n      <img src=\"assets/icons/heart.svg\" alt=\"sidebar nav link icon\">\n    </a>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-detail/movie-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-spinner [loading]=\"!movie\"></app-loading-spinner>\n\n<div class=\"movie-info-container\" *ngIf=\"movie\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"movie-banner-cover\">\n    <img src=\"{{movie.cover}}\" alt=\"movie cover\">\n  </div>\n  <div class=\"movie-detail-container\">\n    <div class=\"movie-cover\">\n      <img src=\"{{movie.img}}\" alt=\"movie poster\">\n    </div>\n    <div class=\"movie-detail\">\n      <h2>{{movie.name}}</h2>\n      <div class=\"short-info\">\n        <div class=\"rate\"><span>rate: <strong>{{movie.rate}}</strong></span></div>\n        <div class=\"duration\"><span>length: <strong>{{movie.length}}</strong></span></div>\n        <div class=\"genres\">\n          <span>genres:</span>\n          <a *ngFor=\"let genre of movie.genres\" [routerLink]=\"['/movies/']\" [queryParams]=\"{filter:genre}\">\n            {{genre}}\n          </a>\n        </div>\n      </div>\n      <p class=\"desc\">\n        {{movie.description}}\n      </p>\n    </div>\n\n\n\n  </div>\n</div>\n<iframe width=\"100%\" height=\"100%\" allowfullscreen frameBorder=\"0\" [src]=\"urlSafe\"></iframe>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies/movies.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\n  <img src=\"assets/icons/search.svg\" alt=\"search icon\">\n  <input [(ngModel)]=\"searchText\" name=\"searchText\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n</div>\n<div class=\"main-container\">\n<div class=\"genres-list\">\n  <span class=\"title\">genres</span>\n  <hr>\n  <ul class=\"genre-list-items\">\n    <li *ngFor=\"let genre of genres | enumToArray\">\n      <a\n        [ngClass]=\"{'active': genre.toLowerCase() == selectedGenre}\"\n        [routerLink]=\"['/movies/']\"\n        [queryParams]=\"{filter:genre.toLowerCase()}\"\n        (click)=\"changeFilter($event)\">\n        {{genre}}\n      </a>\n    </li>\n  </ul>\n</div>\n<app-loading-spinner [loading]=\"!visibleMovies\"></app-loading-spinner>\n<div *ngIf=\"visibleMovies\" class=\"movies-container\" [@simpleFadeAnimation]=\"'in'\">\n  <div class=\"movies-list-header\">\n    <span class=\"count\">\n      {{visibleMovies.length}} Movies\n    </span>\n    <div class=\"sort\">\n      SORT BY:\n      <select [(ngModel)]=\"sortBy\">\n        <option value=\"rate\">Rate</option>\n        <option value=\"id\">Lastest</option>\n      </select>\n    </div>\n  </div>\n  <hr>\n  <div class=\"movies-list\">\n    <div *ngFor=\"let movie of visibleMovies | filter: searchText | sort: sortBy\" class=\"movie\">\n      <a [routerLink]=\"['/movies/' + movie.id + '/' + movie.key]\">\n        <figure>\n          <img src=\"{{movie.img}}\" alt=\"movie poster\">\n        </figure>\n        <span class=\"title\">{{movie.name}}</span>\n        <span class=\"rate\">{{movie.rate}}</span>\n      </a>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loading-spinner.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loading-spinner.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-circle\" *ngIf=\"loading\">\n  <div class=\"sk-circle1 sk-child\"></div>\n  <div class=\"sk-circle2 sk-child\"></div>\n  <div class=\"sk-circle3 sk-child\"></div>\n  <div class=\"sk-circle4 sk-child\"></div>\n  <div class=\"sk-circle5 sk-child\"></div>\n  <div class=\"sk-circle6 sk-child\"></div>\n  <div class=\"sk-circle7 sk-child\"></div>\n  <div class=\"sk-circle8 sk-child\"></div>\n  <div class=\"sk-circle9 sk-child\"></div>\n  <div class=\"sk-circle10 sk-child\"></div>\n  <div class=\"sk-circle11 sk-child\"></div>\n  <div class=\"sk-circle12 sk-child\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.app .main {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxIUFxcRGVza3RvcFxcaW9uaWNhcHBcXFdFQlxcQW1vdmkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgLm1haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIiwiLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hcHAgLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

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
        this.title = 'movie-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movies.module */ "./src/app/movies/movies.module.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movie_detail_movie_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-detail/movie-detail.module */ "./src/app/movie-detail/movie-detail.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"], { useHash: true }),
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _movies_movies_module__WEBPACK_IMPORTED_MODULE_6__["MoviesModule"],
            _movie_detail_movie_detail_module__WEBPACK_IMPORTED_MODULE_9__["MoviesDetailModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/core/sidebar.component.ts");





let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        providers: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/sidebar.component.scss":
/*!*********************************************!*\
  !*** ./src/app/core/sidebar.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  width: 100px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1em 0;\n  border-right: 1px solid;\n}\n.sidebar a {\n  color: #ffffff;\n}\n.sidebar nav {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 2em;\n}\n.sidebar nav a {\n  padding: 0.5em;\n  margin-bottom: 0.5em;\n}\n.sidebar nav a.active {\n  background-color: #FF0571;\n}\n.sidebar nav img {\n  max-width: 1.5em;\n}\n@media only screen and (max-width: 48em) {\n  .sidebar {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9DOlxcVXNlcnNcXEhQXFxEZXNrdG9wXFxpb25pY2FwcFxcV0VCXFxBbW92aS9zcmNcXGFwcFxcY29yZVxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDREY7QURHRTtFQUNFLGNFVEk7QURRUjtBRElFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUk7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUNGTjtBRElNO0VBQ0UseUJFNUJEO0FEMEJQO0FETUk7RUFDRSxnQkFBQTtBQ0pOO0FEUUU7RUFuQ0Y7SUFvQ0ksV0FBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uc2lkZWJhcntcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcblxuICBhe1xuICAgIGNvbG9yOiAkbGlnaHQ7XG4gIH1cblxuICBuYXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG5cbiAgICBhe1xuICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcblxuICAgICAgJi5hY3RpdmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1ne1xuICAgICAgbWF4LXdpZHRoOiAxLjVlbTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0OGVtKSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbn1cbiIsIi5zaWRlYmFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbn1cbi5zaWRlYmFyIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zaWRlYmFyIG5hdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbi5zaWRlYmFyIG5hdiBhIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLnNpZGViYXIgbmF2IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDU3MTtcbn1cbi5zaWRlYmFyIG5hdiBpbWcge1xuICBtYXgtd2lkdGg6IDEuNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxufSIsIiRwaW5rOiAjRkYwNTcxO1xuJGdyZXk6ICNmM2YzZjM7XG4kYmx1ZTogIzE4MkI1NDtcbiRsaWdodEJsdWU6ICMwMEI1RTk7XG4kbGlnaHQ6ICNmZmZmZmY7XG4kZGFyazogIzAwMDAwMDtcbiR5ZWxsb3c6ICNGRkIxMUE7XG5cblxuJHByaW1hcnktY29sb3I6ICRibHVlO1xuJHByaW1hcnktY29sb3ItZGFyazogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4KTtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcblxuJHByaW1hcnktbGluazogJGJsdWU7XG4kc2Vjb25kYXJ5LWxpbms6ICRsaWdodEJsdWU7XG5cbiRwcmltYXJ5LXRpdGxlOiAkbGlnaHQ7XG4kc2Vjb25kYXJ5LXRpdGxlOiAkeWVsbG93O1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/sidebar.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/sidebar.component.ts ***!
  \*******************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar.component.scss")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-info-container {\n  width: 100%;\n}\n\n.movie-banner-cover {\n  position: relative;\n  max-height: 25em;\n  overflow: hidden;\n}\n\n.movie-banner-cover img {\n  width: 100%;\n}\n\n.movie-banner-cover:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(4, 6, 13, 0) 15%, #182b54 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00000000\", endColorstr=\"#182b54\",GradientType=0 );\n  /* IE6-9 */\n}\n\n.movie-detail-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 0 2em;\n  -webkit-transform: translateY(-4em);\n          transform: translateY(-4em);\n}\n\n.movie-detail {\n  padding: 0 1em;\n  color: #a6a6a6;\n}\n\n.movie-detail h2 {\n  color: #ffffff;\n  margin-top: 0;\n}\n\n.movie-detail .short-info {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  text-transform: capitalize;\n}\n\n.movie-detail .short-info div {\n  margin-right: 1em;\n}\n\n.movie-detail .short-info strong {\n  color: #ffffff;\n}\n\n.movie-detail .genres a {\n  margin-left: 0.5em;\n  background-color: #FF0571;\n  color: #ffffff;\n  padding: 0.4em;\n  border-radius: 5px;\n  text-decoration: none;\n}\n\n.movie-detail .desc {\n  max-width: 70%;\n  line-height: 1.8;\n}\n\n@media only screen and (max-width: 48em) {\n  .movie-detail-container {\n    flex-direction: column-reverse;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    padding: 0 0.5em;\n  }\n  .movie-detail-container .movie-cover {\n    padding: 0 1em;\n  }\n  .movie-detail-container .short-info {\n    flex-direction: column;\n  }\n  .movie-detail-container .short-info div {\n    margin-right: 0;\n    margin-bottom: 1em;\n  }\n  .movie-detail-container .genres span {\n    display: block;\n    margin-bottom: 1em;\n  }\n  .movie-detail-container .desc {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxcXG1vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWUtZGV0YWlsL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ3FHLGFBQUE7RUFDQyw0QkFBQTtFQUN0RyxnR0FBQTtFQUFvRyxxREFBQTtFQUNwRyxxSEFBQTtFQUF1SCxVQUFBO0FDRTNIOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsY0V2Q0k7RUZ3Q0osYUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVJO0VBQ0UsaUJBQUE7QUNBTjs7QURHSTtFQUNFLGNFdERFO0FEcURSOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSx5QkVqRUM7RUZrRUQsY0U5REU7RUYrREYsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNKTjs7QURRRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFVBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxnQkFBQTtFQ1BGO0VEU0U7SUFDRSxjQUFBO0VDUEo7RURTRTtJQUNFLHNCQUFBO0VDUEo7RURTSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ1BOO0VEV0k7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUNUTjtFRFlFO0lBQ0UsZUFBQTtFQ1ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuLm1vdmllLWluZm8tY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vdmllLWJhbm5lci1jb3ZlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAyNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUsIHJnYmEoNCw2LDEzLDApIDE1JSwgcmdiYSgyNCw0Myw4NCwxKSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoNCw2LDEzLDApIDE1JSxyZ2JhKDI0LDQzLDg0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoNCw2LDEzLDApIDE1JSxyZ2JhKDI0LDQzLDg0LDEpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMDAwJywgZW5kQ29sb3JzdHI9JyMxODJiNTQnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG4gIH1cbn1cblxuLm1vdmllLWRldGFpbC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwIDJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00ZW0pO1xufVxuXG4ubW92aWUtZGV0YWlse1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgY29sb3I6IGRhcmtlbigkbGlnaHQsIDM1KTtcblxuICBoMntcbiAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5zaG9ydC1pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgICBkaXYge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgfVxuXG4gICAgc3Ryb25ne1xuICAgICAgY29sb3I6ICRwcmltYXJ5LXRpdGxlO1xuICAgIH1cbiAgfVxuXG4gIC5nZW5yZXN7XG4gICAgYXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XG4gICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZGVzY3tcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4ZW0pIHtcbiAgLm1vdmllLWRldGFpbC1jb250YWluZXJ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuXG4gICAgLm1vdmllLWNvdmVye1xuICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgfVxuICAgIC5zaG9ydC1pbmZve1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgZGl2IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5nZW5yZXN7XG4gICAgICBzcGFue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgfVxuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIi5tb3ZpZS1pbmZvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW92aWUtYmFubmVyLWNvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiAyNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vdmllLWJhbm5lci1jb3ZlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tb3ZpZS1iYW5uZXItY292ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDQsIDYsIDEzLCAwKSAxNSUsICMxODJiNTQgMTAwJSk7XG4gIC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSg0LCA2LCAxMywgMCkgMTUlLCAjMTgyYjU0IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDQsIDYsIDEzLCAwKSAxNSUsICMxODJiNTQgMTAwJSk7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiMwMDAwMDAwMFwiLCBlbmRDb2xvcnN0cj1cIiMxODJiNTRcIixHcmFkaWVudFR5cGU9MCApO1xuICAvKiBJRTYtOSAqL1xufVxuXG4ubW92aWUtZGV0YWlsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwIDJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00ZW0pO1xufVxuXG4ubW92aWUtZGV0YWlsIHtcbiAgcGFkZGluZzogMCAxZW07XG4gIGNvbG9yOiAjYTZhNmE2O1xufVxuLm1vdmllLWRldGFpbCBoMiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm1vdmllLWRldGFpbCAuc2hvcnQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubW92aWUtZGV0YWlsIC5zaG9ydC1pbmZvIGRpdiB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuLm1vdmllLWRldGFpbCAuc2hvcnQtaW5mbyBzdHJvbmcge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5tb3ZpZS1kZXRhaWwgLmdlbnJlcyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwNTcxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC40ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1vdmllLWRldGFpbCAuZGVzYyB7XG4gIG1heC13aWR0aDogNzAlO1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgLm1vdmllLWRldGFpbC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgcGFkZGluZzogMCAwLjVlbTtcbiAgfVxuICAubW92aWUtZGV0YWlsLWNvbnRhaW5lciAubW92aWUtY292ZXIge1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICB9XG4gIC5tb3ZpZS1kZXRhaWwtY29udGFpbmVyIC5zaG9ydC1pbmZvIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb3ZpZS1kZXRhaWwtY29udGFpbmVyIC5zaG9ydC1pbmZvIGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICAubW92aWUtZGV0YWlsLWNvbnRhaW5lciAuZ2VucmVzIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICAubW92aWUtZGV0YWlsLWNvbnRhaW5lciAuZGVzYyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59IiwiJHBpbms6ICNGRjA1NzE7XG4kZ3JleTogI2YzZjNmMztcbiRibHVlOiAjMTgyQjU0O1xuJGxpZ2h0Qmx1ZTogIzAwQjVFOTtcbiRsaWdodDogI2ZmZmZmZjtcbiRkYXJrOiAjMDAwMDAwO1xuJHllbGxvdzogI0ZGQjExQTtcblxuXG4kcHJpbWFyeS1jb2xvcjogJGJsdWU7XG4kcHJpbWFyeS1jb2xvci1kYXJrOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDgpO1xuJHByaW1hcnktY29sb3ItbGlnaHQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwKTtcbiRzZWNvbmRhcnktY29sb3I6ICRwaW5rO1xuXG4kcHJpbWFyeS1saW5rOiAkYmx1ZTtcbiRzZWNvbmRhcnktbGluazogJGxpZ2h0Qmx1ZTtcblxuJHByaW1hcnktdGl0bGU6ICRsaWdodDtcbiRzZWNvbmRhcnktdGl0bGU6ICR5ZWxsb3c7XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movies_services_movies_repository_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies/services/movies-repository.service */ "./src/app/movies/services/movies-repository.service.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let MovieDetailComponent = class MovieDetailComponent {
    constructor(sanitizer, moviesRepositoryService, activatedRoute) {
        this.sanitizer = sanitizer;
        this.moviesRepositoryService = moviesRepositoryService;
        this.activatedRoute = activatedRoute;
        this.movie = null;
        this.error = null;
        this.url = "https://www.mmlpqtpkasjdashdjahd.com";
    }
    ngOnInit() {
        const { id } = this.activatedRoute.snapshot.params;
        this.getMovie(+id);
    }
    getMovie(id) {
        this.moviesRepositoryService.getMovieById(id)
            .subscribe(data => {
            this.movie = data;
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
        }, err => this.error = err);
    }
};
MovieDetailComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _movies_services_movies_repository_service__WEBPACK_IMPORTED_MODULE_3__["MoviesRepositoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MovieDetailComponent.prototype, "movie", void 0);
MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-detail',
        template: __webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/movie-detail/movie-detail.component.html"),
        animations: [
            _shared_animations__WEBPACK_IMPORTED_MODULE_4__["FadeIn"]
        ],
        styles: [__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/movie-detail/movie-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
        _movies_services_movies_repository_service__WEBPACK_IMPORTED_MODULE_3__["MoviesRepositoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MovieDetailComponent);



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: MoviesDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesDetailModule", function() { return MoviesDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");



let MoviesDetailModule = class MoviesDetailModule {
};
MoviesDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ],
        declarations: [],
        exports: [],
        providers: []
    })
], MoviesDetailModule);



/***/ }),

/***/ "./src/app/movies/models/genre.model.ts":
/*!**********************************************!*\
  !*** ./src/app/movies/models/genre.model.ts ***!
  \**********************************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre;
(function (Genre) {
    Genre["All"] = "all";
    Genre["Action"] = "action";
    Genre["Adventure"] = "adventure";
    Genre["Biography"] = "biography";
    Genre["Comedy"] = "comedy";
    Genre["Crime"] = "crime";
    Genre["Drama"] = "drama";
    Genre["History"] = "history";
    Genre["Mystery"] = "mystery";
    Genre["Scifi"] = "scifi";
    Genre["Sport"] = "sport";
    Genre["Thriller"] = "thriller";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.search-bar {\n  position: relative;\n}\n\n.search-bar input {\n  display: block;\n  width: 100%;\n  background-color: #132344;\n  border: 1px solid #132344;\n  color: #ffffff;\n  padding: 1.5em;\n  border: none;\n  outline: none;\n  font-size: 1em;\n  padding-left: 4em;\n}\n\n.search-bar input::-webkit-input-placeholder {\n  color: #233f7c;\n}\n\n.search-bar input::-moz-placeholder {\n  color: #233f7c;\n}\n\n.search-bar input::-ms-input-placeholder {\n  color: #233f7c;\n}\n\n.search-bar input::placeholder {\n  color: #233f7c;\n}\n\n.search-bar input:focus {\n  outline: none !important;\n  border: 1px solid #233f7c;\n}\n\n.search-bar img {\n  position: absolute;\n  top: calc(50% - 1em);\n  left: 1em;\n  width: 2em;\n}\n\n.main-container {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.genres-list {\n  width: 200px;\n  height: 100vh;\n  background-color: #0f1b34;\n  color: #233f7c;\n  padding: 1em;\n}\n\n.genres-list hr {\n  border: none;\n  height: 1px;\n  background: #1f3056;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #1f3056 0%, #28416d 50%, #1f3056 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#1f3056\", endColorstr=\"#1f3056\",GradientType=1 );\n  /* IE6-9 */\n}\n\n.genres-list .title {\n  color: #ffffff;\n  text-transform: uppercase;\n}\n\n.genres-list .genre-list-items {\n  padding: 0;\n  list-style-type: none;\n}\n\n.genres-list .genre-list-items li {\n  margin-bottom: 0.8em;\n}\n\n.genres-list .genre-list-items a {\n  text-decoration: none;\n  color: #233f7c;\n}\n\n.genres-list .genre-list-items a:hover, .genres-list .genre-list-items a.active {\n  color: #00B5E9;\n}\n\n.movies-container {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: calc(100% - 200px);\n  max-height: 100vh;\n  overflow-y: scroll;\n}\n\n.movies-container .movies-list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  padding: 1em;\n}\n\n.movies-container .movies-list-header .count {\n  color: #FFB11A;\n}\n\n.movies-container .movies-list-header .sort {\n  color: #ffffff;\n  padding-right: 1em;\n  font-size: 0.8em;\n}\n\n.movies-container .movies-list-header select {\n  background-color: #294990;\n  border: none;\n  color: #ffffff;\n  height: 2.5em;\n  width: 9em;\n  font-size: 1.2em;\n  margin-left: 1em;\n}\n\n.movies-container hr {\n  width: 100%;\n  border-color: #233f7c;\n  opacity: 0.6;\n}\n\n.movies-container .movies-list {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 1em;\n}\n\n.movies-container .movie {\n  margin-bottom: 1.8em;\n  flex-basis: 20%;\n}\n\n.movies-container .movie a {\n  color: #ffffff;\n}\n\n.movies-container .movie figure {\n  padding: 0;\n  margin: 0;\n}\n\n.movies-container .movie figure img {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.movies-container .movie .title,\n.movies-container .movie .rate {\n  display: block;\n  margin-top: 0.3em;\n}\n\n.movies-container .movie .title {\n  color: #ffffff;\n}\n\n.movies-container .movie .rate {\n  color: #233f7c;\n}\n\n@media only screen and (max-width: 48em) {\n  .main-container {\n    flex-direction: column;\n  }\n  .main-container .genres-list {\n    width: 100%;\n    height: auto;\n    padding: 0.8em;\n  }\n  .main-container .genre-list-items {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin: 0;\n  }\n  .main-container .genre-list-items li {\n    margin-right: 1em;\n  }\n  .main-container .movies-container {\n    width: 100%;\n  }\n  .main-container .movies-container .movie {\n    flex-basis: 50% !important;\n    justify-content: space-between;\n  }\n  .main-container .movies-container figure img {\n    max-width: 8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcYXBwXFxtb3ZpZXNcXG1vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjRVpJO0VGYUosY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDREo7O0FER0k7RUFDRSxjRWJnQjtBRFl0Qjs7QURRSTtFQUNFLGNFckJnQjtBRGtCdEI7O0FERUk7RUFDRSxjRXJCZ0I7QURrQnRCOztBREVJO0VBQ0UsY0VyQmdCO0FEa0J0Qjs7QURNSTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNKTjs7QURRRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJFaERtQjtFRmlEbkIsY0VoRG9CO0VGaURwQixZQUFBO0FDUEY7O0FEU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQXFCLGlCQUFBO0VBQzJELGFBQUE7RUFDQyw0QkFBQTtFQUNqRiw0RUFBQTtFQUE2RSxxREFBQTtFQUM3RSxtSEFBQTtFQUFxSCxVQUFBO0FDRnpIOztBREtFO0VBQ0UsY0VyRUk7RUZzRUoseUJBQUE7QUNISjs7QURNRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ0pKOztBRE1JO0VBQ0Usb0JBQUE7QUNKTjs7QURPSTtFQUNFLHFCQUFBO0VBQ0EsY0U1RWdCO0FEdUV0Qjs7QURPTTtFQUVFLGNFeEZJO0FEa0ZaOztBRFlBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURXRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVEo7O0FEV0k7RUFDRSxjRTNHRztBRGtHVDs7QURZSTtFQUNFLGNFakhFO0VGa0hGLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWTjs7QURhSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNFekhFO0VGMEhGLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1hOOztBRGVFO0VBQ0UsV0FBQTtFQUNBLHFCRTVIa0I7RUY2SGxCLFlBQUE7QUNiSjs7QURnQkU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDZEo7O0FEaUJFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FDZko7O0FEaUJJO0VBQ0UsY0VwSkU7QURxSVI7O0FEaUJJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNmTjs7QURnQk07RUFHRSwrQ0FBQTtBQ2RSOztBRGlCSTs7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7QUNmTjs7QURrQkk7RUFDRSxjRXRLRTtBRHNKUjs7QURrQkk7RUFDRSxjRWxLZ0I7QURrSnRCOztBRHFCQTtFQUNFO0lBQ0Usc0JBQUE7RUNsQkY7RURvQkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNsQko7RURvQkU7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VDbEJKO0VEb0JJO0lBQ0UsaUJBQUE7RUNsQk47RURzQkU7SUFDRSxXQUFBO0VDcEJKO0VEc0JJO0lBQ0UsMEJBQUE7SUFDQSw4QkFBQTtFQ3BCTjtFRHVCTTtJQUNFLGNBQUE7RUNyQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VhcmNoLWJhcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlucHV0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgNCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA0KTtcbiAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG5cbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcbiAgICB9XG5cbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xuICAgIH1cblxuICAgICY6Zm9jdXN7XG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDFlbSk7XG4gICAgbGVmdDogMWVtO1xuICAgIHdpZHRoOiAyZW07XG4gIH1cbn1cblxuLm1haW4tY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5nZW5yZXMtbGlzdHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1kYXJrO1xuICBjb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG4gIHBhZGRpbmc6IDFlbTtcblxuICBocntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogIzFmMzA1NjsgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgICMxZjMwNTYgMCUsICMyODQxNmQgNTAlLCAjMWYzMDU2IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICAjMWYzMDU2IDAlLCMyODQxNmQgNTAlLCMxZjMwNTYgMTAwJSk7IC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAgIzFmMzA1NiAwJSwjMjg0MTZkIDUwJSwjMWYzMDU2IDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFmMzA1NicsIGVuZENvbG9yc3RyPScjMWYzMDU2JyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSAqL1xuICB9XG5cbiAgLnRpdGxle1xuICAgIGNvbG9yOiAkcHJpbWFyeS10aXRsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLmdlbnJlLWxpc3QtaXRlbXN7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICBsaXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICAgIH1cblxuICAgIGF7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmFjdGl2ZXtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktbGluaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1vdmllcy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAubW92aWVzLWxpc3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMWVtO1xuXG4gICAgLmNvdW50e1xuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGl0bGU7XG4gICAgfVxuXG4gICAgLnNvcnR7XG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cblxuICAgIHNlbGVjdHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDE1KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10aXRsZTtcbiAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICB3aWR0aDogOWVtO1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgfVxuICB9XG5cbiAgaHJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuICAubW92aWVzLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG5cbiAgLm1vdmlle1xuICAgIG1hcmdpbi1ib3R0b206IDEuOGVtO1xuICAgIGZsZXgtYmFzaXM6IDIwJTtcblxuICAgIGF7XG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XG4gICAgfVxuICAgIGZpZ3VyZXtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBpbWd7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgfVxuICAgIH1cbiAgICAudGl0bGUsXG4gICAgLnJhdGV7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDAuM2VtO1xuICAgIH1cblxuICAgIC50aXRsZXtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10aXRsZTtcbiAgICB9XG4gICAgLnJhdGV7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4ZW0pIHtcbiAgLm1haW4tY29udGFpbmVye1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuZ2VucmVzLWxpc3R7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgIH1cbiAgICAuZ2VucmUtbGlzdC1pdGVtc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICBsaXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vdmllcy1jb250YWluZXJ7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLm1vdmlle1xuICAgICAgICBmbGV4LWJhc2lzOiA1MCUhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICBmaWd1cmV7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICBtYXgtd2lkdGg6IDhlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaC1iYXIgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzIzNDQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMzIzNDQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiA0ZW07XG59XG4uc2VhcmNoLWJhciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMjMzZjdjO1xufVxuLnNlYXJjaC1iYXIgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMyMzNmN2M7XG59XG4uc2VhcmNoLWJhciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIzM2Y3Yztcbn1cbi5zZWFyY2gtYmFyIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjMzZjdjO1xufVxuLnNlYXJjaC1iYXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMWVtKTtcbiAgbGVmdDogMWVtO1xuICB3aWR0aDogMmVtO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5nZW5yZXMtbGlzdCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMWIzNDtcbiAgY29sb3I6ICMyMzNmN2M7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5nZW5yZXMtbGlzdCBociB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICMxZjMwNTY7XG4gIC8qIE9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMWYzMDU2IDAlLCAjMjg0MTZkIDUwJSwgIzFmMzA1NiAxMDAlKTtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzFmMzA1NiAwJSwgIzI4NDE2ZCA1MCUsICMxZjMwNTYgMTAwJSk7XG4gIC8qIENocm9tZTEwLTI1LFNhZmFyaTUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFmMzA1NiAwJSwgIzI4NDE2ZCA1MCUsICMxZjMwNTYgMTAwJSk7XG4gIC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiMxZjMwNTZcIiwgZW5kQ29sb3JzdHI9XCIjMWYzMDU2XCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgLyogSUU2LTkgKi9cbn1cbi5nZW5yZXMtbGlzdCAudGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5nZW5yZXMtbGlzdCAuZ2VucmUtbGlzdC1pdGVtcyB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5nZW5yZXMtbGlzdCAuZ2VucmUtbGlzdC1pdGVtcyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xufVxuLmdlbnJlcy1saXN0IC5nZW5yZS1saXN0LWl0ZW1zIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjMzZjdjO1xufVxuLmdlbnJlcy1saXN0IC5nZW5yZS1saXN0LWl0ZW1zIGE6aG92ZXIsIC5nZW5yZXMtbGlzdCAuZ2VucmUtbGlzdC1pdGVtcyBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDBCNUU5O1xufVxuXG4ubW92aWVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZXMtbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZXMtbGlzdC1oZWFkZXIgLmNvdW50IHtcbiAgY29sb3I6ICNGRkIxMUE7XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWVzLWxpc3QtaGVhZGVyIC5zb3J0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZXMtbGlzdC1oZWFkZXIgc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDk5MDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgd2lkdGg6IDllbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIGhyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogIzIzM2Y3YztcbiAgb3BhY2l0eTogMC42O1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuOGVtO1xuICBmbGV4LWJhc2lzOiAyMCU7XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWUgYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllIGZpZ3VyZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSBmaWd1cmUgaW1nIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWUgLnRpdGxlLFxuLm1vdmllcy1jb250YWluZXIgLm1vdmllIC5yYXRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDAuM2VtO1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllIC50aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllIC5yYXRlIHtcbiAgY29sb3I6ICMyMzNmN2M7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhlbSkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIC5nZW5yZXMtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAuOGVtO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciAuZ2VucmUtbGlzdC1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubWFpbi1jb250YWluZXIgLmdlbnJlLWxpc3QtaXRlbXMgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciAubW92aWVzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIC5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSB7XG4gICAgZmxleC1iYXNpczogNTAlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciAubW92aWVzLWNvbnRhaW5lciBmaWd1cmUgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDhlbTtcbiAgfVxufSIsIiRwaW5rOiAjRkYwNTcxO1xuJGdyZXk6ICNmM2YzZjM7XG4kYmx1ZTogIzE4MkI1NDtcbiRsaWdodEJsdWU6ICMwMEI1RTk7XG4kbGlnaHQ6ICNmZmZmZmY7XG4kZGFyazogIzAwMDAwMDtcbiR5ZWxsb3c6ICNGRkIxMUE7XG5cblxuJHByaW1hcnktY29sb3I6ICRibHVlO1xuJHByaW1hcnktY29sb3ItZGFyazogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4KTtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcblxuJHByaW1hcnktbGluazogJGJsdWU7XG4kc2Vjb25kYXJ5LWxpbms6ICRsaWdodEJsdWU7XG5cbiRwcmltYXJ5LXRpdGxlOiAkbGlnaHQ7XG4kc2Vjb25kYXJ5LXRpdGxlOiAkeWVsbG93O1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_genre_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/genre.model */ "./src/app/movies/models/genre.model.ts");
/* harmony import */ var _services_movies_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/movies-repository.service */ "./src/app/movies/services/movies-repository.service.ts");
/* harmony import */ var _services_filter_movies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/filter-movies.service */ "./src/app/movies/services/filter-movies.service.ts");
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");









let MoviesComponent = class MoviesComponent {
    constructor(moviesRepositoryService, filterMoviesService, router, location) {
        this.moviesRepositoryService = moviesRepositoryService;
        this.filterMoviesService = filterMoviesService;
        this.router = router;
        this.location = location;
        this.movies = null;
        this.visibleMovies = null;
        this.searchText = '';
        this.sortBy = 'id';
        this.genres = _models_genre_model__WEBPACK_IMPORTED_MODULE_5__["Genre"];
        this.selectedGenre = 'all';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((event) => {
            this.selectedGenre = this.getParameterByName('filter', event.url) || 'all';
        });
    }
    ngOnInit() {
        this.moviesRepositoryService.getMovies()
            .subscribe(movies => {
            this.movies = movies;
            this.applyFilter(this.selectedGenre);
        });
    }
    changeFilter(event) {
        event.preventDefault();
        const targetGenre = event.target.innerText.toLowerCase();
        this.location.go(`?filter=${targetGenre}`);
        this.applyFilter(targetGenre);
    }
    applyFilter(filterBy) {
        this.selectedGenre = filterBy;
        this.visibleMovies = this.filterMoviesService.filterMovies(filterBy.toLowerCase(), this.movies);
    }
    getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
};
MoviesComponent.ctorParameters = () => [
    { type: _services_movies_repository_service__WEBPACK_IMPORTED_MODULE_6__["MoviesRepositoryService"] },
    { type: _services_filter_movies_service__WEBPACK_IMPORTED_MODULE_7__["FilterMoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movies',
        template: __webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html"),
        animations: [
            _shared_animations__WEBPACK_IMPORTED_MODULE_8__["FadeIn"]
        ],
        styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_repository_service__WEBPACK_IMPORTED_MODULE_6__["MoviesRepositoryService"],
        _services_filter_movies_service__WEBPACK_IMPORTED_MODULE_7__["FilterMoviesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], MoviesComponent);



/***/ }),

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _services_movies_repository_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/movies-repository.service */ "./src/app/movies/services/movies-repository.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pipes_enumToArray_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/enumToArray.pipe */ "./src/app/movies/pipes/enumToArray.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/movies/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/sort.pipe */ "./src/app/movies/pipes/sort.pipe.ts");
/* harmony import */ var _services_filter_movies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/filter-movies.service */ "./src/app/movies/services/filter-movies.service.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");













let MoviesModule = class MoviesModule {
};
MoviesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: 'movies', component: _movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"] },
                { path: 'movies/:id/:title', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailComponent"] }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        declarations: [
            _movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
            _pipes_enumToArray_pipe__WEBPACK_IMPORTED_MODULE_8__["EnumToArrayPipe"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"],
            _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__["SortPipe"]
        ],
        exports: [],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _services_movies_repository_service__WEBPACK_IMPORTED_MODULE_6__["MoviesRepositoryService"],
            _services_filter_movies_service__WEBPACK_IMPORTED_MODULE_11__["FilterMoviesService"]
        ]
    })
], MoviesModule);



/***/ }),

/***/ "./src/app/movies/pipes/enumToArray.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/movies/pipes/enumToArray.pipe.ts ***!
  \**************************************************/
/*! exports provided: EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EnumToArrayPipe = class EnumToArrayPipe {
    transform(data) {
        const keys = Object.keys(data);
        return keys;
    }
};
EnumToArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'enumToArray',
        pure: true
    })
], EnumToArrayPipe);



/***/ }),

/***/ "./src/app/movies/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/movies/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (items && items.length) {
            return items.filter(item => {
                if (searchText &&
                    item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/movies/pipes/sort.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/movies/pipes/sort.pipe.ts ***!
  \*******************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortPipe = class SortPipe {
    transform(array, field) {
        array.sort((a, b) => {
            if (a[field] > b[field]) {
                return -1;
            }
            else if (a[field] < b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    }
};
SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sort'
    })
], SortPipe);



/***/ }),

/***/ "./src/app/movies/services/filter-movies.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/movies/services/filter-movies.service.ts ***!
  \**********************************************************/
/*! exports provided: FilterMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMoviesService", function() { return FilterMoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterMoviesService = class FilterMoviesService {
    constructor() { }
    filterMovies(filter, movies) {
        if (!filter || filter === 'all') {
            return movies;
        }
        return movies.filter(c => c.genres.includes(filter));
    }
};
FilterMoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FilterMoviesService);



/***/ }),

/***/ "./src/app/movies/services/in-memory-movies-data.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/movies/services/in-memory-movies-data.service.ts ***!
  \******************************************************************/
/*! exports provided: InMemoryMoviesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryMoviesDataService", function() { return InMemoryMoviesDataService; });
class InMemoryMoviesDataService {
    createDb() {
        const movies = [
            {
                id: 1,
                key: 'Sonic',
                name: 'sonic',
                description: 'Sonic, el descarado erizo azul basado en la famosa serie de videojuegos de Sega, vivirá aventuras y desventuras cuando conoce a su amigo humano y policía, Tom Wachowski (James Marsden). Sonic y Tom unirán sus fuerzas para tratar de detener los planes del malvado Dr. Robotnik (Jim Carrey), que intenta atrapar a Sonic con el fin de emplear sus inmensos poderes para dominar el mundo.',
                genres: [
                    'action',
                    'adventure',
                    'comedy'
                ],
                rate: '8.6',
                length: '1hr 48mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg',
                cover: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
                url: "https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview"
            },
            {
                id: 2,
                key: 'we-are-the-millers',
                name: 'We\'re the Millers',
                description: 'A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.',
                genres: [
                    'adventure',
                    'comedy',
                    'crime'
                ],
                rate: '7.0',
                length: '1hr 50mins',
                img: 'we-are-the-millers.jpg',
                cover: 'we-are-the-millers-cover.jpg'
            },
            {
                id: 3,
                key: 'straight-outta-compton',
                name: 'Straight Outta Compton',
                description: 'The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.',
                genres: [
                    'biography',
                    'drama',
                    'history'
                ],
                rate: '8.0',
                length: '2hr 27mins',
                img: 'straight-outta-compton.jpg',
                cover: 'straight-outta-compton-cover.jpg'
            },
            {
                id: 4,
                key: 'gridiron-gang',
                name: 'Gridiron Gang',
                description: 'Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.',
                genres: [
                    'crime',
                    'drama',
                    'sport'
                ],
                rate: '6.9',
                length: '2hr 5mins',
                img: 'gridiron-gang.jpg',
                cover: 'gridiron-gang-cover.jpg'
            },
            {
                id: 5,
                key: 'american-gangster',
                name: 'American Gangster',
                description: 'In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.',
                genres: [
                    'biography',
                    'crime',
                    'drama'
                ],
                rate: '7.8',
                length: '2hr 37mins',
                img: 'american-gangster.jpg',
                cover: 'american-gangster-cover.jpg'
            },
            {
                id: 6,
                key: 'gangster-squad',
                name: 'Gangster Squad',
                description: 'It\'s 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O\'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.',
                genres: [
                    'action',
                    'crime',
                    'drama'
                ],
                rate: '6.8',
                length: '1hr 53mins',
                img: 'gangster-squad.jpg',
                cover: 'gangster-squad-cover.jpg'
            },
            {
                id: 7,
                key: 'now-you-see-me',
                name: 'Now You See Me',
                description: 'An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.',
                genres: [
                    'crime',
                    'mystery',
                    'thriller'
                ],
                rate: '7.3',
                length: '1hr 55mins',
                img: 'now-you-see-me.jpg',
                cover: 'now-you-see-me-cover.jpg'
            },
            {
                id: 8,
                key: 'jurassic-world',
                name: 'Jurassic World',
                description: 'A new theme park is built on the original site of Jurassic Park. Everything is going well until the park\'s newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.',
                genres: [
                    'action',
                    'adventure',
                    'scifi'
                ],
                rate: '7.1',
                length: '2hr 4mins',
                img: 'jurassic-world.jpg',
                cover: 'jurassic-world-cover.jpg'
            },
            {
                id: 9,
                key: 'mission-impossible-rogue-nation',
                name: 'Mission: Impossible: Rogue Nation',
                description: 'Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.',
                genres: [
                    'action',
                    'adventure',
                    'thriller'
                ],
                rate: '7.5',
                length: '2hr 11mins',
                img: 'mission-impossible-rogue-nation.jpg',
                cover: 'mission-impossible-rogue-nation-cover.jpg'
            },
            {
                id: 10,
                key: 'the-man-from-uncle',
                name: 'The Man from U.N.C.L.E.',
                description: 'In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.',
                genres: [
                    'action',
                    'adventure',
                    'thriller'
                ],
                rate: '7.3',
                length: '1hr 56mins',
                img: 'the-man-from-uncle.jpg',
                cover: 'the-man-from-uncle-cover.jpg'
            },
            {
                id: 11,
                key: 'legend',
                name: 'Legend',
                description: 'The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.',
                genres: [
                    'biography',
                    'crime',
                    'drama'
                ],
                rate: '7.0',
                length: '2hr 28mins',
                img: 'legend.jpg',
                cover: 'legend-cover.jpg'
            },
            {
                id: 12,
                key: 'southpaw',
                name: 'Southpaw',
                description: 'Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.',
                genres: [
                    'action',
                    'drama',
                    'sport'
                ],
                rate: '7.5',
                length: '2hr 4mins',
                img: 'southpaw.jpg',
                cover: 'southpaw-cover.jpg'
            },
            {
                id: 13,
                key: 'bridge-of-spies',
                name: 'Bridge of Spies',
                description: 'During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.',
                genres: [
                    'biography',
                    'drama',
                    'thriller'
                ],
                rate: '7.7',
                length: '2hr 22mins',
                img: 'bridge-of-spies.jpg',
                cover: 'bridge-of-spies-cover.jpg'
            },
            {
                id: 14,
                key: 'ant-man',
                name: 'Ant-Man',
                description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.',
                genres: [
                    'action',
                    'adventure',
                    'scifi'
                ],
                rate: '7.4',
                length: '1hr 57mins',
                img: 'ant-man.jpg',
                cover: 'ant-man-cover.jpg'
            },
            {
                id: 15,
                key: 'fast-and-furious-7',
                name: 'Fast & Furious 7',
                description: 'Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.',
                genres: [
                    'action',
                    'crime',
                    'thriller'
                ],
                rate: '7.3',
                length: '2hr 17mins',
                img: 'fast-and-furious-7.jpg',
                cover: 'fast-and-furious-7-cover.jpg'
            },
            {
                id: 16,
                key: 'tracers',
                name: 'Tracers',
                description: 'Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.',
                genres: [
                    'action',
                    'crime',
                    'drama'
                ],
                rate: '5.6',
                length: '1hr 34mins',
                img: 'tracers.jpg',
                cover: 'tracers-cover.jpg'
            },
            {
                id: 17,
                key: 'running-scared',
                name: 'Running Scared',
                description: 'A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.',
                genres: [
                    'action',
                    'crime',
                    'drama'
                ],
                rate: '7.4',
                length: '2hr 2mins',
                img: 'running-scared.jpg',
                cover: 'the-hangover-cover.jpg'
            },
            {
                id: 18,
                key: 'the-hangover',
                name: 'The Hangover',
                description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
                genres: [
                    'comedy'
                ],
                rate: '7.8',
                length: '1hr 40mins',
                img: 'the-hangover.jpg',
                cover: 'the-hangover-cover.jpg'
            },
            {
                id: 19,
                key: 'project-x',
                name: 'Project X',
                description: '3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.',
                genres: [
                    'comedy',
                    'crime'
                ],
                rate: '6.7',
                length: '1hr 28mins',
                img: 'project-x.jpg',
                cover: 'project-x-cover.jpg'
            },
            {
                id: 20,
                key: 'the-dark-knight',
                name: 'The Dark Knight',
                description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
                genres: [
                    'action',
                    'crime',
                    'drama'
                ],
                rate: '9.0',
                length: '2hr 32mins',
                img: 'the-dark-knight.jpg',
                cover: 'the-dark-knight-cover.jpg'
            },
            {
                id: 21,
                key: 'the-tournament',
                name: 'The Tournament',
                description: 'Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world\'s deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.',
                genres: [
                    'action',
                    'thriller'
                ],
                rate: '6.1',
                length: '1hr 35mins',
                img: 'the-tournament.jpg',
                cover: 'the-hangover-cover.jpg'
            },
            {
                id: 22,
                key: 'the-matrix',
                name: 'The Matrix',
                description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
                genres: [
                    'action',
                    'scifi'
                ],
                rate: '8.7',
                length: '2hr 16mins',
                img: 'the-matrix.jpg',
                cover: 'the-matrix-cover.jpg'
            },
            {
                id: 23,
                key: 'bad-boys',
                name: 'Bad Boys',
                description: 'Two hip detectives protect a murder witness while investigating a case of stolen heroin.',
                genres: [
                    'action',
                    'comedy',
                    'crime'
                ],
                rate: '6.8',
                length: '1hr 59mins',
                img: 'bad-boys.jpg',
                cover: 'bad-boys-cover.jpg'
            },
            {
                id: 24,
                key: 'spectre',
                name: 'Spectre',
                description: 'A cryptic message from Bond\'s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.',
                genres: [
                    'action',
                    'adventure',
                    'thriller'
                ],
                rate: '6.9',
                length: '2hr 28mins',
                img: 'spectre.jpg',
                cover: 'spectre-cover.jpg'
            },
        ];
        return { movies };
    }
}


/***/ }),

/***/ "./src/app/movies/services/movies-repository.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/movies/services/movies-repository.service.ts ***!
  \**************************************************************/
/*! exports provided: MoviesRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRepositoryService", function() { return MoviesRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MoviesRepositoryService = class MoviesRepositoryService {
    constructor(http) {
        this.http = http;
        this.moviesEndpoint = 'api/movies';
    }
    getMovies() {
        return this.http.get(this.moviesEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched movies list`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMovies', [])));
    }
    getMovieById(id) {
        const url = `${this.moviesEndpoint}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched movie with id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getMovie id=${id}`)));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
};
MoviesRepositoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MoviesRepositoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], MoviesRepositoryService);



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");

const appRoutes = [
    { path: '', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_0__["MoviesComponent"], },
    { path: 'movies', loadChildren: './movies/movies.module#MoviesModule' }
];


/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: FadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn", function() { return FadeIn; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

// the fade-in/fade-out animation.
const FadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('simpleFadeAnimation', [
    // the "in" style determines the "resting" state of the element when it is visible.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    // fade in when created. this could also be written as transition('void => *')
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600)
    ]),
    // fade out when destroyed. this could also be written as transition('void => *')
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
]);


/***/ }),

/***/ "./src/app/shared/loading-spinner.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading-spinner.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-circle {\n  margin: 50px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle .sk-child:before {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #FF0571;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcYXBwXFxzaGFyZWRcXGxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL0M6XFxVc2Vyc1xcSFBcXERlc2t0b3BcXGlvbmljYXBwXFxXRUJcXEFtb3ZpL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkVyQks7RUZzQkwsbUJBQUE7RUFDQSxzRUFBQTtFQUNRLDhEQUFBO0FDQ1Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUVRLHdCQUFBO0FDRVY7O0FEREE7RUFDRSxnQ0FBQTtFQUVRLHdCQUFBO0FDSVY7O0FESEE7RUFDRSxnQ0FBQTtFQUVRLHdCQUFBO0FDTVY7O0FETEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDUVY7O0FEUEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDVVY7O0FEVEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDWVY7O0FEWEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDY1Y7O0FEYkE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDZ0JWOztBRGZBO0VBQ0UsaUNBQUE7RUFFUSx5QkFBQTtBQ2tCVjs7QURqQkE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDb0JWOztBRG5CQTtFQUNFLGlDQUFBO0VBRVEseUJBQUE7QUNzQlY7O0FEckJBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQ3dCVjs7QUR2QkE7RUFDRSw0QkFBQTtFQUNRLG9CQUFBO0FDMEJWOztBRHpCQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUM0QlY7O0FEM0JBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQzhCVjs7QUQ3QkE7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FDZ0NWOztBRC9CQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUNrQ1Y7O0FEakNBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQ29DVjs7QURuQ0E7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FDc0NWOztBRHJDQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUN3Q1Y7O0FEdkNBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQzBDVjs7QUR6Q0E7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FDNENWOztBRDFDQTtFQUNFO0lBQ0UsMkJBQUE7SUFDUSxtQkFBQTtFQzZDVjtFRDVDRTtJQUNBLDJCQUFBO0lBQ1EsbUJBQUE7RUM4Q1Y7QUFDRjs7QUQzQ0E7RUFDRTtJQUNFLDJCQUFBO0lBQ1EsbUJBQUE7RUM2Q1Y7RUQ1Q0U7SUFDQSwyQkFBQTtJQUNRLG1CQUFBO0VDOENWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuLnNrLWNpcmNsZSB7XG4gIG1hcmdpbjogNTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNrLWNpcmNsZSAuc2stY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGU0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGU3IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUzOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTQ6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTU6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTY6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTc6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTg6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTk6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTEwOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfSA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH0gNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCIuc2stY2lyY2xlIHtcbiAgbWFyZ2luOiA1MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjA1NzE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU1IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU4IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlOSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUzOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTY6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTk6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSIsIiRwaW5rOiAjRkYwNTcxO1xuJGdyZXk6ICNmM2YzZjM7XG4kYmx1ZTogIzE4MkI1NDtcbiRsaWdodEJsdWU6ICMwMEI1RTk7XG4kbGlnaHQ6ICNmZmZmZmY7XG4kZGFyazogIzAwMDAwMDtcbiR5ZWxsb3c6ICNGRkIxMUE7XG5cblxuJHByaW1hcnktY29sb3I6ICRibHVlO1xuJHByaW1hcnktY29sb3ItZGFyazogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4KTtcbiRwcmltYXJ5LWNvbG9yLWxpZ2h0OiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcblxuJHByaW1hcnktbGluazogJGJsdWU7XG4kc2Vjb25kYXJ5LWxpbms6ICRsaWdodEJsdWU7XG5cbiRwcmltYXJ5LXRpdGxlOiAkbGlnaHQ7XG4kc2Vjb25kYXJ5LXRpdGxlOiAkeWVsbG93O1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/loading-spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading-spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingSpinnerComponent = class LoadingSpinnerComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], LoadingSpinnerComponent.prototype, "loading", void 0);
LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-spinner',
        template: __webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/loading-spinner.component.html"),
        styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/shared/loading-spinner.component.scss")]
    })
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _movies_services_in_memory_movies_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movies/services/in-memory-movies-data.service */ "./src/app/movies/services/in-memory-movies-data.service.ts");
/* harmony import */ var _loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading-spinner.component */ "./src/app/shared/loading-spinner.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_movies_services_in_memory_movies_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryMoviesDataService"]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ],
        declarations: [
            _loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ],
        providers: []
    })
], SharedModule);



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\ionicapp\WEB\Amovi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map