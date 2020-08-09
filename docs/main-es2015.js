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

module.exports = "<div class=\"app\">\r\n  <app-sidebar></app-sidebar>\r\n  <div class=\"main\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/sidebar.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/sidebar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <a href=\"\">ML</a>\r\n  <nav>\r\n    <a href=\"#\">\r\n      <img src=\"assets/icons/eye.svg\" alt=\"sidebar nav link icon\">\r\n    </a>\r\n    <a href=\"#\" class=\"active\">\r\n      <img src=\"assets/icons/monitor.svg\" alt=\"sidebar nav link icon\">\r\n    </a>\r\n    <a href=\"#\">\r\n      <img src=\"assets/icons/folder.svg\" alt=\"sidebar nav link icon\">\r\n    </a>\r\n    <a href=\"#\">\r\n      <img src=\"assets/icons/heart.svg\" alt=\"sidebar nav link icon\">\r\n    </a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-detail/movie-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-spinner [loading]=\"!movie\"></app-loading-spinner>\r\n\r\n<div class=\"movie-info-container\" *ngIf=\"movie\" [@simpleFadeAnimation]=\"'in'\">\r\n  <div class=\"movie-banner-cover\">\r\n    <img src=\"{{movie.cover}}\" alt=\"movie cover\">\r\n  </div>\r\n  <div class=\"movie-detail-container\">\r\n    <div class=\"movie-detail\">\r\n      <h2>{{movie.name}}</h2>\r\n      <div class=\"short-info\">\r\n        <div class=\"rate\"><span>Puntuacion: <strong>{{movie.rate}}</strong></span></div>\r\n        <div class=\"duration\"><span>Duracion: <strong>{{movie.length}}</strong></span></div>\r\n        <div class=\"genres\">\r\n          <span>Generos:</span>\r\n          <a *ngFor=\"let genre of movie.genres\" [routerLink]=\"['/movies/']\" [queryParams]=\"{filter:genre}\">\r\n            {{genre}}\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <p class=\"desc\">\r\n        {{movie.description}}\r\n      </p>\r\n      <div class=\"embed-responsive embed-responsive-16by9\">\r\n        <iframe class=\"embed-responsive-item\" allowfullscreen [src]=\"urlSafe\"></iframe>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movies/movies.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movies/movies.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-bar\">\r\n  <img src=\"assets/icons/search.svg\" alt=\"search icon\">\r\n  <input [(ngModel)]=\"searchText\" name=\"searchText\" type=\"search\" placeholder=\"Buscar\" aria-label=\"Search\">\r\n</div>\r\n<div class=\"main-container\">\r\n<div class=\"genres-list\">\r\n  <span class=\"title\">Generos</span>\r\n  <hr>\r\n  <ul class=\"genre-list-items\">\r\n    <li *ngFor=\"let genre of genres | enumToArray\">\r\n      <a\r\n        [ngClass]=\"{'active': genre.toLowerCase() == selectedGenre}\"\r\n        [routerLink]=\"['/movies/']\"\r\n        [queryParams]=\"{filter:genre.toLowerCase()}\"\r\n        (click)=\"changeFilter($event)\">\r\n        {{genre}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<app-loading-spinner [loading]=\"!visibleMovies\"></app-loading-spinner>\r\n<div *ngIf=\"visibleMovies\" class=\"movies-container\" [@simpleFadeAnimation]=\"'in'\">\r\n  <div class=\"movies-list-header\">\r\n    <span class=\"count\">\r\n      {{visibleMovies.length}} Peliculas\r\n    </span>\r\n    <div class=\"sort\">\r\n      ORDENADO POR:\r\n      <select [(ngModel)]=\"sortBy\">\r\n        <option value=\"rate\">Puntuacion</option>\r\n        <option value=\"id\">Recientes</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"movies-list\">\r\n    <div *ngFor=\"let movie of visibleMovies | filter: searchText | sort: sortBy\" class=\"movie\">\r\n      <a [routerLink]=\"['/movies/' + movie.id + '/' + movie.key]\">\r\n        <figure>\r\n          <img src=\"{{movie.img}}\" alt=\"movie poster\">\r\n        </figure>\r\n        <span class=\"title\">{{movie.name}}</span>\r\n        <span class=\"rate\">{{movie.rate}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loading-spinner.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loading-spinner.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-circle\" *ngIf=\"loading\">\r\n  <div class=\"sk-circle1 sk-child\"></div>\r\n  <div class=\"sk-circle2 sk-child\"></div>\r\n  <div class=\"sk-circle3 sk-child\"></div>\r\n  <div class=\"sk-circle4 sk-child\"></div>\r\n  <div class=\"sk-circle5 sk-child\"></div>\r\n  <div class=\"sk-circle6 sk-child\"></div>\r\n  <div class=\"sk-circle7 sk-child\"></div>\r\n  <div class=\"sk-circle8 sk-child\"></div>\r\n  <div class=\"sk-circle9 sk-child\"></div>\r\n  <div class=\"sk-circle10 sk-child\"></div>\r\n  <div class=\"sk-circle11 sk-child\"></div>\r\n  <div class=\"sk-circle12 sk-child\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n.app .main {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzdGV2ZVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXENBUlBFVEFTXFxBTW92aWUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIC5tYWlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIiwiLmFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hcHAgLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

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

module.exports = ".sidebar {\n  width: 100px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1em 0;\n  border-right: 1px solid;\n}\n.sidebar a {\n  color: #ffffff;\n}\n.sidebar nav {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 2em;\n}\n.sidebar nav a {\n  padding: 0.5em;\n  margin-bottom: 0.5em;\n}\n.sidebar nav a.active {\n  background-color: #FF0571;\n}\n.sidebar nav img {\n  max-width: 1.5em;\n}\n@media only screen and (max-width: 48em) {\n  .sidebar {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9DOlxcVXNlcnNcXHN0ZXZlXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcQ0FSUEVUQVNcXEFNb3ZpZS9zcmNcXGFwcFxcY29yZVxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDREY7QURHRTtFQUNFLGNFVEk7QURRUjtBRElFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUk7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUNGTjtBRElNO0VBQ0UseUJFNUJEO0FEMEJQO0FETUk7RUFDRSxnQkFBQTtBQ0pOO0FEUUU7RUFuQ0Y7SUFvQ0ksV0FBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnNpZGViYXJ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbSAwO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG5cclxuICBhe1xyXG4gICAgY29sb3I6ICRsaWdodDtcclxuICB9XHJcblxyXG4gIG5hdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcblxyXG4gICAgYXtcclxuICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG5cclxuICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgICAgbWF4LXdpZHRoOiAxLjVlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDQ4ZW0pIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iLCIuc2lkZWJhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG59XG4uc2lkZWJhciBhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2lkZWJhciBuYXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG4uc2lkZWJhciBuYXYgYSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5zaWRlYmFyIG5hdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjA1NzE7XG59XG4uc2lkZWJhciBuYXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxLjVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhlbSkge1xuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbn0iLCIkcGluazogI0ZGMDU3MTtcclxuJGdyZXk6ICNmM2YzZjM7XHJcbiRibHVlOiAjMTgyQjU0O1xyXG4kbGlnaHRCbHVlOiAjMDBCNUU5O1xyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRkYXJrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjRkZCMTFBO1xyXG5cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAkYmx1ZTtcclxuJHByaW1hcnktY29sb3ItZGFyazogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4KTtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwKTtcclxuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XHJcblxyXG4kcHJpbWFyeS1saW5rOiAkYmx1ZTtcclxuJHNlY29uZGFyeS1saW5rOiAkbGlnaHRCbHVlO1xyXG5cclxuJHByaW1hcnktdGl0bGU6ICRsaWdodDtcclxuJHNlY29uZGFyeS10aXRsZTogJHllbGxvdztcclxuXHJcbiJdfQ== */"

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

module.exports = ".movie-info-container {\n  width: 100%;\n}\n\n.movie-banner-cover {\n  position: relative;\n  max-height: 25em;\n  overflow: hidden;\n}\n\n.movie-banner-cover img {\n  width: 100%;\n}\n\n.movie-banner-cover:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(4, 6, 13, 0) 15%, #182b54 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00000000\", endColorstr=\"#182b54\",GradientType=0 );\n  /* IE6-9 */\n}\n\n.movie-detail-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 0 2em;\n  -webkit-transform: translateY(-4em);\n          transform: translateY(-4em);\n}\n\n.movie-detail {\n  padding: 0 1em;\n  color: #a6a6a6;\n}\n\n.movie-detail h2 {\n  color: #ffffff;\n  margin-top: 0;\n}\n\n.movie-detail .short-info {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  text-transform: capitalize;\n}\n\n.movie-detail .short-info div {\n  margin-right: 1em;\n}\n\n.movie-detail .short-info strong {\n  color: #ffffff;\n}\n\n.movie-detail .genres a {\n  margin-left: 0.5em;\n  background-color: #FF0571;\n  color: #ffffff;\n  padding: 0.4em;\n  border-radius: 5px;\n  text-decoration: none;\n}\n\n.movie-detail .desc {\n  max-width: 70%;\n  line-height: 1.8;\n}\n\n@media only screen and (max-width: 48em) {\n  .movie-detail-container {\n    flex-direction: column-reverse;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    padding: 0 0.5em;\n  }\n  .movie-detail-container .movie-cover {\n    padding: 0 1em;\n  }\n  .movie-detail-container .short-info {\n    flex-direction: column;\n  }\n  .movie-detail-container .short-info div {\n    margin-right: 0;\n    margin-bottom: 1em;\n  }\n  .movie-detail-container .genres span {\n    display: block;\n    margin-bottom: 1em;\n  }\n  .movie-detail-container .desc {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxcXG1vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWUtZGV0YWlsL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FER0U7RUFDRSxXQUFBO0FDREo7O0FESUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ3FHLGFBQUE7RUFDQyw0QkFBQTtFQUN0RyxnR0FBQTtFQUFvRyxxREFBQTtFQUNwRyxxSEFBQTtFQUF1SCxVQUFBO0FDRTNIOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsY0V2Q0k7RUZ3Q0osYUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVJO0VBQ0UsaUJBQUE7QUNBTjs7QURHSTtFQUNFLGNFdERFO0FEcURSOztBRE1JO0VBQ0Usa0JBQUE7RUFDQSx5QkVqRUM7RUZrRUQsY0U5REU7RUYrREYsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNKTjs7QURRRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFVBO0VBQ0U7SUFDRSw4QkFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7SUFDQSxnQkFBQTtFQ1BGO0VEU0U7SUFDRSxjQUFBO0VDUEo7RURTRTtJQUNFLHNCQUFBO0VDUEo7RURTSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQ1BOO0VEV0k7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUNUTjtFRFlFO0lBQ0UsZUFBQTtFQ1ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5tb3ZpZS1pbmZvLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vdmllLWJhbm5lci1jb3ZlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LWhlaWdodDogMjVlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSg0LDYsMTMsMCkgMTUlLCByZ2JhKDI0LDQzLDg0LDEpIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSxyZ2JhKDQsNiwxMywwKSAxNSUscmdiYSgyNCw0Myw4NCwxKSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoNCw2LDEzLDApIDE1JSxyZ2JhKDI0LDQzLDg0LDEpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwMDAnLCBlbmRDb2xvcnN0cj0nIzE4MmI1NCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICB9XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWwtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDAgMmVtO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNGVtKTtcclxufVxyXG5cclxuLm1vdmllLWRldGFpbHtcclxuICBwYWRkaW5nOiAwIDFlbTtcclxuICBjb2xvcjogZGFya2VuKCRsaWdodCwgMzUpO1xyXG5cclxuICBoMntcclxuICAgIGNvbG9yOiAkcHJpbWFyeS10aXRsZTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2hvcnQtaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3Ryb25ne1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ2VucmVze1xyXG4gICAgYXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XHJcbiAgICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNje1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDhlbSkge1xyXG4gIC5tb3ZpZS1kZXRhaWwtY29udGFpbmVye1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgcGFkZGluZzogMCAwLjVlbTtcclxuXHJcbiAgICAubW92aWUtY292ZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgfVxyXG4gICAgLnNob3J0LWluZm97XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5nZW5yZXN7XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzY3tcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubW92aWUtaW5mby1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vdmllLWJhbm5lci1jb3ZlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogMjVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3ZpZS1iYW5uZXItY292ZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubW92aWUtYmFubmVyLWNvdmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSg0LCA2LCAxMywgMCkgMTUlLCAjMTgyYjU0IDEwMCUpO1xuICAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoNCwgNiwgMTMsIDApIDE1JSwgIzE4MmI1NCAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSg0LCA2LCAxMywgMCkgMTUlLCAjMTgyYjU0IDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjMDAwMDAwMDBcIiwgZW5kQ29sb3JzdHI9XCIjMTgyYjU0XCIsR3JhZGllbnRUeXBlPTAgKTtcbiAgLyogSUU2LTkgKi9cbn1cblxuLm1vdmllLWRldGFpbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNGVtKTtcbn1cblxuLm1vdmllLWRldGFpbCB7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogI2E2YTZhNjtcbn1cbi5tb3ZpZS1kZXRhaWwgaDIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5tb3ZpZS1kZXRhaWwgLnNob3J0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1vdmllLWRldGFpbCAuc2hvcnQtaW5mbyBkaXYge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi5tb3ZpZS1kZXRhaWwgLnNob3J0LWluZm8gc3Ryb25nIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubW92aWUtZGV0YWlsIC5nZW5yZXMgYSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDU3MTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDAuNGVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tb3ZpZS1kZXRhaWwgLmRlc2Mge1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XG4gIC5tb3ZpZS1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHBhZGRpbmc6IDAgMC41ZW07XG4gIH1cbiAgLm1vdmllLWRldGFpbC1jb250YWluZXIgLm1vdmllLWNvdmVyIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgfVxuICAubW92aWUtZGV0YWlsLWNvbnRhaW5lciAuc2hvcnQtaW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW92aWUtZGV0YWlsLWNvbnRhaW5lciAuc2hvcnQtaW5mbyBkaXYge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbiAgLm1vdmllLWRldGFpbC1jb250YWluZXIgLmdlbnJlcyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbiAgLm1vdmllLWRldGFpbC1jb250YWluZXIgLmRlc2Mge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufSIsIiRwaW5rOiAjRkYwNTcxO1xyXG4kZ3JleTogI2YzZjNmMztcclxuJGJsdWU6ICMxODJCNTQ7XHJcbiRsaWdodEJsdWU6ICMwMEI1RTk7XHJcbiRsaWdodDogI2ZmZmZmZjtcclxuJGRhcms6ICMwMDAwMDA7XHJcbiR5ZWxsb3c6ICNGRkIxMUE7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICRibHVlO1xyXG4kcHJpbWFyeS1jb2xvci1kYXJrOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDgpO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTApO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcclxuXHJcbiRwcmltYXJ5LWxpbms6ICRibHVlO1xyXG4kc2Vjb25kYXJ5LWxpbms6ICRsaWdodEJsdWU7XHJcblxyXG4kcHJpbWFyeS10aXRsZTogJGxpZ2h0O1xyXG4kc2Vjb25kYXJ5LXRpdGxlOiAkeWVsbG93O1xyXG5cclxuIl19 */"

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
    Genre["Todas"] = "todas";
    Genre["Accion"] = "accion";
    Genre["Aventura"] = "aventura";
    Genre["Biografia"] = "biografia";
    Genre["Comedia"] = "comedia";
    Genre["Crimen"] = "crimen";
    Genre["Drama"] = "drama";
    Genre["Historia"] = "historia";
    Genre["Mysterio"] = "mysterio";
    Genre["Scifi"] = "scifi";
    Genre["Deporte"] = "deporte";
    Genre["Terror"] = "terror";
})(Genre || (Genre = {}));


/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.search-bar {\n  position: relative;\n}\n\n.search-bar input {\n  display: block;\n  width: 100%;\n  background-color: #132344;\n  border: 1px solid #132344;\n  color: #ffffff;\n  padding: 1.5em;\n  border: none;\n  outline: none;\n  font-size: 1em;\n  padding-left: 4em;\n}\n\n.search-bar input::-webkit-input-placeholder {\n  color: #233f7c;\n}\n\n.search-bar input::-moz-placeholder {\n  color: #233f7c;\n}\n\n.search-bar input::-ms-input-placeholder {\n  color: #233f7c;\n}\n\n.search-bar input::placeholder {\n  color: #233f7c;\n}\n\n.search-bar input:focus {\n  outline: none !important;\n  border: 1px solid #233f7c;\n}\n\n.search-bar img {\n  position: absolute;\n  top: calc(50% - 1em);\n  left: 1em;\n  width: 2em;\n}\n\n.main-container {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n\n.genres-list {\n  width: 200px;\n  height: 100vh;\n  background-color: #0f1b34;\n  color: #233f7c;\n  padding: 1em;\n}\n\n.genres-list hr {\n  border: none;\n  height: 1px;\n  background: #1f3056;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #1f3056 0%, #28416d 50%, #1f3056 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#1f3056\", endColorstr=\"#1f3056\",GradientType=1 );\n  /* IE6-9 */\n}\n\n.genres-list .title {\n  color: #ffffff;\n  text-transform: uppercase;\n}\n\n.genres-list .genre-list-items {\n  padding: 0;\n  list-style-type: none;\n}\n\n.genres-list .genre-list-items li {\n  margin-bottom: 0.8em;\n}\n\n.genres-list .genre-list-items a {\n  text-decoration: none;\n  color: #233f7c;\n}\n\n.genres-list .genre-list-items a:hover, .genres-list .genre-list-items a.active {\n  color: #00B5E9;\n}\n\n.movies-container {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: calc(100% - 200px);\n  max-height: 100vh;\n  overflow-y: scroll;\n}\n\n.movies-container .movies-list-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  padding: 1em;\n}\n\n.movies-container .movies-list-header .count {\n  color: #FFB11A;\n}\n\n.movies-container .movies-list-header .sort {\n  color: #ffffff;\n  padding-right: 1em;\n  font-size: 0.8em;\n}\n\n.movies-container .movies-list-header select {\n  background-color: #294990;\n  border: none;\n  color: #ffffff;\n  height: 2.5em;\n  width: 9em;\n  font-size: 1.2em;\n  margin-left: 1em;\n}\n\n.movies-container hr {\n  width: 100%;\n  border-color: #233f7c;\n  opacity: 0.6;\n}\n\n.movies-container .movies-list {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 1em;\n}\n\n.movies-container .movie {\n  margin-bottom: 1.8em;\n  flex-basis: 20%;\n}\n\n.movies-container .movie a {\n  color: #ffffff;\n}\n\n.movies-container .movie figure {\n  padding: 0;\n  margin: 0;\n}\n\n.movies-container .movie figure img {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);\n}\n\n.movies-container .movie .title,\n.movies-container .movie .rate {\n  display: block;\n  margin-top: 0.3em;\n}\n\n.movies-container .movie .title {\n  color: #ffffff;\n}\n\n.movies-container .movie .rate {\n  color: #233f7c;\n}\n\n@media only screen and (max-width: 48em) {\n  .main-container {\n    flex-direction: column;\n  }\n  .main-container .genres-list {\n    width: 100%;\n    height: auto;\n    padding: 0.8em;\n  }\n  .main-container .genre-list-items {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    margin: 0;\n  }\n  .main-container .genre-list-items li {\n    margin-right: 1em;\n  }\n  .main-container .movies-container {\n    width: 100%;\n  }\n  .main-container .movies-container .movie {\n    flex-basis: 50% !important;\n    justify-content: space-between;\n  }\n  .main-container .movies-container figure img {\n    max-width: 8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcYXBwXFxtb3ZpZXNcXG1vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW92aWVzL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjRVpJO0VGYUosY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDREo7O0FER0k7RUFDRSxjRWJnQjtBRFl0Qjs7QURRSTtFQUNFLGNFckJnQjtBRGtCdEI7O0FERUk7RUFDRSxjRXJCZ0I7QURrQnRCOztBREVJO0VBQ0UsY0VyQmdCO0FEa0J0Qjs7QURNSTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNKTjs7QURRRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJFaERtQjtFRmlEbkIsY0VoRG9CO0VGaURwQixZQUFBO0FDUEY7O0FEU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQXFCLGlCQUFBO0VBQzJELGFBQUE7RUFDQyw0QkFBQTtFQUNqRiw0RUFBQTtFQUE2RSxxREFBQTtFQUM3RSxtSEFBQTtFQUFxSCxVQUFBO0FDRnpIOztBREtFO0VBQ0UsY0VyRUk7RUZzRUoseUJBQUE7QUNISjs7QURNRTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ0pKOztBRE1JO0VBQ0Usb0JBQUE7QUNKTjs7QURPSTtFQUNFLHFCQUFBO0VBQ0EsY0U1RWdCO0FEdUV0Qjs7QURPTTtFQUVFLGNFeEZJO0FEa0ZaOztBRFlBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURXRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVEo7O0FEV0k7RUFDRSxjRTNHRztBRGtHVDs7QURZSTtFQUNFLGNFakhFO0VGa0hGLGtCQUFBO0VBQ0EsZ0JBQUE7QUNWTjs7QURhSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNFekhFO0VGMEhGLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1hOOztBRGVFO0VBQ0UsV0FBQTtFQUNBLHFCRTVIa0I7RUY2SGxCLFlBQUE7QUNiSjs7QURnQkU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDZEo7O0FEaUJFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FDZko7O0FEaUJJO0VBQ0UsY0VwSkU7QURxSVI7O0FEaUJJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNmTjs7QURnQk07RUFHRSwrQ0FBQTtBQ2RSOztBRGlCSTs7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7QUNmTjs7QURrQkk7RUFDRSxjRXRLRTtBRHNKUjs7QURrQkk7RUFDRSxjRWxLZ0I7QURrSnRCOztBRHFCQTtFQUNFO0lBQ0Usc0JBQUE7RUNsQkY7RURvQkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNsQko7RURvQkU7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VDbEJKO0VEb0JJO0lBQ0UsaUJBQUE7RUNsQk47RURzQkU7SUFDRSxXQUFBO0VDcEJKO0VEc0JJO0lBQ0UsMEJBQUE7SUFDQSw4QkFBQTtFQ3BCTjtFRHVCTTtJQUNFLGNBQUE7RUNyQlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNlYXJjaC1iYXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA0KTtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS10aXRsZTtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XHJcblxyXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3Vze1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMWVtKTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmdlbnJlcy1saXN0e1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWRhcms7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgaHJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjMwNTY7IC8qIE9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgICMxZjMwNTYgMCUsICMyODQxNmQgNTAlLCAjMWYzMDU2IDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgICMxZjMwNTYgMCUsIzI4NDE2ZCA1MCUsIzFmMzA1NiAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgICMxZjMwNTYgMCUsIzI4NDE2ZCA1MCUsIzFmMzA1NiAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFmMzA1NicsIGVuZENvbG9yc3RyPScjMWYzMDU2JyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSAqL1xyXG4gIH1cclxuXHJcbiAgLnRpdGxle1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LXRpdGxlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gIC5nZW5yZS1saXN0LWl0ZW1ze1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICBsaXtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3ItbGlnaHQ7XHJcblxyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmLmFjdGl2ZXtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1saW5rO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW92aWVzLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAubW92aWVzLWxpc3QtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuXHJcbiAgICAuY291bnR7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb3J0e1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3R7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDE1KTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XHJcbiAgICAgIGhlaWdodDogMi41ZW07XHJcbiAgICAgIHdpZHRoOiA5ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBocntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1saWdodDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gIC5tb3ZpZXMtbGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxuXHJcbiAgLm1vdmlle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS44ZW07XHJcbiAgICBmbGV4LWJhc2lzOiAyMCU7XHJcblxyXG4gICAgYXtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRpdGxlO1xyXG4gICAgfVxyXG4gICAgZmlndXJle1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZSxcclxuICAgIC5yYXRle1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogMC4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxle1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGl0bGU7XHJcbiAgICB9XHJcbiAgICAucmF0ZXtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLWxpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNDhlbSkge1xyXG4gIC5tYWluLWNvbnRhaW5lcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmdlbnJlcy1saXN0e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgIH1cclxuICAgIC5nZW5yZS1saXN0LWl0ZW1ze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICBsaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tb3ZpZXMtY29udGFpbmVye1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5tb3ZpZXtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCUhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgICBmaWd1cmV7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2gtYmFyIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMyMzQ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTMyMzQ0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMS41ZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctbGVmdDogNGVtO1xufVxuLnNlYXJjaC1iYXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIzM2Y3Yztcbn1cbi5zZWFyY2gtYmFyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMjMzZjdjO1xufVxuLnNlYXJjaC1iYXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMyMzNmN2M7XG59XG4uc2VhcmNoLWJhciBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzM2Y3Yztcbn1cbi5zZWFyY2gtYmFyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDFlbSk7XG4gIGxlZnQ6IDFlbTtcbiAgd2lkdGg6IDJlbTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZ2VucmVzLWxpc3Qge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjFiMzQ7XG4gIGNvbG9yOiAjMjMzZjdjO1xuICBwYWRkaW5nOiAxZW07XG59XG4uZ2VucmVzLWxpc3QgaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjMWYzMDU2O1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzFmMzA1NiAwJSwgIzI4NDE2ZCA1MCUsICMxZjMwNTYgMTAwJSk7XG4gIC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMxZjMwNTYgMCUsICMyODQxNmQgNTAlLCAjMWYzMDU2IDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZjMwNTYgMCUsICMyODQxNmQgNTAlLCAjMWYzMDU2IDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjMWYzMDU2XCIsIGVuZENvbG9yc3RyPVwiIzFmMzA1NlwiLEdyYWRpZW50VHlwZT0xICk7XG4gIC8qIElFNi05ICovXG59XG4uZ2VucmVzLWxpc3QgLnRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZ2VucmVzLWxpc3QgLmdlbnJlLWxpc3QtaXRlbXMge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZ2VucmVzLWxpc3QgLmdlbnJlLWxpc3QtaXRlbXMgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbn1cbi5nZW5yZXMtbGlzdCAuZ2VucmUtbGlzdC1pdGVtcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzIzM2Y3Yztcbn1cbi5nZW5yZXMtbGlzdCAuZ2VucmUtbGlzdC1pdGVtcyBhOmhvdmVyLCAuZ2VucmVzLWxpc3QgLmdlbnJlLWxpc3QtaXRlbXMgYS5hY3RpdmUge1xuICBjb2xvcjogIzAwQjVFOTtcbn1cblxuLm1vdmllcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWVzLWxpc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxZW07XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWVzLWxpc3QtaGVhZGVyIC5jb3VudCB7XG4gIGNvbG9yOiAjRkZCMTFBO1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllcy1saXN0LWhlYWRlciAuc29ydCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWVzLWxpc3QtaGVhZGVyIHNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTQ5OTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMi41ZW07XG4gIHdpZHRoOiA5ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubW92aWVzLWNvbnRhaW5lciBociB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sb3I6ICMyMzNmN2M7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZXMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxZW07XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWUge1xuICBtYXJnaW4tYm90dG9tOiAxLjhlbTtcbiAgZmxleC1iYXNpczogMjAlO1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllIGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSBmaWd1cmUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ubW92aWVzLWNvbnRhaW5lciAubW92aWUgZmlndXJlIGltZyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLm1vdmllcy1jb250YWluZXIgLm1vdmllIC50aXRsZSxcbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSAucmF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjNlbTtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSAudGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5tb3ZpZXMtY29udGFpbmVyIC5tb3ZpZSAucmF0ZSB7XG4gIGNvbG9yOiAjMjMzZjdjO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciAuZ2VucmVzLWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAwLjhlbTtcbiAgfVxuICAubWFpbi1jb250YWluZXIgLmdlbnJlLWxpc3QtaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLm1haW4tY29udGFpbmVyIC5nZW5yZS1saXN0LWl0ZW1zIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxuICAubWFpbi1jb250YWluZXIgLm1vdmllcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tYWluLWNvbnRhaW5lciAubW92aWVzLWNvbnRhaW5lciAubW92aWUge1xuICAgIGZsZXgtYmFzaXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAubWFpbi1jb250YWluZXIgLm1vdmllcy1jb250YWluZXIgZmlndXJlIGltZyB7XG4gICAgbWF4LXdpZHRoOiA4ZW07XG4gIH1cbn0iLCIkcGluazogI0ZGMDU3MTtcclxuJGdyZXk6ICNmM2YzZjM7XHJcbiRibHVlOiAjMTgyQjU0O1xyXG4kbGlnaHRCbHVlOiAjMDBCNUU5O1xyXG4kbGlnaHQ6ICNmZmZmZmY7XHJcbiRkYXJrOiAjMDAwMDAwO1xyXG4keWVsbG93OiAjRkZCMTFBO1xyXG5cclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAkYmx1ZTtcclxuJHByaW1hcnktY29sb3ItZGFyazogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCA4KTtcclxuJHByaW1hcnktY29sb3ItbGlnaHQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwKTtcclxuJHNlY29uZGFyeS1jb2xvcjogJHBpbms7XHJcblxyXG4kcHJpbWFyeS1saW5rOiAkYmx1ZTtcclxuJHNlY29uZGFyeS1saW5rOiAkbGlnaHRCbHVlO1xyXG5cclxuJHByaW1hcnktdGl0bGU6ICRsaWdodDtcclxuJHNlY29uZGFyeS10aXRsZTogJHllbGxvdztcclxuXHJcbiJdfQ== */"

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
            this.selectedGenre = this.getParameterByName('filter', event.url) || 'todas';
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
        if (!filter || filter === 'todas') {
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
                    'accion',
                    'aventura',
                    'comedia'
                ],
                rate: '8.6',
                length: '1hr 48mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg',
                cover: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
                url: "https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview"
            },
            {
                id: 2,
                key: 'QUIENES-SON-LOS-MILLERS',
                name: 'QUIENES SON LOS MILLERS',
                description: 'Un traficante de marihuana se crea una familia ficticia con una stripper y dos jóvenes como parte de su plan para pasar un gran cargamento de Estados Unidos a México.',
                genres: [
                    'aventura',
                    'comedia',
                    'crimen'
                ],
                rate: '7.0',
                length: '1hr 50mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/e6ITLpsQP9FMBF4jDyvHpWUYV64.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/e4l6Spo6gCyAx9AVuwbkxEtAfEE.jpg',
                url: 'https://drive.google.com/file/d/1kLxKsTRYKWXYKM0qojuL-eYJv_cNCPxa/preview'
            },
            {
                id: 3,
                key: 'LA-MOMIA',
                name: 'LA MOMIA',
                description: 'A pesar de estar enterrada en una tumba en lo más profundo del desierto, una antigua princesa (Sofia Boutella) cuyo destino le fue arrebatado injustamente, se despierta en la época actual, trayendo consigo una maldición que ha crecido hasta límites insospechados con el paso de miles de años.',
                genres: [
                    'action',
                    'adventure',
                    'fantasia',
                    'suspenso'
                ],
                rate: '6.9',
                length: '1hr 50mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ceOtPPIZBB0c4mCFx4p0kAq9n0L.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ynDNRynKEg6LdDWVIbgXv1ix4jg.jpg',
                url: ' https://drive.google.com/file/d/1IZLRgGwOXFNBRUkvLZ8bNV1Xr2CF3c4x/preview'
            },
            {
                id: 4,
                key: 'EL-QUINTO-ELEMENTO',
                name: 'EL QUINTO ELEMENTO',
                description: 'Cada 5.000 años se abre una puerta entre las dimensiones. En una dimensión existe el Universo y la vida. En la otra dimensión existe un elemento que no está hecho ni de tierra, ni de fuego, ni de aire, ni de agua, sino que es una anti-energía, la anti-vida: es el quinto elemento.',
                genres: [
                    'action',
                    'adventure',
                    'fantasia'
                ],
                rate: '6.9',
                length: '2hr 28mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/r2IFRKmD0nLaJOaILGKHdF31bKy.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/xfulCqUm5cT7qvyEjUmrzzMB0LJ.jpg',
                url: 'https://drive.google.com/file/d/17NBLv-n_m-jND_0EdsXHkmM1vA-sEaKd/preview'
            },
            {
                id: 5,
                key: 'HOMBRES-DE-NEGROS-3',
                name: 'HOMBRES DE NEGROS 3',
                description: 'Comienza con la fuga de un extraño y poderoso extraterrestre llamado Boris el animal. Es el último superviviente de la raza alienígena boglodita, que sobrevive mediante el ataque, toma, y ocupación de otros planetas habitados. Boris es un asesino, que fue capturado por el agente K y encarcelado en una prisión secreta en la Luna. K también pudo desplegar un sistema de defensa (denominado "Arca Net"), y evitar una invasión boglodita, logrando así su extinción. Sin embargo, Boris logra burlar la seguridad y destruir gran parte de la cárcel, para escapar y vengarse de K.',
                genres: [
                    'action',
                    'comedia',
                    'scifi'
                ],
                rate: '6.9',
                length: '2hr 28mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/uYL8UlNpu05BLF99ATURIDpnjy3.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ty0aXVf2aSbiEkrif88UWbKNVnH.jpg',
                url: 'https://drive.google.com/file/d/16s1gJyUA01dNblzE8EzWJwanY1-SI9ZI/preview'
            },
            {
                id: 6,
                key: 'RESIDENT-EVIL',
                name: 'RESIDENT EVIL',
                description: 'En un centro clandestino de investigación genética -con fines militares- de una poderosa multinacional se produce un brote vírico que contamina todo el edificio. Para contener la fuga el ordenador que controla el centro sella toda la instalación y, en un principio se cree que mueren todos los empleados, pero en realidad se han convertido en feroces zombis...',
                genres: [
                    'action',
                    'terror',
                    'scifi'
                ],
                rate: '6.9',
                length: '1hr 36mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/f8kYxuHNkFkhA7I4IKAk8sN9bdY.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/eLuE9zFExdASgZkUPSvTh6ocFtk.jpg',
                url: 'https://drive.google.com/file/d/1fNGkemtlpN3qvZOvR0N5Eu5JY9BbIpj6/preview'
            },
            {
                id: 7,
                key: 'JUMANJI-BIENVENIDO-A-LA-JUMGLA',
                name: 'JUMANJI BIENVENIDO A LA JUNGLA',
                description: 'Cuatro adolescentes son absorbidos por un videojuego, en el que se convierten en avatares de personajes arquetípicos. Allí vivirán múltiples aventuras, al tiempo que buscan cómo salir de allí para volver a su mundo.',
                genres: [
                    'action',
                    'aventura',
                    'comedia',
                    'fantasia'
                ],
                rate: '7.9',
                length: '1hr 59mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h2n0oHdJa6Y7ZvZx3WsSYPfrW1j.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/r3pJ884C2cJ6F64X5Yd5sARuNZ6.jpg',
                url: 'https://drive.google.com/file/d/1vj06hvqtk0matqdOJ1Fxg5zQXHfj0OQ6/preview'
            },
            {
                id: 8,
                key: 'JUMANJI-EL-SIGUIENTE-NIVEL',
                name: 'JUMANJI EL SIGUIENTE NIVEL',
                description: ' Los jugadores vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia. Pero, ¿dónde está el resto de la gente? Los participantes sólo tienen una opción: jugar una vez más a esta peligrosa partida para descubrir qué es realmente lo que está sucediendo.',
                genres: [
                    'action',
                    'aventura',
                    'comedia',
                    'fantasia'
                ],
                rate: '8.0',
                length: '2hr 5mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/kfimTKoXd9CMTboi1ucYXwMuWO.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/noMvJUYVB9LUJClftPbQT78TUlQ.jpg',
                url: 'https://drive.google.com/file/d/1mlr-ZU64FMhccc1jZyJlBAJ303iljzLY/preview'
            },
            {
                id: 9,
                key: 'VENGADORES-LA-ERA-DE-ULTON',
                name: 'VENGADORES LA ERA DE ULTRON',
                description: 'Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultron emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura.',
                genres: [
                    'action',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 20mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/SWfuMs4doCHcrz0InTh785SpQU.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/4zmNJNQkugbalqJLnKp0wnlp8i3.jpg',
                url: 'https://drive.google.com/file/d/1FUPf2o95L0gjRQxvocWTySdQJb7oOrOC/preview'
            },
            {
                id: 10,
                key: 'VENGADORES-INFINITY-WAR',
                name: 'VENGADORES INFINITY WAR',
                description: 'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?',
                genres: [
                    'action',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 36mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/2ZChRdEnZVT6EWGIHE0blbjpyyA.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
                url: 'https://drive.google.com/file/d/1zVyD3NaWalUUFq7Qq60q45YwOPFViS6c/preview'
            },
            {
                id: 11,
                key: 'LOS-VENGADORES-ENDGAME',
                name: 'LOS VENGADORES ENDGAME',
                description: 'Después de los eventos devastadores de Vengadores Infinity War el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga Vengadores.',
                genres: [
                    'action',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '3hr 1mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/t7ZVQKZu0zcP8nJz462zd5vLWWN.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/wMFad1v8SwyVvrKXmsIkLhSxCEC.jpg',
                url: 'https://drive.google.com/file/d/1f2EX62UBS3vb0FPsLqMyxz3XNGB4m1Gz/preview'
            },
            {
                id: 12,
                key: 'TITANES-DEL-PACIFICO',
                name: 'TITANES DEL PACIFICO',
                description: 'Cuando legiones de monstruosas criaturas, denominadas Kaiju, comienzan a salir del mar, se inicia una guerra que acabará con millones de vidas y que consumirá los recursos de la humanidad durante interminables años. Para combatir a los Kaiju gigantes diseñan un tipo especial de arma: enormes robots, llamados Jaegers, que son controlados simultáneamente por dos pilotos cuyas mentes están bloqueadas en un puente neural. Pero incluso los Jaegers proporcionan poca defensa ante los incansables Kaiju. A punto de la derrota, las fuerzas que defienden a la humanidad no tienen otra elección que recurrir a dos insólitos héroes: un ex piloto acabado (Charlie Hunnam) y un aprendiz que todavía no se ha puesto a prueba (Rinko Kikuchi). Ambos se unen para traer a un legendario pero al parecer obsoleto Jaeger del pasado. Juntos, son la última esperanza de la humanidad frente al Apocalipsis que se avecina.',
                genres: [
                    'action',
                    'fantasia',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 11mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/5dN112OTkbWTah8PJA9dzQsUE47.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ig7qUy7drkEFZNCK7gi0hMn1WMN.jpg',
                url: 'https://drive.google.com/file/d/1maWwaJhRHUQif0vYVS60Y0yjB_0Jo2We/preview'
            },
            {
                id: 13,
                key: 'TITANES-DEL-PACIFICO-2',
                name: 'TITANES DEL PACIFICO 2',
                description: 'Un futuro cercano. Después de la primera invasión que sufrió la humanidad, la lucha aun no ha terminado. El planeta vuelve a ser asediado por los Kaiju, una raza de alienígenas colosales que emergen desde un portal interdimensional, con el objetivo de destruir a la raza humana. Ante esta nueva amenaza para la cual los humanos no están preparados, los Jaegers, robots gigantes de guerra pilotados por dos personas para sobrellevar la inmensa carga neural que conlleva manipularlos, ya no están a la altura de lo que se les viene encima. Será entonces cuando los supervivientes de la primera invasión, además de nuevos personajes como el hijo de Pentecost (John Boyega), tendrán que idear la manera de sorprender al enorme enemigo, apostando por nuevas estrategias defensivas y de ataque. Con la Tierra en ruinas e intentando reconstruirse, esta nueva batalla puede ser decisiva para el futuro.',
                genres: [
                    'action',
                    'fantasia',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 0mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/cAQRgMxyuy3qhjCitR0hHJhEPAI.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/2DrFGk3B6zWCNHVdUxQzyQkXpXe.jpg',
                url: 'https://drive.google.com/file/d/109Gl0TyrIGtcdhdG2GjkOTWphkxlk8Kr/preview'
            },
            {
                id: 14,
                key: 'UNA-CUESTION-DE-TIEMPO',
                name: 'UNA CUESTION DE TIEMPO',
                description: 'La trama de la película gira en torno a un joven llamado Tim Lake. El protagonista y su familia tienen el curioso don de poder viajar a través del tiempo. Al descubrir esta cualidad, Tim empieza a beneficiarse de ello para cambiar diferentes aspectos de su vida. Se enamora de una chica, Mary, a la que conoce tras transladarse a vivir a Londres por motivos de trabajo. Su historia de amor se verá beneficiada gracias al don de Tim, sin embargo, el protagonista no tardará en darse cuenta de que su habilidad no es capaz de ampararle en algunos problemas y cuestiones familiares.',
                genres: [
                    'comedia',
                    'fantasia',
                    'drama',
                    'romance'
                ],
                rate: '8.0',
                length: '2hr 3mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/u8k9KMzZGYgg2f5i8pKj23VMNPZ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/sjMZgKUHNlRtUrBLXd9K5KgsgxR.jpg',
                url: 'https://drive.google.com/file/d/18ET89Hq8-D38HjXCHUxGJ3a3KzSM7fAV/preview'
            },
            {
                id: 15,
                key: 'DEADPOOL',
                name: 'DEADPOOL',
                description: 'Basado en el anti-héroe menos convencional de la Marvel, Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, reconvertido a mercenario, y que tras ser sometido a un cruel experimento adquiere poderes de curación rápida, adoptando Wade entonces el alter ego de Deadpool. Armado con sus nuevas habilidades y un oscuro y retorcido sentido del humor, Deadpool intentará dar caza al hombre que casi destruye su vida.',
                genres: [
                    'comedia',
                    'accion',
                    'aventura'
                ],
                rate: '8.0',
                length: '1hr 48mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/pcZT1Ouq99dY6J2iGXjMxw16x6o.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/k2VX0gFu2BEJhvduQTq2ioYp8z7.jpg',
                url: 'https://drive.google.com/file/d/1EfS-ENu3oMVP6B6qe-IAE-F1Ocrd7qD_/preview'
            },
            {
                id: 16,
                key: 'READY-PLAYER-ONE',
                name: 'READY PLAYER ONE',
                description: ' Año 2044. Wade Watts es un adolescente al que le gusta evadirse del cada vez más sombrío mundo real a través de una popular utopía virtual a escala global llamada Oasis, hasta que su excéntrico y multimillonario creador muere. Antes de morir, ofrece su fortuna como premio a una elaborada búsqueda del tesoro a través de los rincones más inhóspitos de su creación. Será el punto de partida para que Wade se enfrente a jugadores, poderosos enemigos corporativos y otros competidores despiadados dispuestos a hacer lo que sea, tanto dentro de Oasis como del mundo real, para hacerse con el premio.',
                genres: [
                    'aventura',
                    'familia',
                    'scifi'
                ],
                rate: '8.4',
                length: '2hr 20mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/2iuVrtC5IpwLtSFSgkIIIKLs0Zq.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg',
                url: 'https://drive.google.com/file/d/18L3pC4DJ3mEUeP8BXv0tnsrmKj-VXu4r/preview'
            },
            {
                id: 17,
                key: 'RESIDENT-EVIL-EL-CAPITULO-FINAL',
                name: 'RESIDENT EVIL EL CAPITULO FINAL',
                description: ' La humanidad está agonizando tras la traición sufrida por Alice a manos de Wesker. Alice deberá regresar a donde la comenzó la pesadilla -Raccoon City-, ya que allí la Corporación Umbrella está reuniendo fuerzas antes de un último ataque a los últimos supervivientes del apocalipsis. En una carrera contra el tiempo, Alice tendrá que unir fuerzas con viejos amigos y con un inesperado aliado en una batalla contra hordas de zombis y nuevos monstruos mutantes. Será la aventura más difícil de Alice para salvar a la humanidad, que está al borde de la extinción.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 47mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/o9GblhAuku22VM3zugfpnHXQ5K7.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/iDouL01ezoqD6IYwgAcjrqUUhd5.jpg',
                url: 'https://drive.google.com/file/d/1xdgxU9gpo2_A04_T-HRgM2Ac5gE_k-Hq/preview'
            },
            {
                id: 18,
                key: 'RESIDENT-EVIL-4-ULTRATUMBA',
                name: 'RESIDENT EVIL 4 ULTRATUMBA',
                description: 'En un mundo asolado por un virus infeccioso que convierte a sus víctimas en muertos vivientes, Alice continúa buscando supervivientes para ponerlos a salvo. Su batalla a muerte con la Corporación Umbrella llega a alturas insospechadas, pero Alice, inesperadamente, recibe ayuda de una vieja amiga. Nuevas pistas, con la promesa de un paraíso a salvo de muertos vivientes, los conduce hasta Los Ángeles, pero cuando llegan, la ciudad está infectada con miles de muertos vivientes. Alice y sus compañeros están a punto de caer en una trampa mortal.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 37mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vkGXvYomkL91pGNzyQAmrOcZFTM.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6ewLQo8VYkwF7fTA7wDEji9xlV8.jpg',
                url: 'https://drive.google.com/file/d/1VyZhaxiTc9H74OQxhblN5DgV4aB0GJk6/preview'
            },
            {
                id: 19,
                key: 'RESIDENT-EVIL-3-EXTINCION',
                name: 'RESIDENT EVIL 3 EXTINCION',
                description: 'Tercera entrega de la saga basada en los famosos videojuegos. En esta ocasión, nuestra heroína, Milla Jovovich, junto con los supervivientes de la catástrofe acontecida en la ciudad de Raccoon deben atravesar el desierto de Nevada con la esperanza de llegar a Alaska, antes de que los de la Corporación Umbrella les alcancen.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 35mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vs007Td09KtsN8v1vfXaWiVplyz.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/A5hvEPYTp8Hek0BY785mdhVQHMK.jpg',
                url: 'https://drive.google.com/file/d/10CS8uOrzVFp0LczyTN-F7WL6rVI0Hz2u/preview'
            },
            {
                id: 20,
                key: 'RESIDENT-EVIL-2-APOCALIPSIS',
                name: 'RESIDENT EVIL 2 APOCALIPSIS',
                description: 'Un virus mortal ha sido liberado sobre la población de Raccoon City. Alice (Milla Jovovich), una de las supervivientes del desastre bioquímico, se encuentra en el corazón de esta devastada ciudad. Sometida a experimentos que han alterado su genética, ahora posee fuerza, sentidos y destreza sobrehumana. Estas habilidades, y más, serán las que deba utilizar quien quiera sobrevivir en esta nueva aventura. Junto con otros supervivientes deberá escapar de la cada vez más peligrosa Raccoon City. Para alcanzar su meta necesitarán luchar contra las fuerzas de la Umbrella Corporation, las violentas criaturas de bioingeniería creadas en sus laboratorios, los zombies que plagan la ciudad y, finalmente, enfrentarse a la más colosal y mortal de estas creaciones: Nemesis.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 34mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h8FFSlEq9DjUP6i9M6vIPFWw8ad.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/bt8PzoTx4QvmsredlMVKGR0jnQI.jpg',
                url: 'https://drive.google.com/file/d/1pzqvA69TISBYjxk130h30QB3LhYncBub/preview'
            },
            {
                id: 21,
                key: 'RESIDENT-EVIL-VENGANZA',
                name: 'RESIDENT EVIL VENGANZA',
                description: 'El virus de la corporación Umbrella sigue haciendo estragos en La Tierra convirtiendo a la población en legiones de muertos sedientos de sangre. La última esperanza de la humanidad, Alice, despierta en el centro de operaciones de la compañía donde comienza a conocer más detalles de su pasado. Alice seguirá persiguiendo a los responsables del virus llevándola por Tokio, Nueva York, Washington y Moscú donde le será revelado algo que la hará plantearse todo lo que la ha sucedido hasta ahora. Con la ayuda de sus nuevos aliados, Alice deberá sobrevivir el tiempo suficiente para escapar de un mundo hostil... La cuenta atrás ha comenzado.',
                genres: [
                    'accion',
                    'terror',
                    'ciencia ficcion'
                ],
                rate: '8.4',
                length: '1hr 36mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/9mX1cqSYtIk9Fdlx8bd5WuMmGXc.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/irX4I9e77dW409AK1Fubm5NviBc.jpg',
                url: 'https://drive.google.com/file/d/1RCP6DK5hieUQYdYG9-v-zmxQLOK8lJ8T/preview'
            },
            {
                id: 22,
                key: 'TERMINATOR-5-GENESIS',
                name: 'TERMINATOR 5 GENESIS',
                description: 'Año 2032. La guerra del futuro se está librando y un grupo de rebeldes humanos tiene el sistema de inteligencia artificial Skynet contra las cuerdas. John Connor es el líder de la resistencia, y Kyle Reese es su fiel soldado, criado en las ruinas de una postapocalíptica California. Para salvaguardar el futuro, Connor envía a Reese a 1984 para salvar a su madre, Sarah de un Terminator programado para matarla con el fin de que no llegue a dar a luz a John. Pero lo que Reese encuentra en el otro lado no es como él esperaba.',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.4',
                length: '2hr 6mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/a8rmtdNO6WSYUYhnumecti5b32H.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/wwdqGLwzfpe6SmqVE9HGd55IMDs.jpg',
                url: 'https://drive.google.com/file/d/11vQMkflF3lEXUhZyxugsz5ayJfKkWZVU/preview'
            },
            {
                id: 23,
                key: 'TERMINATOR-4-LA-SALVACION',
                name: 'TERMINATOR 4 LA SALVACION',
                description: 'Nueva entrega de la saga de Terminator, que transcurre en un post-apocalíptico 2018, tras el día del Juicio Final. John Connor es el hombre destinado a liderar la resistencia de los humanos contra Skynet y su ejército de Terminators. Pero el futuro en el que a Connor le enseñaron a creer se ve alterado en parte por la aparición de Marcus Wright, un extraño cuyo último recuerdo es haber estado en el corredor de la muerte, y que afirma haber estado con Kyle Reese, el padre de John. Connor debe decidir si Marcus ha sido enviado desde el futuro o rescatado del pasado, todo en una carrera contrareloj mientras la Resistencia prepara su ataque final contra el corazón del centro de operaciones de Skynet.',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 55mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/864FCqlmdvQKyFPZwXicMIO8YkI.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/oEbtjCyBxuYhymYlcQOY2lwUzJ.jpg',
                url: 'https://drive.google.com/file/d/1wo-5wQ4L5bamhG-rOs-D1fAJZI-wqAz7/preview'
            },
            {
                id: 24,
                key: 'TERMINATOR-3-LA-REBELION-DE-LAS-MAQUINAS',
                name: 'TERMINATOR 3 LA REBELION DE LAS MAQUINAS',
                description: 'Ha pasado una década desde que John Connor -Nick Stahl- salvara a la humanidad de la destrucción. En la actualidad John tiene 25 años y vive en la clandestinidad: no hay ninguna prueba documental de su existencia. Así evita ser rastreado por Skynet -la sofisticada corporación de máquinas que una vez intentó acabar con su vida-. Pero, ahora, desde el futuro, ha sido enviado el T-X (Kristanna Loken), la máquina destructora cyborg más desarrollada de Skynet. Su misión es completar el trabajo que no pudo terminar su predecesor, el T-1000. El T-X es una máquina tan implacable como bello su aspecto humano. Ahora la única esperanza de sobrevivir para Connnor es Terminator.',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 49mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/l311E80UHiCB1nGv3tZVFcnbcoJ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/nZCQUC9W9XKBe7Tm3KuzwOQUt41.jpg',
                url: 'https://drive.google.com/file/d/1MrbP7YvWDJn1ofni3ULpreLRX80BnbSC/preview'
            },
            {
                id: 25,
                key: 'TERMINATOR-2-EL-JUICIO-FINAL',
                name: 'TERMINATOR 2 EL JUICIO FINAL',
                description: 'Ha pasado 11 años desde que Sarah Connor fue marcada como objetivo para ser eliminada por un cyborg del futuro. Ahora su hijo, John, el futuro líder de la resistencia, es el objetivo de un Terminator más moderno, más mortífero. Una vez más, la resistencia se las ha ingeniado para enviar un protector de vuelta al pasado para intentar salvar a John y a su madre, Sarah.',
                genres: [
                    'Accion',
                    'Suspenso',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 49mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/wmEVZzh4CGW9y0IZHCFWQIZzqfB.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/naY04cHGEdMaIbIIZpFj6Eoxno8.jpg',
                url: 'https://drive.google.com/file/d/1V9Ga9oRuVLfWuEoZC3SvqocT9Nb2sMOh/preview'
            },
            {
                id: 26,
                key: 'TERMINATOR',
                name: 'TERMINATOR ',
                description: 'Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años. Sarah tiene sólo un protector - Kyle Reese - también enviado desde el futuro. El Terminator utiliza su inteligencia excepcional y fuerza para encontrar a Sarah, pero ¿hay alguna forma de detener al cyborg aparentemente indestructible.',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 48mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qJw4hTyDcWHXDHyEdpdwNyF8OcX.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/dH6m8iWJEPIFoyQaZiuo9Ih7kpA.jpg',
                url: 'https://drive.google.com/file/d/1KM7VkAd033rwUxRl1WjZ74tYnECpCFfn/preview'
            },
            {
                id: 27,
                key: 'EL UNICO',
                name: 'EL UNICO ',
                description: 'En un mundo futuro se ha descubierto que existen vidas alternas en universos alternos, un hecho que los agentes del Departamento Multiverse defienden, excepto el investigador Yulaw. Yulaw ha atravesado 123 universos persiguiendo y destruyendo sus vidas alternas. A medida que las mata, absorbe la fuerza de esas vidas alternas, ganando habilidades sobrehumanas. La magnitud de tal fenómeno puede desequilibrar el delicado equilibrio de todos los universos, sobre todo cuando a Yulaw ya sólo le queda eliminar a la última de sus vidas alternas. Ese personaje, Gabriel Yulaw, es agente de policía honesto y buen marido, y su vida se ve alterada cuando el otro Yulaw entra en su universo. Para salvarse a sí mismo, la única alternativa que le queda es la de matar a su yo malvado del otro universo.',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.4',
                length: '1hr 27mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/dmUl55UCP6qhU4vb8lqSzApSyxy.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/2JApfvtgf2snKUtOFn8d1wm5pDU.jpg',
                url: 'https://drive.google.com/file/d/1xVGpFQy2nWOZdbbYZ7W1-m09LhuTiYxX/preview'
            },
            {
                id: 28,
                key: 'TOMORROWLAND-EL-MUNDO-DEL-MAÑANA',
                name: 'TOMORROWLAND EL MUNDO DEL MAÑANA ',
                description: 'Unidos por el mismo destino, una adolescente inteligente y optimista, llena de curiosidad científica, y un antiguo niño prodigio inventor, hastiado por las desilusiones, se embarcan en una peligrosa misión para desenterrar los secretos de un enigmático lugar localizado en algún lugar del tiempo y el espacio, conocido en la memoria colectiva como “Tomorrowland”, y así salvar a la humanidad.',
                genres: [
                    'aventura',
                    'mysterio',
                    'scifi'
                ],
                rate: '8.4',
                length: '2hr 10mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/cz05f0OEkuK1bBsS6XXo5RjoH8c.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/tfPUB8H6c22ZFcJC9hM62w0nMjT.jpg',
                url: 'https://drive.google.com/file/d/12w6QWeLyEbYJxED76Ux7o7RBJjWfvYGs/preview'
            },
            {
                id: 29,
                key: 'SPACE JAM',
                name: 'SPACE JAM',
                description: 'Bugs Bunny y su equipo desafían a los Nerdlucks (un grupo de pequeños extraterrestres) a un partido de baloncesto para decidir si los Looney Tunes permanecen en la Tierra o se trasladan a una lejana galaxia para trabajar en un parque de atracciones de Montaña Tontolandia. Los Nerdlucks cuentan con una poderosa arma secreta que los hace superiores: se han apoderado de las mejores cualidades de las estrellas de la NBA (Charles Barkley y Patrick Ewing). Pero también los Looney poseen un arma secreta: ¡Michael Jordan.',
                genres: [
                    'animacion',
                    'familia',
                    'comedia'
                ],
                rate: '8.4',
                length: '1hr 27mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/2yyw20gloVgbzR9a5B15GqPdqux.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/54lisrR60aaS9w7VjIrzX2rxCct.jpg',
                url: 'https://drive.google.com/file/d/1WWxQJdfKihR0UOD8LKXruo6ky8FRfInh/preview'
            },
            {
                id: 30,
                key: 'TIEMPOS-VIOLENTOS',
                name: 'TIEMPOS VIOLENTOS',
                description: 'Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.',
                genres: [
                    'suspenso',
                    'crimen'
                ],
                rate: '8.4',
                length: '2hr 34mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qoWK8srpkxeC1iV9JfhKskVmFIw.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/52StM7zDmcjeKxWkW55X5LtoLQi.jpg',
                url: 'https://drive.google.com/file/d/16yV6fZnYjhN_pCi85L8mE8fkwoU5JgpF/preview'
            },
            {
                id: 31,
                key: 'QUE-PASO-AYER-PARTE-III',
                name: 'QUE PASO AYER PARTE III',
                description: 'Tras la inesperada muerte de su padre, Alan (Zach Galifianakas) es llevado por sus amigos Phil (Bradley Cooper), Stu (Ed Helms) y Doug (Justin Bartha) a un centro especializado para que mejore. Esta vez no hay boda ni fiesta de despedida ¿Qué puede ir mal? Pues que cuando estos chicos salen a la carretera, y sobre todo cuando aparece Chow (Ken Jeong)... la suerte está echada. Tercera entrega de la franquicia iniciada en 2009 con Resacón en Las Vegas.',
                genres: [
                    'comedia',
                ],
                rate: '8.0',
                length: '1hr 40mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/mqgoB38AJzM6CsGTmLRQ8zoYv0K.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/9pLMes75NR9ggg6b7trNVxUEjhz.jpg',
                url: 'https://drive.google.com/file/d/1kIXpGxlP3jcmUHRYnfVZs4RngboOLIAK/preview'
            },
            {
                id: 32,
                key: 'QUE-PASO-AYER-PARTE-II',
                name: 'QUE PASO AYER PARTE II',
                description: 'Phil (Bradley Cooper), Stu (Ed Helms), Alan (Zach Galifianakis) y Doug (Justin Bartha) viajan a la exótica Tailandia para la boda de Stu. Con el recuerdo de la desastrosa despedida de soltero en Las Vegas aún vivo en su memoria - o al menos bien documentado -, Stu no deja nada al azar. Ha optado por un brunch preboda seguro y tranquilo con tortitas, café, y sin alcohol... Sin embargo, las cosas no siempre salen como se piensa. Dos noches antes del gran día, en un fabuloso resort de Tailandia, Stu cede. Una cerveza para cada uno. En botellas cerradas, ¿qué podría pasar?Lo que ocurre en Las Vegas se queda en Las Vegas, pero lo que ocurre en Bangkok resulta difícil de imaginar.',
                genres: [
                    'comedia',
                ],
                rate: '8.0',
                length: '1hr 42mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jQfURiv7Ho6ozviSRv519jXSpHD.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/aGmsekNU5cMOkJMpbdRutkvmVMl.jpg',
                url: 'https://drive.google.com/file/d/1FmFE2ZugyRpZiPovhtQjOW-ZsKMujQfv/preview'
            },
            {
                id: 33,
                key: 'QUE-PASO-AYER',
                name: 'QUE PASO AYER ',
                description: '"The Hangover" es la historia de una desmadrada despedida de soltero en la que el futuro novio y sus tres amigos, dos días antes de la boda, se montan la juerga padre en Las Vegas. Doug viaja a la ciudad del juego con sus mejores amigos Phil y Stu, así como su futuro cuñado Alan. La juerga es de campeonato y, como era de esperar, a la mañana siguiente tienen una resaca monumental. El problema es que, siendo incapaces de recordar nada de lo ocurrido durante la noche anterior, se encuentran con que el prometido ha desaparecido, topándose en su lugar con otras dos sorpresas en la suite del hotel: un tigre y un bebé.',
                genres: [
                    'comedia',
                ],
                rate: '8.0',
                length: '1hr 40mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rqeim09TdaflSvPNVnCTBjUHlKu.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/2o0PKGmnSgCGkzoSePNAqse8Ure.jpg',
                url: 'https://drive.google.com/file/d/17DiJFfSnG3DnwWGW8NtsI9K5Bz8JcEm0/preview'
            },
            {
                id: 34,
                key: 'EL-EFECTO-MARIPOSA',
                name: 'EL EFECTO MARIPOSA ',
                description: 'Evan Treborn, un joven que se está esforzando por superar unos dolorosos recuerdos de su infancia, descubre una técnica que le permite viajar atrás en el tiempo y ocupar su cuerpo de niño para poder cambiar el curso de su dolorosa historia. Sin embargo también descubre que cualquier mínimo cambio en el pasado altera enormemente su futuro.',
                genres: [
                    'scifi',
                    'suspenso'
                ],
                rate: '8.0',
                length: '1hr 53mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vtqJkVTvrxbk2BehGO6e6izsUBa.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/yriYPLqyFqPW0QXaegT1KmWXk9a.jpg',
                url: 'https://drive.google.com/file/d/1oaI6vc0MAc2fHj8Je0pM46BIXpXnIk4E/preview'
            },
            {
                id: 35,
                key: 'PROYECTO-GEMINIS',
                name: 'PROYECTO GEMINIS ',
                description: 'Henry Bogan, un asesino a sueldo, pretende retirarse porque se siente viejo. Sin embargo, hay alguien que no está dispuesto a permitírselo porque tiene la misión de matarlo: un clon suyo más joven, más rápido y más fuerte.',
                genres: [
                    'accion',
                    'suspenso'
                ],
                rate: '8.0',
                length: '1hr 57mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/fjCK5YIDRXrAnffd56zJOYfgF46.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6nIfuQbDoxcKW4TfYUSdV7DjmNk.jpg',
                url: 'https://drive.google.com/file/d/1Zw_8TpWlB6Pmr2xsqPhtxyzT5_4NpIKs/preview'
            },
            {
                id: 36,
                key: 'ULTRAVIOLETA',
                name: 'ULTRAVIOLETA',
                description: 'A finales del siglo XXI, surge una subcultura de seres humanos con una mutación genética: están dotados de una asombrosa velocidad, una increíble resistencia y una profunda inteligencia. A medida que hay más personas contagiadas, el temor del gobierno aumenta y a los mutantes se les trata como a marginados, se les somete a pruebas espantosas y se les pone en cuarentena. El gobierno ha tomado la determinación de acabar con ellos, pero una mujer está decidida a impedirlo: la ultrabella y ultraletal Violet (Milla Jovovich). Gracias a sus impresionantes técnicas de artes marciales y a su capacidad camaleónica, Violet se convierte en una guerrera solitaria dedicada a proteger a su nueva raza y a vengarse de los que la crearon.',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '9.0',
                length: '1hr 28mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bLwx3RGXgwxjRrwgPEY0noXJzlO.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/xfV7huEdsTUzEFiUmZHxTzlJhoB.jpg',
                url: 'https://drive.google.com/file/d/1VN9yexUyAQjmLJstaNWoWEPinZK7erkI/preview'
            },
            {
                id: 37,
                key: 'MISION-IMPOSIBLE-6-REPERCUSION',
                name: 'MISION IMPOSIBLE 6 REPERCUSION',
                description: 'En ocasiones, hasta las mejores intenciones pueden volverse en contra. Después de una misión fallida, Ethan Hunt y su equipo IMF, junto con algunos aliados conocidos, se enfrentarán a una nueva carrera contrarreloj.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 27mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/l0NHRXsdtkSNL6OSn1MSEA2COT.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/a9fRqsl6P27qxbDSb4pBXNv9Fwl.jpg',
                url: 'https://drive.google.com/file/d/1doi74QC6p5uV2h6qtFBPv-tZrdyluzm9/preview'
            },
            {
                id: 38,
                key: 'MISION-IMPOSIBLE-5-NACION-SECRETA',
                name: 'MISION IMPOSIBLE 5 NACION SECRETA',
                description: 'Con la FMI disuelta y Ethan Hunt abandonado a su suerte, el equipo tiene que enfrentarse contra el Sindicato, una red de agentes especiales altamente preparados y entrenados. Estos grupos están empeñados en crear un nuevo orden mundial mediante una serie de ataques terroristas cada vez más graves. Ethan reúne a su equipo y une sus fuerzas con la agente británica renegada Ilsa Faust, quien puede que sea o no miembro de esta nación secreta, mientras el grupo se va enfrentando a su misión más imposible hasta la fecha…',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 11mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ww0IX7Xla6tHgrwYSupfXcksV3n.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/eR20N1flPCQyp9HzpxlTcxgDAO7.jpg',
                url: 'https://drive.google.com/file/d/184eyRJJJUbUL4IhXrE8fBWFjRtd5mwUt/preview'
            },
            {
                id: 39,
                key: 'MISION-IMPOSIBLE-4-PROTOCOLO-FANTASMA',
                name: 'MISION IMPOSIBLE 4 PROTOCOLO FANTASMA',
                description: 'El agente Ethan Hunt, acusado de un atentado terrorista con bombas contra el Kremlin, es desautorizado junto con toda la organización, al poner en marcha el presidente el llamado Protocolo fantasma. Abandonado a su suerte y sin recursos, el objetivo de Ethan es rehabilitar el buen nombre de su agencia e impedir un nuevo ataque. Pero emprende esta misión con un equipo formado por fugitivos, cuyos motivos personales no conoce bien.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.0',
                length: '2hr 12mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/y0hjsPyieqxcunEcAxb9mrrE09c.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/f0fgxPQSbk2oFRiEHpCTUFIk4Sd.jpg',
                url: 'https://drive.google.com/file/d/1TQZAmhARb-nasypJlw2VBgFuzUOPIXiK/preview'
            },
            {
                id: 40,
                key: 'MISION-IMPOSIBLE-3',
                name: 'MISION IMPOSIBLE 3',
                description: 'Tras haber llevado a cabo diversas misiones, el agente especial Ethan Hunt (Tom Cruise) se ha retirado del servicio activo y se ha prometido con su amada Julia (Michelle Monaghan). Pero, cuando es secuestrado uno de los agentes entrenados por él, volverá de nuevo a la acción. También tendrá que enfrentarse a Owen Davian (Philip Seymour Hoffman), un individuo sin escrúpulos que trafica con armas y con información.',
                genres: [
                    'accion',
                    'aventura',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 6mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/w61xBgFOfP8Z6uHKIKn1sl1TI8j.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/bYKeB9uUcPmvikjouEEQ86uvPw9.jpg',
                url: 'https://drive.google.com/file/d/1OYAGKYzeLW_vnyQXtnJOBh3EYPWnNdvo/preview'
            },
            {
                id: 41,
                key: 'MISION-IMPOSIBLE-2',
                name: 'MISION IMPOSIBLE 2',
                description: 'El agente especial Ethan Hunt tiene una nueva misión: evitar que un despiadado ex-agente y ahora terrorista internacional se haga con un virus mortal que podría soltar sobre Australia causando millones de víctimas. Para evitarlo, contará otra vez con la inestimable ayuda del genio informático Luther Stickell, del experto conductor Billy Baird y de la presencia de la sensual y exótica ladrona internacional Nhye, que en el pasado mantuvo una relación sentimental con el criminal y que ahora se siente atraída por Hunt.',
                genres: [
                    'accion',
                    'aventura',
                    'suspenso',
                    'scifi'
                ],
                rate: '6.0',
                length: '2hr 3mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/mskE3W88cjMRrnKQye8pjmJu3O1.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/24DZfupDlhXeTchmcOkoGRhP5Vg.jpg',
                url: 'https://drive.google.com/file/d/1iyEWU4Wc41T88F9H_uBwrOf4Bajwfn23/preview'
            },
            {
                id: 42,
                key: 'MISION-IMPOSIBLE',
                name: 'MISION IMPOSIBLE',
                description: 'Ethan Hunt es un superespía capaz de resolver cualquier arriesgada situación con la máxima elegancia. Forma parte de un competente equipo dirigido por el agente Jim Phelps, que ha vuelto a reunir a sus hombres para participar en una dificilísima misión: evitar la venta de un disco robado que contiene información secreta de vital importancia.',
                genres: [
                    'accion',
                    'aventura',
                    'suspenso',
                    'scifi'
                ],
                rate: '6.0',
                length: '1hr 50mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/pbaAkR1FDvgndTVFgGRIzf9o49r.jpg',
                url: 'https://drive.google.com/file/d/1pm_5e4SJTgja90kF2VI9gKqfPxmvCQYb/preview'
            },
            {
                id: 43,
                key: 'MAZINGER-Z',
                name: 'MAZINGER Z',
                description: 'La película llega en la conmemoración de los 45 años del manga, y está dirigida por Junji Shimizu (Yu-Gi-Oh!, One Piece,Toriko 3D: Kaimaku Gourment Adventure!) y bajo la producción de Toei Animation, productora encargada de otros famosos animes como Caballeros del Zodiaco, Sailor Moon y Candy Candy. El villano Doctor Infierno y su Imperio del Mal vuelven para hacerse con la humanidad y sembrar el caos, lo que hará que Koji Kabuto vuelva a ponerse a los mandos del robot Mazinger Z. Tras descubrir una extraña y diferente forma de vida en el Monte Fuji Kabuto tendrá que hacer frente a un nuevo y desconocido mal y escoger entre volver a ser el héroe o un dios.',
                genres: [
                    'accion',
                    'animacion',
                    'scifi'
                ],
                rate: '7.0',
                length: '1hr 30mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rulLQ2eLxpCBKOSfTyFBcpGnmX.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/8we8EpFgalNg0wtRhhYFDTNF7pp.jpg',
                url: 'https://drive.google.com/file/d/18NCkyXzhrukILeg073ClKoSC-hFjAAU1/preview'
            },
            {
                id: 44,
                key: 'EL-CORREDOR-DEL-LABERINTO-LA-PRUEBA',
                name: 'EL CORREDOR DEL LABERINTO LA PRUEBA',
                description: 'En este nuevo capítulo de la trepidante saga El Corredor del Laberinto, Thomas Dylan O Brien y el resto de clarianos tendrán que enfrentarse a su mayor desafío hasta el momento: buscar pistas sobre la misteriosa y poderosa organización conocida como CRUEL. Este viaje les llevará a “La Quemadura un apocalíptico lugar repleto de inimaginables obstáculos. Formando equipo con miembros de la resistencia, los clarianos deberán desenmascarar a las fuerzas superiores de CRUEL y averiguar qué planes tienen para todos ellos',
                genres: [
                    'accion',
                    'suspenso',
                    'scifi'
                ],
                rate: '6.9',
                length: '2hr 12mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/wtbjAodeIf0Pj2blNeN1dM3suxU.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/pTZ8jRtDqd5a1xFhCI50yORX13D.jpg',
                url: 'https://drive.google.com/file/d/1hHeqZRQpjX_jG3kRjT9nIC-QiH5QUaEn/preview'
            },
            {
                id: 45,
                key: 'EL-CORREDOR-DEL-LABERINTO-LA-CURA-MORTAL',
                name: 'EL CORREDOR DEL LABERINTO LA CURA MORTAL',
                description: 'En este final de saga, Thomas lidera a su grupo en una última misión. Deberán entrar en la legendaria Last City, un laberinto controlado por WCKD que puede llegar a ser el laberinto más mortífero de todos. Cualquier persona que lo supere obtendrá las respuestas a las preguntas y los protagonistas quieren saber lo que realmente sucede.',
                genres: [
                    'accion',
                    'suspenso',
                    'mysterio',
                    'scifi'
                ],
                rate: '7.1',
                length: '2hr 22mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/t0NJa8B0QiemnMNg6KkuDvS3Bh7.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/zgcL0xaHxXVvrV1Fu1ZSKoTk0MH.jpg',
                url: 'https://drive.google.com/file/d/1D2QWMXszr0kFpEBkyF4qf5uK23X5WhoZ/preview'
            },
            {
                id: 46,
                key: 'EL-CORREDOR-DEL-LABERINTO-CORRER-O-MORIR',
                name: 'EL CORREDOR DEL LABERINTO CORRER O MORIR',
                description: 'Thomas abre los ojos y se da cuenta que está en un ascensor. Lo extraño es que no recuerda nada, ni dónde está, ni quién es. Lo único que aún permanece intacto en su memoria es su nombre, y ya es mucho. Antes de que le dé tiempo a cuestionarse algo sobre sí mismo las puertas se abrirán y aparecerá ante él un extraño mundo. Todo lo que ve son chicos de su edad que tienen su mismo estado de amnesia. Una aventura fantástica que pronto destapará la dura realidad bajo ese velo de incertidumbre: todos ellos están atrapados en un laberinto. Si quieren tener alguna posibilidad de salir de allí y recuperar su antigua vida y aquello que no son capaces de recordar deberán unir fuerzas para escapar. Un mundo post-apocalíptico que les acorralará e irá un paso por delante será el desafío que tengan que pasar estos jóvenes por la libertad.',
                genres: [
                    'accion',
                    'suspenso',
                    'mysterio',
                    'scifi'
                ],
                rate: '7.1',
                length: '1hr 53mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/l4gHlqLUpksNpixKcePNL9KUIjz.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/vHJlbhsXrZ5yrO2KqCbGSIU6fRX.jpg',
                url: 'https://drive.google.com/file/d/1THs9PlZGFy17k283J5l4DHq4Qqnlc8Dc/preview'
            },
            {
                id: 47,
                key: 'INDIANA-JONES-Y-LA-CALAVERA-DE-CRISTAL',
                name: 'INDIANA JONES Y LA CALAVERA DE CRISTAL',
                description: 'Guerra Fría (1957). Indiana Jones (Harrison Ford) y su amigo Mac (Ray Winstone) acaban de escapar de las garras de unos agentes soviéticos en un remoto aeropuerto. El decano de la Universidad (Jim Broadbent) le confiesa a su amigo el profesor Jones que las últimas misiones de Indy han fracasado y que está a punto de ser despedido. Mientras tanto, Indiana conoce a Mutt (Shia LaBeouf), un joven rebelde que le propone un trato: si le ayuda a resolver un problema personal, él, a cambio, le facilitaría uno de los descubrimientos más espectaculares de la historia: la Calavera de Cristal de Akator, que se encuentra en un lugar remoto del Perú. Pero los agentes soviéticos, dirigidos por la fría y bella Irina Spalko (Cate Blanchett), tienen el mismo objetivo.',
                genres: [
                    'accion',
                    'aventura',
                    'mysterio',
                    'scifi'
                ],
                rate: '8.1',
                length: '2hr 3mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/eahWIgjttYQu4Ih8HwhF9sdexYk.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/p96949hcwUG2BwE6MgKmw0uYNCx.jpg',
                url: 'https://drive.google.com/file/d/1Qx7qwePg7IVLuMMJpHzWxPb2FxvHWspl/preview'
            },
            {
                id: 48,
                key: 'INDIANA-JONES-LA-ULTIMA-CRUZADA',
                name: 'INDIANA JONES LA ULTIMA CRUZADA',
                description: 'En esta tercera entrega, el padre del protagonista (Harrison Ford), Henry Jones, también arqueólogo (Sean Connery), es secuestrado cuando buscaba el Santo Grial. Indiana tendrá que ir a rescatarlo y, de paso, intentar hacerse con la preciada reliquia, que también ambicionan los nazis.',
                genres: [
                    'accion',
                    'aventura',
                    'mysterio',
                    'scifi'
                ],
                rate: '8.1',
                length: '2hr 7mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/osKZUgKRUK1jwYMdsmlevK7zZIY.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/je2QsgBLEy4lzsvWprwfoZKmIX1.jpg',
                url: 'https://drive.google.com/file/d/1MHTc7oEwVyo60UcRqsJkL8V0IeELdoRT/preview'
            },
            {
                id: 49,
                key: 'INDIANA-JONES-Y-EL-TEMPLO-MALDITO',
                name: 'INDIANA JONES Y EL TEMPLO MALDITO',
                description: '1935. Shanghai. El intrépido arqueólogo Indiana Jones, tras meterse en jaleos en un local nocturno, consigue escapar junto a una bella cantante y su joven acompañante. Tras un accidentado vuelo, los tres acaban en la India, donde intentarán ayudar a los habitantes de un pequeño poblado, cuyos niños han sido raptados.',
                genres: [
                    'accion',
                    'aventura',
                    'mysterio',
                    'scifi'
                ],
                rate: '8.1',
                length: '1hr 58mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/6UrznkPL4Y2f66zkoFAiSwfAYtE.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/iO73omOyLwUPW22EpaZkJNC72ec.jpg',
                url: 'https://drive.google.com/file/d/1upJkn0Uuk09Loq7jxHm3thbYxN59GZuJ/preview'
            },
            {
                id: 50,
                key: 'INDIANA-JONES',
                name: 'INDIANA JONES',
                description: 'Cuando el profesor Henry Jones Sr. es invitado a dar conferencias en todo el mundo en mayo de 1908, lleva consigo a su esposa e hijo, e invita a su ex tutor, la señorita Helen Seymour, a enseñar a Henry Jr. durante el viaje. Su primera parada es El Cairo, Egipto. Cuando Junior, que prefiere llamarse Indy y Miss Seymour visitan las pirámides, T.E. los invita. Lawrence (otro antiguo alumno suyo) para unirse a una excavación arqueológica. Cuando la momia desaparece y se roba un tocado invaluable, el joven Indy prueba su primera aventura. En su próxima parada en Tánger, la familia se queda con el ex compañero de clase del profesor Jones, Walter Harris. Indy se hace amigo de un joven esclavo llamado Omar que pertenece a Emily Keen. Los dos se meten en problemas cuando Indy insiste en visitar el mercado para ver una cabeza salada exhibida en un poste. Atrapados por traficantes de esclavos, terminan en una subasta de la que solo Harris puede intentar rescatarlos.',
                genres: [
                    'accion',
                    'aventura',
                    'mysterio',
                    'scifi'
                ],
                rate: '8.1',
                length: '1hr 30mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/oY0QAAwhbtTNkpYhKJcD3dqSuzG.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/zfRNjIG69w76AZsh3p2SGurSE5r.jpg',
                url: 'https://drive.google.com/file/d/12NjLlzAB7kOQb6r1WBO7f3oqahQ-3-IE/preview'
            },
            {
                id: 51,
                key: 'JOKER',
                name: 'JOKER',
                description: 'Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.',
                genres: [
                    'crime',
                    'drama',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.1',
                length: '2hr 2mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/v0eQLbzT6sWelfApuYsEkYpzufl.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg',
                url: 'https://drive.google.com/file/d/1xnGvbAVT3eE0M2VQyA-EVAklt6NJ2EYM/preview'
            },
            {
                id: 52,
                key: 'EL-HOMBRE-INVISIBLE',
                name: 'EL HOMBRE INVISIBLE',
                description: 'Cecilia (Elisabeth Moss) rehace su vida tras recibir la noticia de que su exnovio, un maltratador empedernido, ha fallecido. Sin embargo, su cordura comienza a tambalearse cuando empieza tener la certeza de que en realidad sigue vivo.',
                genres: [
                    'terror',
                    'drama',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.1',
                length: '1hr 50mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/xk4RpcvVQ7JmnrkQtZ479EwWieT.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/hiGjyrNhojSgugIqd0xhd70rCRD.jpg',
                url: 'https://drive.google.com/file/d/16eJqy5qtwrjikkBh1C8_okdH5NR-xJNh/preview'
            },
            {
                id: 53,
                key: 'LA-GUERRA-DE-LOS-MUNDOS',
                name: 'LA GUERRA DE LOS MUNDOS',
                description: 'Basada en una popular novela de HG Wells, narra la historia de una invasión del planeta tierra por los marcianos, y la extraordinaria batalla de la humanidad por la supervivencia a través de los ojos de una familia americana. Ray Ferrier es un descargador de muelle, divorciado y padre nada modélico. Poco después de que su ex mujer y su nuevo marido se vayan después de dejar a Robbie, su hijo adolescente, y a su pequeña hija Rachel para una de sus contadas visitas, estalla una tremenda e inesperada tormenta eléctrica. Unos momentos después, en un cruce cerca de la casa, Ray es testigo de un acontecimiento que cambiará su vida y la de los suyos para siempre. Una enorme máquina de tres patas emerge del suelo y antes de que alguien pueda hacer algo, arrasa todo lo que está a su alcance. Un día como otro cualquiera acaba de convertirse en la fecha más extraordinaria de su vida: el primer ataque alienígena contra la Tierra.',
                genres: [
                    'aventura',
                    'suspenso',
                    'scifi'
                ],
                rate: '8.1',
                length: '1hr 56mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ahcOViJGgwGojoncRVDMq5R7WDN.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/nH6hPhJq3EEv9CnBZgXU3IQnpJo.jpg',
                url: 'https://drive.google.com/file/d/1UeYewLBlNqyzZ5jPiEEcHgtf5kU-QhCh/preview'
            },
            {
                id: 54,
                key: 'LA-VECINA-DE-ALADO',
                name: 'LA VECINA DE ALADO',
                description: 'Matthew, un ambicioso joven de un instituto con aspiraciones a ser político en el futuro, se enamora de la chica de sus sueños: la bella y joven vecina de la puerta de al lado. Ambos comienzan un idílico romance, pero un sorprendente descubrimiento pondrá a prueba su relación: ella es un famosa actriz porno.',
                genres: [
                    'comedia',
                    'romance'
                ],
                rate: '8.1',
                length: '1hr 48mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/lpFkU7VmWvtBOf6FnWV3bCLoXVW.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/lDHdDgObpNXWHP2PHnA3BjDHm3g.jpg',
                url: 'https://drive.google.com/file/d/1gbEzjodQxXFvvkyvw8ATpy5899mkjQ9d/preview'
            },
            {
                id: 55,
                key: 'GIGANTES-DE-ACERO',
                name: 'GIGANTES DE ACERO',
                description: 'En un futuro no muy lejano, el boxeo es robótico: en los combates ya no se enfrentan seres humanos, sino robots humanoides, sofisticadas máquinas diseñadas para luchar. Charlie Kenton, un antiguo púgil que casi llegó a alcanzar la gloria, está pasando una mala racha como promotor de combates. Un día, encuentra un viejo robot desechado y, al comprobar que es un gran boxeador, decide entrenarlo.',
                genres: [
                    'accion',
                    'drama',
                    'scifi'
                ],
                rate: '8.1',
                length: '2hr 6mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ubHhEiVQfE0UMa2NQRrzCiXhhZg.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/qTtfFf5TuEp2PhpUtqpPHHR7lYU.jpg',
                url: 'https://drive.google.com/file/d/1gjOx-Dskj0hmghoe_awiDxDtfIupm7Sf/preview'
            },
            {
                id: 56,
                key: 'BATTLESHIP',
                name: 'BATTLESHIP',
                description: '“Battleship” es la libre adaptación al cine del popular juego de mesa de Hasbro conocido como “Hundir la flota” o ”Batalla naval”. La curiosa variante que plantea esta versión es que la batalla será entre la U.S. Navy y… ¡una flota alienígena! La historia nos propone una épica aventura de acción que transcurre en el mar, el cielo y la tierra, y en la que nuestro planeta lucha por sobrevivir contra una fuerza muy superior. La película está protagonizada por Taylor Kitsch en el papel del teniente Hopper, un oficial de la Marina destinado al John Paul Jones; Brooklyn Decker es Sam Shane, una fisioterapeuta de la Marina y novia de Hopper; Alexander Skarsgård es Stone, el hermano mayor de Hopper y comandante del Samson; Rihanna es la suboficial Raikes, especialista en armas del John Paul Jones; y Liam Neeson es el almirante Shane, el oficial superior de Hopper y Stone (y padre de Sam).',
                genres: [
                    'accion',
                    'suspenso',
                    'aventura',
                    'scifi'
                ],
                rate: '8.1',
                length: '2hr 11mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/iPcKGENr2JciyNqmiMNJGerVWO.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/13FUpGdCRFBcMBAk3PJ5iIY5mFw.jpg',
                url: 'https://drive.google.com/file/d/1C7uHUBCmVwmXklke_SAa2StKe5MEwZGx/preview'
            },
            {
                id: 57,
                key: 'LA BELLA Y LA BESTIA',
                name: 'LA BELLA Y LA BESTIA',
                description: 'Bella, una joven hermosa y brillante, asume el lugar de su padre como prisionero en el castillo de una bestia. Poco a poco, la valiente Bella irá dándose cuenta de que el príncipe bestia no es el malvado ser que todos creen que es y tiene, en realidad, un gran corazón.',
                genres: [
                    'familia',
                    'fantasia',
                    'romance'
                ],
                rate: '8.1',
                length: '2hr 9mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/8vMrk2AWbJbSsRnIdogKIB8cHTK.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/sibwRLuvvsblv8tBjY5b459VrmS.jpg',
                url: 'https://drive.google.com/file/d/1qlVCIwymXl1G3jRJpJ28tNQxxqa-HklW/preview'
            },
            {
                id: 58,
                key: 'CHAPPIE',
                name: 'CHAPPIE',
                description: 'Ambientada en Johanesburgo, y con un personaje robótico ridículo como protagonista, este delirante relato nos traslada a un viaje por las emociones y sentimientos en un mundo distinto a la par que sorprendente. Con un argumento elaborado y un trasfondo reflexivo, esta cómica historia encaja en un marco inusual visualmente cuidado e impactante. Una comedia que cala por la simplicidad de su trama principal, y engancha por los minuciosos detalles que te adentran en una realidad ficticia y muy visual. Enigmática y divertida a partes iguales, se trata de una historia de corazón en un entorno robotizado y futurista donde la ciencia ficción es el paisaje.',
                genres: [
                    'crimen',
                    'accion',
                    'scifi'
                ],
                rate: '8.1',
                length: '2hr 00mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h767mOshwwM4VzmcuEu7rTZmgRa.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6qjK7kJBodduKkuSP9AU8OiEzNS.jpg',
                url: 'https://drive.google.com/file/d/1QIb54pBcsIP0oq2HwNBac4a7vU8yODdE/preview'
            },
            {
                id: 59,
                key: '365-DIAS',
                name: '365 DIAS',
                description: 'Massimo es miembro de la mafia siciliana y Laura es una directora de ventas. Ella no espera que un viaje a Sicilia salve su relación, pero Massimo la secuestrará durante 365 días para que se enamore de él.',
                genres: [
                    'drama',
                    'romance'
                ],
                rate: '9.1',
                length: '1hr 56mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jz8T3hrU6GuMqSuQ4Rbd4MJUeaq.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/e8b2F4eg6ansZhaQQN8iXfzZtz7.jpg',
                url: 'https://drive.google.com/file/d/1lr-wNRyM-C_gIffjLj3DIHcsGfmI9opH/preview'
            },
            {
                id: 60,
                key: 'CAMINO-HACIA-EL-DORADO',
                name: 'CAMINO HACIA EL DORADO',
                description: 'Siglo XVI. Dos jóvenes estafadores ganan en un juego de dados un mapa a El Dorado pero son descubiertos y perseguidos por los guardias. Logran escapar pero terminan por meterse en el barco del mismisimo Hernán Cortés. Escapan en un bote del barco y llegan a tierra arrastrados por el mar. Allí deciden emprender la búsqueda de la ciudad de oro al reconocer indicios que aparecían en el mapa, pero su aventura no terminará como ellos lo esperan.',
                genres: [
                    'animacion',
                    'aventura',
                    'comedia'
                ],
                rate: '8.1',
                length: '1hr 29mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/g9v66AdqXSmphnKPEcHqlKqxhA8.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ciID0Mu1pPuOUP3JbOsDXQ5aMV6.jpg',
                url: 'https://drive.google.com/file/d/1OT_hh2-DZSv_ALS9riEzP5h9zix4ksgL/preview'
            },
            {
                id: 61,
                key: 'LAS-NOVIAS-DE-MIS-AMIGOS',
                name: 'LAS NOVIAS DE MIS AMIGOS',
                description: 'Tres amigos están en ese momento vital en el que no saben qué hacer con su vida sentimental. Jason y Daniel viven yendo de relación en relación con chicas con las que no quieren comprometerse, mientras que Mickey está casado y tiene problemas con su mujer. Todo cambiará para ellos una noche en que deciden salir de fiesta para animar a su amigo y Jason cae perdidamente enamorado de una chica a la que acaba de conocer.',
                genres: [
                    'romance',
                    'comedia'
                ],
                rate: '9.0',
                length: '1hr 40mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/fuC76J6XMKlhXBgjcP3GtU15Us0.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/l44Dz6cuQaixAlfmQDNwDQJRC5m.jpg',
                url: 'https://drive.google.com/file/d/18hv65b5_w_BBDsscXSf0OzoQsRMeotQz/preview'
            },
            {
                id: 62,
                key: 'ALADDIN',
                name: 'ALADDIN',
                description: 'Aladdin es un adorable pero desafortunado ladronzuelo enamorado de la hija del Sultán, la princesa Jasmine. Para intentar conquistarla, acepta el desafío de Jafar, que consiste en entrar a una cueva en mitad del desierto para dar con una lámpara mágica que le concederá todos sus deseos. Allí es donde Aladdín conocerá al Genio, dando inicio a una aventura como nunca antes había imaginado.',
                genres: [
                    'aventura',
                    'fantasia',
                    'romance',
                    'familia'
                ],
                rate: '7.5',
                length: '2hr 8mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rSfOAjBSqdvGndNHv0H961YkZIr.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/oX056O8bAInZ75jGY9MacQ2VlsM.jpg',
                url: 'https://drive.google.com/file/d/1lnCeOw4vVoSYU8wBUugx1D_gwUBz-wPx/preview'
            },
            {
                id: 63,
                key: 'DEADPOOL-2',
                name: 'DEADPOOL 2',
                description: 'Wade Wilson (Ryan Reynolds), mejor conocido como Deadpool, su nombre de batalla e identidad antiheroica, está de regreso con Deadpool 2 y en esta ocasión su misión será salvar a un chico llamado Russell (Julian Dennison) de las manos de un poderoso rival llamado Cable (Josh Brolin). En aras de dar cumplimiento a su tarea el antihéroe formará un grupo al cual pondrá el nombre de X-Force. Secuela de la exitosa película (recaudó más de 780 millones de dólares en todo el mundo) parodia de los superhéroes mutantes del 2016, también protagonizada por Reynolds.',
                genres: [
                    'aventura',
                    'comedia',
                    'accion'
                ],
                rate: '8.5',
                length: '2hr 00mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/fgPTa4IS07Pygz0Q1WJnRgOP7r7.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/1CzUuIdalmARzfYyEX3vGmBy6dn.jpg',
                url: 'https://drive.google.com/file/d/1zUkxRiOghs3bTgZ1mNm7ygHD0KrNg54z/preview'
            },
            {
                id: 64,
                key: 'LINTERNA-VERDE',
                name: 'LINTERNA VERDE',
                description: 'En un universo tan vasto como misterioso, una pequeña pero misteriosa fuerza ha existido por siglos. Protectores de la paz y la justicia se hace llamar el cuerpo de linternas verdes. Una hermandad de guerreros que juraron mantener el orden intergaláctico donde cada linterna verde lleva un anillo que le da superpoderes. Pero cuando un nuevo enemigo llamado Parallax amenaza con destruir el balance y el poder del universo, su destino y el de la tierra cae en manos del nuevo recluta; el primer humano que ha sido elegido: Hal Jordan.',
                genres: [
                    'aventura',
                    'suspenso',
                    'scifi',
                    'accion'
                ],
                rate: '8.5',
                length: '1hr 54mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/f1xnVz2zFp49Kz8I7T231V5qN3m.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/58r049aVTO1KjAYVuWJr0KgG5nY.jpg',
                url: 'https://drive.google.com/file/d/1ZMuJGUJb2U5PvQiBUbk3ytoaG24_wFkd/preview'
            },
            {
                id: 65,
                key: 'ARTEMIS-FOWL',
                name: 'ARTEMIS FOWL',
                description: 'La historia de Artemis Fowl es la de un niño de 12 años de edad que está a punto de arrebatar el poder al mundo subterráneo. Lo que él todavía no sabe es que sus habitantes: hadas, duendes, elfos... no son las criaturas maravillosas que siempre hemos imaginado y no van a consentir que un humano conozca sus secretos más sagrados. Como él, van armados hasta las barbas y conocen las últimas tecnologías: se prepara un trepidante duelo que puede provocar una auténtica guerra entre las especies del planeta.',
                genres: [
                    'aventura',
                    'fantasia',
                    'scifi',
                    'familia'
                ],
                rate: '8.5',
                length: '1hr 35mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/juE7o699roXnxCi8shR10Cf2dCH.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg',
                url: 'https://drive.google.com/file/d/1QzlTziLYnm-kVlkbwrpkenKSiwGzY5l_/preview'
            },
            {
                id: 66,
                key: 'ANT-MAN',
                name: 'ANT-MAN',
                description: 'Armado con la asombrosa capacidad de reducir su tamaño a la dimensiones de un insecto, el estafador Scott Lang debe sacar a relucir al héroe que lleva dentro y ayudar a su mentor, el doctor Hank Pym, a proteger de una nueva generación de amenazas el secreto que se esconde tras el traje de Ant-Man, con un casco que le permite comunicarse con las hormigas. A pesar de los obstáculos aparentemente insuperables que les acechan, Pym y Lang deben planear y llevar a cabo un atraco para intentar salvar al mundo.',
                genres: [
                    'aventura',
                    'accion',
                    'scifi'
                ],
                rate: '8.5',
                length: '1hr 57mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/A6t1I87uxjlrGKQbrrhrAOO9X0f.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/yAqtv3d1nkJmvosWDAi9eMvILty.jpg',
                url: 'https://drive.google.com/file/d/1qak8-B5FoYdcQv2oDxAqUIWn70zkMyZo/preview'
            },
            {
                id: 67,
                key: 'ANT-MAN-Y-LA-AVISPA',
                name: 'ANT-MAN Y LA AVISPA',
                description: 'Mientras Scott Lang se convierte en un súper héroe y en un padre, Hope van Dyne y el Dr. Hank Pym presentan una nueva misión urgente que encuentra a Ant-Man luchando junto a The Wasp para descubrir secretos de su pasado.',
                genres: [
                    'aventura',
                    'accion',
                    'scifi'
                ],
                rate: '8.5',
                length: '2hr 18mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bvYI6i9lQ3bsup9PgnMF3YYr8ZR.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6P3c80EOm7BodndGBUAJHHsHKrp.jpg',
                url: 'https://drive.google.com/file/d/1d_UiTatuLtz9AFBoGsio80k5ejzGZoMo/preview'
            },
            {
                id: 68,
                key: 'SCOTT-PILGRIM-CONTRA-EL-MUNDO',
                name: 'SCOTT PILGRIM CONTRA EL MUNDO',
                description: 'Les presentamos al encantador y desempleado Scott Pilgrim (Michael Cera), bajista de un grupo “garage” de lo más corriente, los Sex Bob-omb. Este joven de 22 años acaba de conocer a la chica de sus sueños… la de verdad. ¿Cuál es el problema a la hora de conquistar a Ramona Flowers (Mary Elizabeth Winstead)? Los siete ex de la chica están decididos a matar a Scott.Scott Pilgrim nunca ha tenido problemas para echarse novia. Las dificultades aparecen cuando quiere cortar. Mientras intenta deshacerse de la última conquista, Ramona irrumpe en su vida, pero no tarda en descubrir que la mujer deseada arrastra un bagaje nada tranquilizador: sus ex controlan su vida amorosa y están dispuestos a hacer lo que sea para eliminar la competencia.',
                genres: [
                    'comedia',
                    'accion',
                    'fantasia',
                    'romance'
                ],
                rate: '8.5',
                length: '1hr 52mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bOz2Wxv89mtCsr5gaxJDdwZifK4.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/A0xxZhihmbOvzSBFauvaxnm9zAZ.jpg',
                url: 'https://drive.google.com/file/d/1rOos7PedFXixpmZgcX9zybm5SJ4zSf4j/preview'
            },
            {
                id: 69,
                key: 'AQUAMAN',
                name: 'AQUAMAN',
                description: 'Arthur Curry, también conocido como Aquaman (Jason Momoa), es un habitante de un poderoso reino subacuático que recibe el nombre de la Atlántida. En esta película repleta de acción, aventura, e incluso partes de terror, conoceremos sus orígenes, desde que era un niño criado por un hombre humano y considerado un paria por los suyos, hasta que crece y debe hacer frente a los problemas que han aparecido en su mundo. Entonces, este hombre mitad humano y mitad atlante, emprenderá el viaje de su vida, en el que tendrá que descubrir quién es realmente y si es digno de ser un rey. Acompañado de Mera (Amber Heard), hará frente a este y otros retos, mientras le planta cara a Black Manta (Yahya Abdul-Mateen II) y a su propio hermanastro Orm (Patrick Wilson). ¿Será capaz de dirigir a su pueblo y convertirse en un héroe para el mundo?',
                genres: [
                    'aventura',
                    'accion',
                    'fantasia'
                ],
                rate: '8.5',
                length: '2hr 22mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/yTzr6Nc4RcTXVw9SsWQNJdcjTz5.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/8UqyECPx67XgNETLbQYbnOjRaut.jpg',
                url: 'https://drive.google.com/file/d/1Xdus_MyRjpdU3rMldhZllANdB25QvI7d/preview'
            },
            {
                id: 70,
                key: 'PANTERA-NEGRA',
                name: 'PANTERA NEGRA',
                description: '"Black Panther" cuenta la historia de TChalla quien, después de los acontecimientos de "Capitán América: Civil War", vuelve a casa, a la nación de Wakanda, aislada y muy avanzada tecnológicamente, para ser proclamado Rey. Pero la reaparición de un viejo enemigo pone a prueba el temple de TChalla como Rey y Black Panther ya que se ve arrastrado a un conflicto que pone en peligro todo el destino de Wakanda y del mundo.',
                genres: [
                    'aventura',
                    'accion',
                    'fantasia',
                    'scifi'
                ],
                rate: '7.4',
                length: '2hr 14mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/gNekOam2UG6bB6tklMAtGmvZC1Z.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/bQwzJX3CPaZYaLobhhQeKN8LGb3.jpg',
                url: 'https://drive.google.com/file/d/1rX9PJkwkUkiCalgZmxIrNY78IeIT-ccD/preview'
            },
            {
                id: 71,
                key: 'BLADE',
                name: 'BLADE',
                description: 'En un mundo cohabitado en guerra por hombres y vampiros Blade es un vampiro que, al contrario que el resto, no se alimenta de humanos, y que pretende acabar con la raza de "seres superiores" que mordieron a su madre cuando estaba embarazada.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '6.7',
                length: '2hr 00mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/dCsTsFX4PT9wewpKYaddwPHYI3A.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/mIkqnFP5OPAqyHXxc23NbE6IIb2.jpg',
                url: 'https://drive.google.com/file/d/1qS4N1f7tB3-Y9M0dM858_71Vowb6iBNy/preview'
            },
            {
                id: 71,
                key: 'BLADE-2',
                name: 'BLADE 2',
                description: 'Una nueva raza de vampiros, los Reapers, surge para atacar tanto a los humanos como a los de su propia raza, causando el terror. El Consejo de la Sombra, un grupo de vampiros que teme por su supervivencia y que tiene su sede en Praga, contacta con Blade para que acabe con ellos.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '6.7',
                length: '1hr 57mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/hxCGLp3yGUBat6w9YdxxVtqiApH.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/xlEJbzhq975o8EEDW3Cg2obgZIA.jpg',
                url: 'https://drive.google.com/file/d/1Ehf2UyoEG4em_Yr93_WrUEC05i77MV-Q/preview'
            },
            {
                id: 72,
                key: 'BLADE-TRINITY',
                name: 'BLADE TRINITY',
                description: 'Durante años, Blade ha luchado contra los vampiros sin que el mundo supiera lo que sucedía en los bajos fondos. Pero ahora, tras caer en las redes del FBI, se ve forzado a salir a la luz del día para unir sus fuerzas con un clan de humanos cazadores de vampiros que nunca supo que existían, los Nightstalkers. Junto a Abigail y Hannibal, Blade sigue la pista de una Antigua criatura que lo está acechando el vampiro original: Drácula.',
                genres: [
                    'accion',
                    'terror',
                    'scifi'
                ],
                rate: '6.7',
                length: '2hr 3mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/zIkhgzbxoMiv3RF1Jmr3juglAQG.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/55885wQeb8XISRccwnfVJ7DDJFM.jpg',
                url: 'https://drive.google.com/file/d/13Pov3nOXzMFaSGDCtiWMbZU0eeHNAykF/preview'
            },
            {
                id: 73,
                key: 'CAPITAN-AMERICA-EL-PRIMER-VENGADOR',
                name: 'CAPITAN AMERICA EL PRIMER VENGADOR',
                description: 'Nacido durante la Gran Depresión, Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el general Chester Phillips le ofrece la oportunidad de tomar parte en un experimento especial: la Operación Renacimiento. Tras meses de preparación y entrenamiento recibe su primera misión como Capitán América. Armado con un escudo indestructible y su inteligencia para la batalla, el Capitán América emprende la guerra contra el mal, como centinela de la libertad y como líder de los Vengadores.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.9',
                length: '2hr 4mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vAOy3JW7JSiZBUwy72g8a8V6b1m.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/17hvMyOv06uun4ofZSN2BhZSxme.jpg',
                url: 'https://drive.google.com/file/d/1_MmINehscxyewv36_pvR7X-6ZWN7JnuC/preview'
            },
            {
                id: 73,
                key: 'CAPITAN-AMERICA-Y-EL-SOLDADO-DEL-INVIERNO',
                name: 'CAPITAN AMERICA Y EL SOLDADO DEL INVIERNO',
                description: 'Capitán América, Viuda Negra y un nuevo aliado, Falcon, se enfrentan a un enemigo inesperado mientras intentan sacar a la luz una conspiración que pone en riesgo al mundo.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.9',
                length: '2hr 4mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/6QBRnyvJHD7slOlX6aukvMwcEu.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/55zqM1Dt1kVFOQf0ddgjhS3SCf7.jpg',
                url: 'https://drive.google.com/file/d/18njGWgZyBcRc4JrQjNVYwJeTmXTr9vq4/preview'
            },
            {
                id: 74,
                key: 'CAPITAN-AMERICA-CIVIL-WAR',
                name: 'CAPITAN AMERICA CIVIL WAR',
                description: '"Captain America: Civil War” continúa la historia de “Avengers: Age of Ultron”, con Steve Rogers liderando un nuevo equipo de Vengadores en su esfuerzo por proteger a la humanidad. Tras otro incidente internacional relacionado con los Vengadores que ocasiona daños colaterales, la presión política fuerza a crear un sistema de registro y un cuerpo gubernamental para determinar cuándo se requiere los servicios del equipo. El nuevo status quo divide a los Vengadores mientras intentan salvar al mundo de un nuevo y perverso villano.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.8',
                length: '2hr 27mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/g6UTwUVFYWI8VPWo5GylnbZVhin.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/A1sO8cnVJbxPi4orypg6QOfmCnk.jpg',
                url: 'https://drive.google.com/file/d/1t5XaSzt8eszip7bHorgELpXF4YfW9_vN/preview'
            },
            {
                id: 75,
                key: 'CAPITANA-MARVEL',
                name: 'CAPITANA MARVEL',
                description: 'La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, Capitana Marvel es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.8',
                length: '2hr 5mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/gQIQqdrhFdKBFEaZuZ117wkpqOJ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ozTR6OROWHCqZ6ZWlTogDFpHcEp.jpg',
                url: 'https://drive.google.com/file/d/1rjDSOJct2KvGtg1f8UY9Fx1hzvAT92hn/preview'
            },
            {
                id: 76,
                key: 'DAREDEVIL',
                name: 'DAREDEVIL',
                description: 'Un abogado ciego se convierte en un superhéroe nocturno que pone en manos de la justicia a los criminales de Nueva York',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.8',
                length: '2hr 5mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/9Vu49OxWp6LYKsvaEFNokDzKWP3.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/pPALpad1Fh14g7ejyQjqKzlhrBw.jpg',
                url: 'https://drive.google.com/file/d/1NRpPGXAlp75xOJrndt8aVB3cBIYtDfAY/preview'
            },
            {
                id: 77,
                key: 'DOCTOR-STRANGE',
                name: 'DOCTOR STRANGE',
                description: 'La vida del Dr. Stephen Strange cambia para siempre tras un accidente automovilístico que le deja muy malheridas sus manos. Cuando la medicina tradicional falla, se ve obligado a buscar esperanza y una cura en un lugar impensable: una comunidad aislada en Nepal llamada Kamar-Taj. Rápidamente descubre que éste no es sólo un centro de recuperación, sino también la primera línea de una batalla en contra de fuerzas oscuras y ocultas empeñadas en destruir nuestra realidad. En poco tiempo, Strange, armado con sus poderes mágicos recientemente adquiridos, se ve obligado a elegir entre volver a su antigua vida de riqueza y prestigio o dejarlo todo, para defender el mundo como el mago más poderoso del planeta.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.9',
                length: '1hr 55mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/lxZRdSYXPLxnAQZmlG8civ2sfJr.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/eQN31P4IEhyp6NkdccvppJnyuJ4.jpg',
                url: 'https://drive.google.com/file/d/1-T4UlIfuNwOqrEwEVVBMln6SGDnZXOXO/preview'
            },
            {
                id: 78,
                key: 'EL-AVISPON-VERDE',
                name: 'EL AVIPON VERDE',
                description: 'De noche, Britt Reid (Seth Rogen), heredero del gran imperio periodístico creado por su padre (Tom Wilkinson), se convierte en un héroe enmascarado que se propone combatir el crimen: es The Green Hornet. Su compañero de aventuras es Jato (Jay Chou), un experto en artes marciales.',
                genres: [
                    'accion',
                    'crimen',
                    'comedia'
                ],
                rate: '5.9',
                length: '1hr 57mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qvj0JmB1txRC0nQULRBdWwmj5xR.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/rST1USLBic6otxxKaquQkAS9931.jpg',
                url: 'https://drive.google.com/file/d/1vKnL5qYeZpYKPw_CWRM6RHcEhkwOq1zA/preview'
            },
            {
                id: 79,
                key: 'EL-HOMBRE-ARAÑA',
                name: 'EL HOMBRE ARAÑA',
                description: 'Peter Parker es un joven y tímido estudiante que vive con su tía May y su tío Ben desde la muerte de sus padres, siendo él muy pequeño. Peter está enamorado de su guapa vecina, pero su escaso carisma no le hace ser precisamente muy popular en el instituto. Un día es mordido por una araña que ha sido modificada genéticamente, descubriendo al día siguiente que posee unos poderes poco habituales: tiene la fuerza y agilidad de una araña. Las aventuras del hombre araña, basadas en el famoso cómic de Stan Lee y Steve Ditko, arrasó en las taquillas americanas y pulverizó los récords de recaudación en su primer fin de semana: 114 millones de dólares, la primera vez en la historia que se consiguió pasar de la barrera de los 100 millones en un fin de semana normal.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '7.1',
                length: '2hr 1mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rweIrveL43TaxUN0akQEaAXL6x0.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/zp33lkXqcZWyr7iMxzt3lNDtcPv.jpg',
                url: 'https://drive.google.com/file/d/14l5RcbfeKY0MACgnIrJZ8SIKrTGIe7OV/preview'
            },
            {
                id: 80,
                key: 'EL-HOMBRE-ARAÑA-2',
                name: 'EL HOMBRE ARAÑA 2',
                description: 'Han pasado dos años desde que el tranquilo Peter Parker dejó a Mary Jane Watson, su gran amor, y decidió seguir asumir sus responsabilidades como Spider-Man. Peter debe afrontar nuevos desafíos mientras lucha contra el don y la maldición de sus poderes equilibrando sus dos identidades: el escurridizo superhéroe Spider-Man y el estudiante universitario. Las relaciones con las personas que más aprecia están ahora en peligro de ser descubiertas con la aparición del poderoso villano de múltiples tentáculos Doctor Octopus, "Doc Ock". Su atracción por M.J. se hace más fuerte mientras lucha contra el impulso de abandonar su vida secreta y declarar su amor. Mientras tanto, M.J. ha seguido con su vida. Se ha embarcado en su carrera de actriz y tiene un nuevo hombre en su vida. La relación de Peter con su mejor amigo Harry Osborn se ha alejado por la creciente venganza de Harry contra Spider-Man, al que considera responsable de la muerte de su padre.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '7.1',
                length: '2hr 16mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/1nIV4N6QOsMGsEgaQHHhdYX7lNJ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/vqZnytUpDDAZI6JU7WtCqdq84L.jpg',
                url: 'https://drive.google.com/file/d/1ya6qrRxC6PZ13Qi6YZ4xHHbpLeaFou06/preview'
            },
            {
                id: 81,
                key: 'EL-HOMBRE-ARAÑA-3',
                name: 'EL HOMBRE ARAÑA 3',
                description: 'Tercera entrega de las aventuras del joven Peter Parker (Maguire). Parece que Parker ha conseguido por fin el equilibrio entre su devoción por Mary Jane y sus deberes como superhéroe. Pero, de repente, su traje cambia volviéndose negro y aumentando sus poderes; también Peter se transforma, sacando el lado más oscuro y vengativo de su personalidad. Bajo la influencia de este nuevo traje, Peter deja de proteger a la gente que realmente lo quiere y se preocupa por él. En estas circunstancias, no tiene más remedio que elegir entre disfrutar del tentador poder del nuevo traje o seguir siendo el compasivo héroe de antes. Mientras tanto, dos temibles enemigos, Venom y el Hombre de Arena, utilizarán sus poderes para calmar su sed de venganza.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '7.1',
                length: '2hr 19mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ej5MReggbRv5yNKkAqwy4HkmJe.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/nVSkePSFsZNcMJsp8IOQVmHhyG1.jpg',
                url: 'https://drive.google.com/file/d/17szJeUpnN8P-8suLItOSa-46qX_hDy_a/preview'
            },
            {
                id: 82,
                key: 'EL-HOMBRE-DE-ACERO',
                name: 'EL HOMBRE DE ACERO',
                description: 'Un niño descubre que posee poderes extraordinarios y que no pertenece a este planeta. En su juventud, viaja para descubrir sus orígenes y las razones por las cuales ha sido enviado a la Tierra. Pero el héroe que lleva dentro tiene que emerger para que pueda salvar al mundo de la aniquilación y convertirse en el símbolo de esperanza para la humanidad.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '7.6',
                length: '2hr 28mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qcncHlqBNaEdA3ooV7X9Lqmlvqx.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6lsvafjUX32pVbqvKcO12851TTt.jpg',
                url: 'https://drive.google.com/file/d/1Hdo1BSJ_QBmZtzcKF1Xhp38hnxfOXEvX/preview'
            },
            {
                id: 83,
                key: 'ELEKTRA',
                name: 'ELEKTRA',
                description: 'Elektra (Jennifer Garner), tras recuperarse de las mortales heridas sufridas en "Daredevil", se conviertre en la más peligrosa asesina del mundo. Una vez asignada su última misión, Elektra tomará una decisión que llevará su vida en una nueva dirección... o la destruirá para siempre.',
                genres: [
                    'accion',
                    'fantasia',
                    'scifi'
                ],
                rate: '8.6',
                length: '1hr 37mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/tPNM1iP7YS9w4OQsBOChLzbHmBF.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/muuUBPhE8qy5cJIB1XReY7VBkzN.jpg',
                url: 'https://drive.google.com/file/d/1vjuuu9WhCJoDy5z9ZdZv6c0ad7hLXuFl/preview'
            },
            {
                id: 84,
                key: 'X-MEN-ORIGENES',
                name: 'X-MEN ORIGENES',
                description: 'Precuela de la película X-Men. Situada 17 años antes, narra los inicios del arma X y la forma en la que Wolverine se convirtió en mutante. Logan, convertido en un mutante que se hace llamar Wolverine, y que es capaz de sacar unas afiladas garras y de una fuerza y agilidad sobrehumana, ultima su venganza contra Victor Creed, culpable de la muerte de su novia. Mientras tanto, otros mutantes se acogen al programa X para unir sus fuerzas..',
                genres: [
                    'accion',
                    'fantasia',
                    'scifi'
                ],
                rate: '8.6',
                length: '1hr 47mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/lQAiASSFzY5SMud5f0Gu0C0jLlJ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/wvqdJLVh0mSblly7UnYFPEk04Wd.jpg',
                url: 'https://drive.google.com/file/d/1C55mGmZc6LewpmLpcV8CimjGrtws4plS/preview'
            },
            {
                id: 85,
                key: 'ESCUADRON-SUICIDA',
                name: 'ESCUADRON SUICIDA',
                description: 'Mientras el gobierno de EE.UU no tiene claro cómo responder a una visita alienígena a la Tierra con intenciones malignas, Amanda El Muro Waller, la líder de la agencia secreta A.R.G.U.S., ofrece una curiosa solución: reclutar a los villanos más crueles, con habilidades letales e incluso mágicas, para que trabajen para ellos. Sin demasiadas opciones a dar una negativa, los ocho supervillanos más peligrosos del mundo acceden a colaborar con el Ejecutivo en peligrosas misiones secretas, casi suicidas, para así lograr limpiar su expediente.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura',
                    'scifi'
                ],
                rate: '7.8',
                length: '2hr 3mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/9ymhU7NclJr29MpZnBQbJurYbuc.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/1Nn2aBWB1x91GmvFm9F5SM2nQl3.jpg',
                url: 'https://drive.google.com/file/d/1G1co2MBwhRsIV_cU0AUAgSCVrJz1AqNC/preview'
            },
            {
                id: 86,
                key: 'LOS-CUATROS-FANTASTICOS',
                name: 'LOS CUATROS FANTASTICOS',
                description: 'Cuatro astronautas se convierten en superhéroes tras ser contaminados en el espacio exterior. En compañía del benefactor del proyecto, el ambicioso Von Doom (Julian McMahon), los cuatro parten para la exploración de sus vidas. La misión discurre sin incidentes hasta que Reed descubre que hay un error de cálculo en la velocidad con la que se acerca la tormenta. En unos minutos, el umbral de este fenómeno atmosférico está sobre ellos. La estación espacial se ve engullida por turbulentas nubes de radiación cósmica que cambian el genoma de la tripulación. Su ADN se ve irrevocablemente alterado.... y ése va a ser su futuro. De regreso a la Tierra, los efectos de la exposición muestran rápidamente sus primeros síntomas brindando a cada uno de ellos poderes sobrenaturales, convirtiéndose en Los Cuatro Fantásticos: Míster Fantástico, La Chica Invisible, La Antorcha Humana y La Cosa.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura',
                    'scifi'
                ],
                rate: '7.1',
                length: '1hr 45mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ij3Nl6Jlx3CJBwXbIFaYYz1acna.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/beAj6f4tiqoRZxqOczYljjitNtC.jpg',
                url: 'https://drive.google.com/file/d/1JbYVrZPd-IKHG18Y4zU8VuJPYiXEGCa8/preview'
            },
            {
                id: 87,
                key: 'LOS-CUATROS-FANTASTICOS-Y-SILVER-SURFER',
                name: 'LOS CUATROS FANTASTICOS Y SILVER SURFER',
                description: 'La primera familia de superhéroes de Marvel, los Cuatro Fantásticos, se enfrentan a su mayor reto hasta la fecha cuando un enigmático heraldo intergaláctico, Estela Plateada, llega a la Tierra para prepararla para su destrucción. Mientras Estela Plateada recorre el mundo sembrando la destrucción, Reed, Sue, Johnny y Ben deben desentrañar el misterio de dicho personaje, y hacer frente al sorprendente regreso de su mortal enemigo el Doctor Muerte, antes de perder toda esperanza.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura',
                    'scifi'
                ],
                rate: '7.1',
                length: '1hr 32mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/tvFjow9ET16axWcQdXSBqehiFL1.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/4hPJT531skippmci5BfGrJYGfRv.jpg',
                url: 'https://drive.google.com/file/d/1w7WHhvLT3ni61KYsAQuAZhkKAUQnzdp5/preview'
            },
            {
                id: 88,
                key: 'GHOST-RIDER-EL-VENGADOR-FANTASMA',
                name: 'GHOST RIDER EL VENGADOR FANTASMA',
                description: 'Adaptación del famoso cómic de la Marvel. Hace mucho tiempo, la superestrella de las acrobacias en moto, Johnny Blaze (Nicolas Cage) hizo un trato con el diablo para proteger a los que más quería: su padre y su novia de la juventud, Roxanne (Eva Mendes). Ahora, el diablo ha venido a cobrar su deuda. De día, Johnny es un motero acróbata temerario... pero de noche, en presencia del diablo, se convierte en Ghost Rider, un cazarecompensas de demonios deshonestos. Obligado a hacer la voluntad del diablo, Johnny está decidido a enfrentarse a su destino y utilizar su maldición y sus poderes para defender al inocente.',
                genres: [
                    'accion',
                    'fantasia',
                    'suspenso'
                ],
                rate: '7.0',
                length: '1hr 50mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/beWg4c9XKFbmtLmMM6dIJYFS5XJ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ohfWCHT65P7b3kQvZnoy2BL95MB.jpg',
                url: 'https://drive.google.com/file/d/1Dfrfg1TQzyX2Mn8YpELtAQd1NYbh4owA/preview'
            },
            {
                id: 89,
                key: 'GHOST-RIDER-EL-CONTRATO-DE-SAN-VENGANZA',
                name: 'GHOST RIDER EL CONTRATO DE SAN VENGANZA',
                description: 'Nueva adaptación del cómic "El motorista fantasma". Con el fin de controlar sus deseos de venganza, Johnny Blaze (Nicolas Cage), que ve sus poderes como una maldición, vive apartado del mundo y sin relacionarse con nadie, pero acaba siendo localizado por el monje Moreau, que necesita su ayuda para buscar a Nadya y a su hijo Danny antes de que los encuentre Roarke, un viejo conocido de Blaze.',
                genres: [
                    'accion',
                    'fantasia',
                    'suspenso'
                ],
                rate: '7.0',
                length: '1hr 36mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/yokkUoswEXgPiNRZvQ2XrYCEbVp.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/vDpj9KXcAXvv5Z89zfighckL7pj.jpg',
                url: 'https://drive.google.com/file/d/1Lg_kHKuenuouBeCbGPI_c6MpM7qfhdfW/preview'
            },
            {
                id: 90,
                key: 'GUARDIANES-DE-LA-GALAXIA',
                name: 'GUARDIANES DE LA GALAXIA ',
                description: 'El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuarteto de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 2mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/iAAmnDsLuse01zjzFLrhJLDqUYh.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/gkYu744gqKYvCVTm6B69eAHZJdS.jpg',
                url: 'https://drive.google.com/file/d/1ys0qj8Y9FY773WsoifQYoS8YbgmFKagj/preview'
            },
            {
                id: 91,
                key: 'GUARDIANES-DE-LA-GALAXIA-VOL2',
                name: 'GUARDIANES DE LA GALAXIA-VOL2',
                description: 'Una poderosa raza alienígena contrata a los Guardianes para que protejan sus valiosas baterías de energía, pero, cuando Rocket las roba, los alienígenas envían a sus tropas de combate a vengarse de ellos. Mientras tratan de escapar con vida, intentan resolver el misterio de los verdaderos orígenes de Peter Quill.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 17mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/4KJ97gaTICl9cTMqoBCVoKhYCaF.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/tM894AtE7UQTJEoQG6qF6mdfSUT.jpg',
                url: 'https://drive.google.com/file/d/1onvkUqScbMFFSq3HEw8meB6_6fPiRGMy/preview'
            },
            {
                id: 92,
                key: 'IRON-MAN',
                name: 'IRON MAN',
                description: 'El multimillonario fabricante de armas Tony Stark debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en "El hombre de hierro" para combatir el mal a escala global.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.2',
                length: '2hr 6mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/8tZ1KaRTGfIGtfowZRWa9I71qbU.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/qbozjOW2txxIbscWfakaq8suPow.jpg',
                url: 'https://drive.google.com/file/d/1YUICQ1ejy9zjLD7w6CG01haky3rovBpm/preview'
            },
            {
                id: 93,
                key: 'IRON-MAN-2',
                name: 'IRON MAN 2',
                description: 'El mundo sabe que el multimillonario Tony Stark es Iron Man, el superhéroe enmascarado. Sometido a presiones por parte del gobierno, la prensa y la opinión pública para que comparta su tecnología con el ejército, Tony es reacio a desvelar los secretos de la armadura de Iron Man porque teme que esa información pueda caer en manos indeseables..',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.2',
                length: '2hr 5mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/5tCA3oZXLRPHmS5DIDnlu7hY4Ab.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/jesRqfL9v6HNnowe795xjmuKUXl.jpg',
                url: 'https://drive.google.com/file/d/1ZvI6oS2hDLKbNqHEGXxdqDkJ_F3Y9iZL/preview'
            },
            {
                id: 94,
                key: 'IRON-MAN-3',
                name: 'IRON MAN 3',
                description: 'El descarado y brillante empresario Tony Stark/Iron Man se enfrentará a un enemigo cuyo poder no conoce límites. Cuando Stark comprende que su enemigo ha destruido su universo personal, se embarca en una angustiosa búsqueda para encontrar a los responsables. Este viaje pondrá a prueba su entereza una y otra vez. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto para proteger a las personas que quiere.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '8.2',
                length: '2hr 10mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jcs4B2AiNPbVm8GFXNaTmvymR7x.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/tKa1gmGKAUVYnflYcadipeL3d9h.jpg',
                url: 'https://drive.google.com/file/d/1lLW5ujykpI85gPU46HzUoX9AGhvIwZo6/preview'
            },
            {
                id: 95,
                key: 'KICK-ASS',
                name: 'KICK-ASS',
                description: 'Dave Lizewski es un estudiante de instituto que pasa desapercibido por todos, aficionado a los cómics, de donde saca un día la idea de convertirse en un superhéroe, aunque no tenga superpoderes, no haya seguido un duro entrenamiento y ni siquiera tenga una razón significativa para ello. Pero la vida de Dave cambiará para siempre cuando se encuentre con un par de locos vigilantes -la terremoto de 11 años Hit Girl y su padre, Big Daddy- y forje amistad con otro joven luchador contra el crimen, Red Mist. Y cuando todos se tengan que enfrentar al jefe de la mafia local, Frank DAmico, sus alianzas y sus verdaderas habilidades serán puestas a prueba.',
                genres: [
                    'accion',
                    'crimen',
                    'scifi'
                ],
                rate: '7.2',
                length: '1hr 57mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/lXDsqmcn0JP4YPdpNdub0xMiS8b.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/qHhuTmhRCYvj9ls4STFGnaeAPhR.jpg',
                url: 'https://drive.google.com/file/d/1wRsVuWLuSx5wFhBVmzX5aA0PGVQCHYIl/preview'
            },
            {
                id: 96,
                key: 'KICK-ASS-2',
                name: 'KICK-ASS 2',
                description: 'Secuela de la aclamada película Kick-Ass (2010), basada en el cómic de Mark Millar. Después de que la loca valentía de Kick-Ass (Aaron Taylor-Johnson) inspirara a toda una oleada de nuevos defensores del bien dirigidos por el durísimo coronel Stars and Stripes (Jim Carrey), nuestro héroe decide unirse a ellos. Pero cuando Bruma Roja (Christopher Mintz-Plasse), que regresa con el nombre de The Mother, decide deshacerse de los superhéroes aficionados, solo Hit Girl (Chloë Grace Moretz) podrá impedir que los aniquile.',
                genres: [
                    'accion',
                    'crimen',
                    'scifi'
                ],
                rate: '7.2',
                length: '1hr 43mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vUPNbrTpHkxIr7HZcvxFxvAWPbC.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/AkBLdx5W9rqUgQwm3jwjuRdFact.jpg',
                url: 'https://drive.google.com/file/d/1dFzqQ-sZaF1YxRjCcKroywWqsBbE9tnm/preview'
            },
            {
                id: 97,
                key: 'LA-MUJER-MARAVILLA',
                name: 'LA MUJER MARAVILLA',
                description: 'Antes de ser Wonder Woman, era Diana, princesa de las Amazonas, entrenada para ser una guerrera invencible. Diana fue criada en una isla paradisíaca protegida. Hasta que un día un piloto norteamericano, que tiene un accidente y acaba en sus costas, le habla de un gran conflicto existente en el mundo, la Primera Guerra Mundial. Diana decide salir de la isla convencida de que puede detener la terrible amenaza. Mientras lucha junto a los hombres en la guerra que acabará con todas las guerras, Diana descubre todos sus poderes y su verdadero destino.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.3',
                length: '2hr 21mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/yjzHtHSAPDdRQejnTyFbifX2gef.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/aPEhtVLrZRnJufKHwbHgqwirv7J.jpg',
                url: 'https://drive.google.com/file/d/1cwm6n5MkvgLGrIRJBsAh1PB5r5wGIFPb/preview'
            },
            {
                id: 98,
                key: 'LOGAN',
                name: 'LOGAN',
                description: 'Sin sus poderes, por primera vez, Lobezno es verdaderamente vulnerable. Después de una vida de dolor y angustia, sin rumbo y perdido en el mundo donde los X-Men son leyenda, su mentor Charles Xavier lo convence de asumir una última misión: proteger a una joven que será la única esperanza para la raza mutante.',
                genres: [
                    'accion',
                    'drama',
                    'scifi'
                ],
                rate: '7.8',
                length: '2hr 17mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/hbJkbdwLNjHTomnXPD3jWlYm2U1.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/qTdCfGyDisY9e8BLycszlyTsPWx.jpg',
                url: 'https://drive.google.com/file/d/1ct3PmnDDh84QFjUnGpFrsZCEbgBRi1pi/preview'
            },
            {
                id: 99,
                key: 'SHAZAM',
                name: 'SHAZAM',
                description: 'Todos llevamos un superhéroe dentro, solo se necesita un poco de magia para sacarlo a la luz. Cuando Billy Batson, un niño de acogida de 14 años que ha crecido en las calles, grita la palabra SHAZAM!se convierte en el Superhéroe adulto Shazam, por cortesía de un antiguo mago. Dentro de un cuerpo musculoso y divino, Shazam esconde un corazón de niño. Pero lo mejor es que en esta versión de adulto consigue realizar todo lo que le gustaría hacer a cualquier adolescente con superpoderes: ¡divertirse con ellos! ¿Volar? ¿Tener visión de rayos X? ¿Disparar un rayo con las manos? ¿Saltarse el examen de sociales? Shazam va a poner a prueba los límites de sus habilidades con la inconsciencia propia de un niño. Pero necesitará dominar rápidamente esos poderes para luchar contra las letales fuerzas del mal que controla el Dr. Thaddeus Sivana.',
                genres: [
                    'accion',
                    'comedia',
                    'scifi'
                ],
                rate: '7.0',
                length: '2hr 12mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/4f5Rz8uYpcTvo1hHKcQRSaay0ek.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/8q5q6wR67oIPpZk4zrgkMU1EgSp.jpg',
                url: 'https://drive.google.com/file/d/10z1IaPT5nKo-wF8Pz__NJLkufO4FgenP/preview'
            },
            {
                id: 100,
                key: 'LIGA-DE-LA-JUSTICIA',
                name: 'LIGA DE LA JUSTICIA',
                description: 'Motivado por la fe que había recuperado en la humanidad e inspirado por la acción altruista de Superman, Bruce Wayne recluta la ayuda de su nueva aliada, Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman se mueven rápidamente para intentar encontrar y reclutar un equipo de metahumanos que combata esta nueva amenaza. El problema es que a pesar de la formación de esta liga de héroes sin precedentes (Batman, Wonder Woman, Aquaman, Cyborg y Flash) puede que sea demasiado tarde para salvar el planeta de una amenaza de proporciones catastróficas.',
                genres: [
                    'accion',
                    'aventura',
                    'scifi'
                ],
                rate: '7.5',
                length: '2hr 1mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/A2AnLbZmaHyPA6oHjgri3KPjxoe.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/kpYGvWA9u4C1dAwZsnjHv7abtiq.jpg',
                url: 'https://drive.google.com/file/d/1f1432ThuDYf3VELvQWANWFRwksMxl2pl/preview'
            },
            {
                id: 101,
                key: 'SPAWN',
                name: 'SPAWN',
                description: 'Un mercenario llamado Al Simmons es traicionado y asesinado por su diabólico jefe. Cuando baja a los infiernos hace un pacto con el diablo para volver a la tierra bajo la figura de Spawn, y así poder volver a ver a su mujer.',
                genres: [
                    'accion',
                    'aventura',
                    'fantasia',
                    'terror',
                    'scifi'
                ],
                rate: '6.5',
                length: '1hr 36mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/hB1z8EiEhCmSUD3UK4QXm5MPxGr.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/dE0Nj2b4Qlmsa9PgyzWBT7NgAhB.jpg',
                url: 'https://drive.google.com/file/d/1087e_YNmx_5GhGOcF4DbQTlgXsw0ZVkL/preview'
            },
            {
                id: 102,
                key: 'SPIDER-MAN-REGRESO-A-CASA',
                name: 'SPIDER MAN REGRESO A CASA',
                description: 'Peter Parker comienza a experimentar su recién descubierta identidad como el superhéroe Spider-Man. Después de la experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía. Bajo la atenta mirada de su mentor Tony Stark, Peter intenta mantener una vida normal como cualquier joven de su edad, pero interrumpe en su rutina diaria el nuevo villano Vulture y, con él, lo más importante de la vida de Peter comenzará a verse amenazado.',
                genres: [
                    'accion',
                    'aventura',
                    'drama',
                    'scifi'
                ],
                rate: '7.5',
                length: '1hr 50mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h1Iq6WfE4RWc9klGvN8sdi5aR6V.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg',
                url: 'https://drive.google.com/file/d/1gW62gLqGKXSoEA7uSxUmX3Nd3QkonBrP/preview'
            },
            {
                id: 103,
                key: 'SPIDER-MAN-LEJOS-DE-CASA',
                name: 'SPIDER MAN LEJOS DE CASA',
                description: 'Peter Parker decide irse junto a Michelle Jones, Ned y el resto de sus amigos a pasar unas vacaciones a Europa después de los eventos ocurridos en Vengadores: EndGame. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuándo es reclutado por Nick Fury para unirse a Mysterio (un humano que proviene de la Tierra 833, una dimensión del multiverso, que tuvo su primera aparición en Doctor Strange) para luchar contra los elementales (cuatro entes inmortales que vienen de la misma dimensión y que dominan los cuatro elementos de la naturaleza, el fuego, el agua, el aire y la tierra) . En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con su labor.',
                genres: [
                    'accion',
                    'aventura',
                    'drama',
                    'scifi'
                ],
                rate: '7.5',
                length: '2hr 15mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/iDorDI5iNSBp57Jv5KiHHe43Y3k.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6ihyJWRLEngSnlW8HKeDOH3AfSQ.jpg',
                url: 'https://drive.google.com/file/d/1lWzooWF_kkjTeTW1xTfRkUX4muwAV3Fh/preview'
            },
            {
                id: 104,
                key: 'LOS-VENGADORES',
                name: 'LOS VENGADORES',
                description: 'Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel "Los Vengadores", el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.',
                genres: [
                    'accion',
                    'aventura',
                    'drama',
                    'scifi'
                ],
                rate: '8.0',
                length: '2hr 23mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qZ9VEmoL3OaIVkkcaneRUKSaWzA.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg',
                url: 'https://drive.google.com/file/d/1TcDp4JS9KYI746M758mHVw1pYgQRILqn/preview'
            },
            {
                id: 105,
                key: 'EL-INCREIBLE-HULK',
                name: 'EL INCREIBLE HULK',
                description: 'El científico Bruce Banner recorre el mundo tratando de encontrar una cura a su problema, en busca de un antídoto que le permita librarse de su Alter Ego. Perseguido por el ejército y por su propia rabia interna, es incapaz de sacar de su cabeza a Betty Ross. Así que se decide a volver a la civilización, donde debe enfrentarse a una criatura creada cuando el agente de la KGB, Emil Blonsky, se expone a una dosis superior de la radiación que convirtió a Bruce en Hulk. Incapaz de volver a su estado humano, Emil hace responsable a Hulk de su aterradora condición, mientras que la ciudad de Nueva York se convierte en el escenario de la última batalla entre las dos criaturas más poderosas que jamás han pisado la Tierra.',
                genres: [
                    'accion',
                    'aventura',
                    'drama',
                    'scifi'
                ],
                rate: '6.5',
                length: '1hr 54mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/p4NYZXVtgKf6aiH65QzzkUVJcsd.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/cMZI5VrSv4L8ioHApQLqUkNS99o.jpg',
                url: 'https://drive.google.com/file/d/1-pid2-fg4lMXoAf2_5XOqnMoWV87fWIh/preview'
            },
            {
                id: 106,
                key: 'EL-CASTIGADOR',
                name: 'EL CASTIGADOR',
                description: 'Frank Castle (Thomas Jane) es un agente secreto del FBI que hasta el momento ha logrado una carrera intachable. Frank también es un ex operativo de las Fuerzas Especiales. Finalmente sale del campo de batalla para trabajar en una oficina y así poder tener una vida normal con su esposa e hijo. Será entonces cuando el mundo de Frank se viene abajo por el peor temor que siempre tuvo: Su familia es ejecutada como repercusión de su último trabajo. Ahora Castle busca castigar a los asesinos, para encontrar al final lo que menos esperaba: La redención.',
                genres: [
                    'accion',
                    'crimen',
                    'drama',
                    'scifi'
                ],
                rate: '6.2',
                length: '2hr 4mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bD0VrkWxs0tmJueFy0maRjWS7dW.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/Ao7mTUqaF84o4w2prRmjNgOXjIs.jpg',
                url: 'https://drive.google.com/file/d/1R_PONKuN8WPRR5boFpILZeXcJPSqjfuR/preview'
            },
            {
                id: 107,
                key: 'EL-CASTIGADOR-ZONA-DE-GUERRA',
                name: 'EL CASTIGADOR ZONA DE GUERRA',
                description: 'Película basada en el anti-héroe de Marvel Frank Castle, también conocido como "El castigador". Continuando su cruzada para castigar a criminales violentos en América, el agente del FBI Frank Castle (Ray Stevenson), llega a Nueva York en busca de un jefe que controla los bajos fondos de la ciudad. ',
                genres: [
                    'accion',
                    'crimen',
                    'drama',
                    'scifi'
                ],
                rate: '5.7',
                length: '1hr 47mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/8X2r09vhgGc4dk0Es3jr2gFSD8o.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/bpanpGm2owc3vJpkzViLKj8VpBx.jpg',
                url: 'https://drive.google.com/file/d/1UCzofIR0VdH2YFZawmYe70eH8VIrw8uA/preview'
            },
            {
                id: 108,
                key: 'THOR',
                name: 'THOR',
                description: 'Thor es un arrogante y codicioso guerrero cuya imprudencia desata una antigua guerra. Por ese motivo, su padre Odín lo castiga desterrándolo a la Tierra para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Cuando el villano más peligroso de su mundo envía a la Tierra a las fuerzas más oscuras de Asgard, Thor se dará cuenta de lo que realmente hace falta para ser un verdadero héroe.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '6.7',
                length: '1hr 55mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jCEhPVVg14omDgWPN7vyAFUWzXZ.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/8rk1VyBbMbb6tVLQ8FzfyFxx5EP.jpg',
                url: 'https://drive.google.com/file/d/1JdThcOsELC3xit8RoDSSBr_QSr07wRYa/preview'
            },
            {
                id: 109,
                key: 'THOR-UN-MUNDO-OSCURO',
                name: 'THOR UN MUNDO OSCURO',
                description: 'Thor lucha por restablecer el orden en el cosmos, pero una antigua raza liderada por el vengativo Malekith regresa con el propósito de volver a sumir el universo en la oscuridad. Se trata de un villano con el que ni siquiera Odín y Asgard se atreven a enfrentarse; por esa razón, Thor tendrá que emprender un viaje muy peligroso, durante el cual se reunirá con Jane Foster y la obligará a sacrificarlo todo para salvar el mundo.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '6.7',
                length: '1hr 52mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/gxnXMwF2jdKPz7siwlEtHgTUqz0.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/w5T8OK5rkkE8rXadSZHyZWqfNSX.jpg',
                url: 'https://drive.google.com/file/d/1OaRfSY0WLbQbZ_mdZmUjEjY8-Hop3Sio/preview'
            },
            {
                id: 110,
                key: 'THOR-RAGNAROK',
                name: 'THOR RAGNAROK',
                description: 'Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '7.6',
                length: '2hr 11mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/sgVe7blGP5P71STv2TBXmO86qPo.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/15j6yep75STDBslA2UwgkKwtwml.jpg',
                url: 'https://drive.google.com/file/d/1qzqR6B35QouRV0ijjP4ge2EGOec_qDok/preview'
            },
            {
                id: 111,
                key: 'VENOM',
                name: 'VENOM',
                description: 'Eddie Brock (Tom Hardy) es un consolidado periodista y astuto reportero que está investigando una empresa llamada Fundación Vida. Esta fundación, dirigida por el eminente científico Carlton Drake (Riz Ahmed), está ejecutando secretamente experimentos ilegales en seres humanos y realizando pruebas que involucran formas de vida extraterrestres y amorfas conocidas como simbiontes. Durante una visita furtiva a la central, el periodista quedará infectado por un simbionte. Comenzará entonces a experimentar cambios en su cuerpo que no entiende, y escuchará una voz interior, la del simbionte Venom, que le dirá lo que tiene que hacer. Cuando Brock adquiera los poderes del simbionte que le usa como huésped, Venom tomará posesión de su cuerpo, convirtiéndole en un despiadado y peligroso súpervillano.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '6.7',
                length: '1hr 52mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jMBTJQiHAyGlZR05J2sq5coA6ew.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg',
                url: 'https://drive.google.com/file/d/1ujdQE3gmw-XWc5gNnZGbeyLCVbq9Jauv/preview'
            },
            {
                id: 112,
                key: 'WOLVERINE-INMORTAL',
                name: 'WOLVERINE INMORTAL',
                description: 'Secuela de "X-Men: la decisión final". El film se centra en la soledad del protagonista tras la desaparición definitiva de Jean Grey y otros compañeros. Logan amnésico busca respuestas sobre su pasado en el mundo del crimen organizado de Japón, donde un hombre al que salvó la vida en el pasado le ofrece algo que lleva tiempo deseando: hacer a Wolverine mortal.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '6.5',
                length: '2hr 6mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/p5IFVd8PQjcGk0KKaSP97jze3wP.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/AqIes6H9NlRoo0YjlO7exLCu72v.jpg',
                url: 'https://drive.google.com/file/d/1DtW2fehBHG7NkX3huhw7_rBPcfVGLhrU/preview'
            },
            {
                id: 113,
                key: 'X-MEN',
                name: 'X MEN',
                description: 'En un futuro cercano, la humanidad comienza a ver aparecer una nueva raza; los mutantes. Dotados de extraños y variados poderes, están agrupados en dos bandos: los que abogan por la integración y el entendimiento con la humanidad, encabezados por el doctor Charles Xavier, y los que buscan el enfrentamiento con una raza que consideran inferior y que les odia, dirigidos por Magnus, alias Magneto, un peligroso mutante con extraordinarios poderes.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '1hr 44mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bojMb5j1dOHvD1cKffI0AW9ARkk.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/a6MwSrIKmMjs5b8os7eEgQk05yx.jpg',
                url: 'https://drive.google.com/file/d/1Arptw-R3a0ndLEvb8AQZp0NDhwczsVyF/preview'
            },
            {
                id: 114,
                key: 'X-MEN-2',
                name: 'X MEN 2',
                description: 'Los mutantes son seres humanos con alguna variación genética que les dota de características especiales. También son la más moderna minoría perseguida del mundo. En medio de un clima de rabia y persecución, el profesor Xavier ha creado un instituto, un refugio, para estos seres poderosos. En este lugar los iniciados son preparados para aceptar y dominar sus habilidades, y ponerlas al servicio de la tolerancia y el combate contra la creciente histeria colectiva que está amenazando con su existencia. Pero la reputación de los mutantes será todavía peor cuando uno de ellos lanza un devastador ataque, lo que conlleva causas una pública recriminación hacia todos ellos y nuevos poderes para la Mutant Registration Act y William Stryker, un líder militar que pretende acabar con todos ellos centrándose en la escuela de X-Men.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '2hr 13mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/8JjzEdEjHCAd4VZCvgMz8M5ekFg.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/aJG4Lrm2XlwjmIY4eA538b0JHvk.jpg',
                url: 'https://drive.google.com/file/d/1l4c2hnRSmJgMjMTPpy40eGjOpjcSjIsm/preview'
            },
            {
                id: 115,
                key: 'X-MEN-3',
                name: 'X MEN 3',
                description: 'En X-Men: La decisión final, el último capítulo de la trilogía cinematográfica de los "X-Men", hay una "cura" para los mutantes que amenaza con alterar el curso de la historia. Por primera vez, los mutantes pueden elegir: seguir con su singularidad, aunque eso les aísle y les separe, o renunciar a sus poderes y convertirse en seres humanos normales. Los opuestos puntos de vista de los líderes mutantes, Charles Xavier, que aboga por la tolerancia, y Magneto, que cree en la supervivencia de los más aptos, se ven sometidos a la prueba definitiva: desencadenar la guerra que pondrá fin a todas las guerras.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '1hr 45mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/6FnWDI3mKZhfWv7NznKUFlvSdo0.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/5PkkT6BL6xPaOXSa0RjPvEPVpmp.jpg',
                url: 'https://drive.google.com/file/d/1lV2DMcv0slImSLqlEcsq8b8clC_qbLlO/preview'
            },
            {
                id: 116,
                key: 'X-MEN-APOCALIPSIS',
                name: 'X MEN APOCALIPSIS',
                description: 'Desde los albores de la civilización, fue adorado como un dios. Apocalypse, el primer y más poderoso mutante del universo X-Men de Marvel, acumuló los poderes de muchos otros mutantes, convirtiéndose en inmortal e invencible. Pero al despertar tras miles de años, se encuentra desilusionado con el mundo en que se encuentra y decide reclutar un equipo de mutantes poderosos, entre ellos a un descorazonado Magneto (Michael Fassbender), con el fin de limpiar la humanidad y crear una nueva orden mundial, sobre la cual él reinará. A medida que el destino de la tierra está en juego, Raven (Jennifer Lawrence) con la ayuda del Profesor X (James McAvoy) se unirán junto a un equipo de jóvenes X-Men para detener a su mayor enemigo y salvar así a la humanidad de la destrucción total.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '2hr 24mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/6H7kfFsH7laKnMgJtaUYtOgEYRU.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/pCssRYbILVduCYDgrcRG0T8W4FN.jpg',
                url: 'https://drive.google.com/file/d/1A9pWsXCkcoRBLtnDz6CEIfwN5syZwIhh/preview'
            },
            {
                id: 117,
                key: 'X-MEN-EL-FENIX-OSCURO',
                name: 'X MEN EL FENIX OSCURO',
                description: 'Los X-Men se enfrentan a su enemigo más poderoso: uno de sus miembros, Jean Grey. Durante una misión de rescate en el espacio, Jean casi muere al ser alcanzada por una misteriosa fuerza cósmica. Cuando regresa a casa, esa radiación la ha hecho más poderosa, pero mucho más inestable. Mientras lucha con la entidad que habita en su interior, Jean desata sus poderes de formas que no puede controlar ni comprender. Jean cae en una espiral fuera de control haciendo daño a aquellos que más ama y empieza a destruir los lazos que mantienen unidos a los X-Men.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '1hr 56mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ks3b0jNq10KmnFK9CWL1FpVEuMY.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/lkO04dvBgbipQRR4V8RdPWaLT7v.jpg',
                url: 'https://drive.google.com/file/d/1xUHBQUatIrHx7Wtg-0xXBbUXDTva3AWy/preview'
            },
            {
                id: 118,
                key: 'X-MEN-DIAS-DEL-FUTURO-PASADO',
                name: 'X MEN DIAS DEL FUTURO PASADO ',
                description: 'Ambientada en la década de los 70, los miembros de la famosa Patrulla X tendrán que evitar un futuro apocalíptico en el que los mutantes luchan por sobrevivir en campos de concentración controlados por los temibles Centinelas. Para ello, los héroes del universo Marvel deberán unificar sus fuerzas dejando a un lado la creciente enemistad de los bandos liderados por Charles Xavier y Magneto. Trask Industries, la empresa encargada de crear a estos gigantescos cazamutantes, será el origen de todos sus problemas. Tan sólo viajando en el tiempo podrán impedir la masacre que se avecina. ¿Serán capaces nuestros héroes de derrocar a la multinacional y evitar así el exterminio de su especie?',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '2hr 10mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/yTVqNNp7hWFrFtzxAo5bdVUBuz0.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/hUPgIibqZlwbhs4N08cPzzc4f5K.jpg',
                url: 'https://drive.google.com/file/d/1in86830KgydsJjnf5WukCTxf8gB8aYIh/preview'
            },
            {
                id: 119,
                key: 'X-MEN-PRIMERA-GENERACION',
                name: 'X MEN PRIMERA GENERACION',
                description: 'Comienzo de la saga de los X-Men, esta es una historia secreta que alude a conocidos acontecimientos mundiales. Antes de que los mutantes se mostraran al mundo, y antes de que cambiaran sus nombres por los de Profesor X y Magneto, Charles Xavier (James McAvoy) y Erik Lehnsherr (Michael Fassbender) eran dos jóvenes que descubrían sus poderes. No había animadversión alguna entre ellos, sino que les unía una sincera amistad y la decisión de acabar con el trabajar juntos y entrenar a un grupo de jóvenes mutantes para evitar el Armagedón nuclear. Su enemigo común: el malvado Sebastian Shaw (Kevin Bacon), un humano con poderes con el que Erik tiene una cuenta pendiente.',
                genres: [
                    'accion',
                    'scifi',
                    'aventura'
                ],
                rate: '7.0',
                length: '2hr 11mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/p63jtwBMlec3pLffxHFqs6kOI5P.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/4Ky8OcB0F7x3PRZQIiFFZyf3eIX.jpg',
                url: 'https://drive.google.com/file/d/1qP0bT2mTbisMXpwQFm9lvB6Bdt2U8svR/preview'
            },
            {
                id: 120,
                key: 'BATMAN-VS-SUPERMAN',
                name: 'BATMAN VS SUPERMAN',
                description: 'Ante el temor de las acciones que pueda llevar a cabo Superman, el vigilante de Gotham City aparece para poner a raya al superhéroe de Metrópolis, mientras que la opinión pública debate cuál es realmente el héroe que necesitan. El hombre de acero y Batman se sumergen en una contienda territorial, pero las cosas se complican cuando una nueva y peligrosa amenaza surge rápidamente, poniendo en jaque la existencia de la humanidad.',
                genres: [
                    'accion',
                    'fantasia',
                    'aventura'
                ],
                rate: '5.9',
                length: '2hr 33mins',
                img: 'https://image.tmdb.org/t/p/w220_and_h330_face/mS3t9puIjLKgoex82cu9d6G0835.jpg',
                cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/owSJfU25QxFOSaOdnMAsHqOwY7G.jpg',
                url: 'https://drive.google.com/file/d/1cuqjAUcpldPOeDbyki12R5qVAjQt4eZD/preview'
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

module.exports = ".sk-circle {\n  margin: 50px;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-circle .sk-child:before {\n  content: \"\";\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #FF0571;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n}\n\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcYXBwXFxzaGFyZWRcXGxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL0M6XFxVc2Vyc1xcc3RldmVcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxDQVJQRVRBU1xcQU1vdmllL3NyY1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkVyQks7RUZzQkwsbUJBQUE7RUFDQSxzRUFBQTtFQUNRLDhEQUFBO0FDQ1Y7O0FEQ0E7RUFDRSxnQ0FBQTtFQUVRLHdCQUFBO0FDRVY7O0FEREE7RUFDRSxnQ0FBQTtFQUVRLHdCQUFBO0FDSVY7O0FESEE7RUFDRSxnQ0FBQTtFQUVRLHdCQUFBO0FDTVY7O0FETEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDUVY7O0FEUEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDVVY7O0FEVEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDWVY7O0FEWEE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDY1Y7O0FEYkE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDZ0JWOztBRGZBO0VBQ0UsaUNBQUE7RUFFUSx5QkFBQTtBQ2tCVjs7QURqQkE7RUFDRSxpQ0FBQTtFQUVRLHlCQUFBO0FDb0JWOztBRG5CQTtFQUNFLGlDQUFBO0VBRVEseUJBQUE7QUNzQlY7O0FEckJBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQ3dCVjs7QUR2QkE7RUFDRSw0QkFBQTtFQUNRLG9CQUFBO0FDMEJWOztBRHpCQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUM0QlY7O0FEM0JBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQzhCVjs7QUQ3QkE7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FDZ0NWOztBRC9CQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUNrQ1Y7O0FEakNBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQ29DVjs7QURuQ0E7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FDc0NWOztBRHJDQTtFQUNFLDhCQUFBO0VBQ1Esc0JBQUE7QUN3Q1Y7O0FEdkNBO0VBQ0UsOEJBQUE7RUFDUSxzQkFBQTtBQzBDVjs7QUR6Q0E7RUFDRSw4QkFBQTtFQUNRLHNCQUFBO0FDNENWOztBRDFDQTtFQUNFO0lBQ0UsMkJBQUE7SUFDUSxtQkFBQTtFQzZDVjtFRDVDRTtJQUNBLDJCQUFBO0lBQ1EsbUJBQUE7RUM4Q1Y7QUFDRjs7QUQzQ0E7RUFDRTtJQUNFLDJCQUFBO0lBQ1EsbUJBQUE7RUM2Q1Y7RUQ1Q0U7SUFDQSwyQkFBQTtJQUNRLG1CQUFBO0VDOENWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5zay1jaXJjbGUge1xyXG4gIG1hcmdpbjogNTBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zay1jaXJjbGUgLnNrLWNoaWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTgge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxyXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7IH1cclxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzOyB9XHJcbi5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yczsgfVxyXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7IH1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfSA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfSA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4iLCIuc2stY2lyY2xlIHtcbiAgbWFyZ2luOiA1MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjA1NzE7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU1IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU4IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlOSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUzOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU0OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTY6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU3OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTk6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMDpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSIsIiRwaW5rOiAjRkYwNTcxO1xyXG4kZ3JleTogI2YzZjNmMztcclxuJGJsdWU6ICMxODJCNTQ7XHJcbiRsaWdodEJsdWU6ICMwMEI1RTk7XHJcbiRsaWdodDogI2ZmZmZmZjtcclxuJGRhcms6ICMwMDAwMDA7XHJcbiR5ZWxsb3c6ICNGRkIxMUE7XHJcblxyXG5cclxuJHByaW1hcnktY29sb3I6ICRibHVlO1xyXG4kcHJpbWFyeS1jb2xvci1kYXJrOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDgpO1xyXG4kcHJpbWFyeS1jb2xvci1saWdodDogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTApO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAkcGluaztcclxuXHJcbiRwcmltYXJ5LWxpbms6ICRibHVlO1xyXG4kc2Vjb25kYXJ5LWxpbms6ICRsaWdodEJsdWU7XHJcblxyXG4kcHJpbWFyeS10aXRsZTogJGxpZ2h0O1xyXG4kc2Vjb25kYXJ5LXRpdGxlOiAkeWVsbG93O1xyXG5cclxuIl19 */"

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

module.exports = __webpack_require__(/*! C:\Users\steve\OneDrive\Escritorio\CARPETAS\AMovie\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map