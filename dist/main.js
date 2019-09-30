(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	],
	"app/auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/admin/admin-user-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'admin',
        canActivate: [_admin_user_guard__WEBPACK_IMPORTED_MODULE_3__["OnlyAdminUsersGuard"]],
        children: [{
                path: '',
                component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
            }]
    }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-user-guard.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/admin-user-guard.ts ***!
  \*******************************************/
/*! exports provided: OnlyAdminUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyAdminUsersGuard", function() { return OnlyAdminUsersGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnlyAdminUsersGuard = /** @class */ (function () {
    function OnlyAdminUsersGuard() {
    }
    OnlyAdminUsersGuard.prototype.canActivate = function () {
        var user = window.user;
        return user && user.isAdmin;
    };
    OnlyAdminUsersGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OnlyAdminUsersGuard);
    return OnlyAdminUsersGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>HELLO FROM ADMIN PAGE</h4>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user-guard */ "./src/app/admin/admin-user-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
            ],
            providers: [
                _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyAdminUsersGuard"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model-list/model-list.component */ "./src/app/model-list/model-list.component.ts");
/* harmony import */ var _model_main_model_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-main/model-main.component */ "./src/app/model-main/model-main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__["ModelListComponent"]
    }, {
        path: 'model-list',
        component: _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_3__["ModelListComponent"]
    }, {
        path: 'model',
        component: _model_main_model_main_component__WEBPACK_IMPORTED_MODULE_4__["ModelMainComponent"]
    }, {
        path: 'model/:id',
        component: _model_main_model_main_component__WEBPACK_IMPORTED_MODULE_4__["ModelMainComponent"]
    }, {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule'
    }, {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [user]=\"user\"></app-header>\n<div class=\"wrapper-app\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, domSanitizer, matIconRegistry) {
        this.authService = authService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.registerSvgIcons();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init this.user on startup
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
        });
        // update this.user after login/register/logout
        this.userSubscription = this.authService.$userSource.subscribe(function (user) {
            _this.user = user;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate('');
    };
    AppComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.registerSvgIcons = function () {
        var _this = this;
        [
            'close',
            'add',
            'add-blue',
            'airplane-front-view',
            'air-station',
            'balloon',
            'boat',
            'cargo-ship',
            'car',
            'catamaran',
            'clone',
            'convertible',
            'delete',
            'drone',
            'fighter-plane',
            'fire-truck',
            'horseback-riding',
            'motorcycle',
            'railcar',
            'railroad-train',
            'rocket-boot',
            'sailing-boat',
            'segway',
            'shuttle',
            'space-shuttle',
            'steam-engine',
            'suv',
            'tour-bus',
            'tow-truck',
            'transportation',
            'trolleybus',
            'water-transportation',
        ].forEach(function (icon) {
            _this.matIconRegistry.addSvgIcon(icon, _this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/" + icon + ".svg"));
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/header.interceptor */ "./src/app/interceptors/header.interceptor.ts");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "./src/app/interceptors/http-error.interceptor.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _model_main_model_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model-main/model-main.component */ "./src/app/model-main/model-main.component.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/model-list/model-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _model_main_model_main_component__WEBPACK_IMPORTED_MODULE_14__["ModelMainComponent"],
                _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_15__["ModelListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__["AdminModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_header_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthHeaderInterceptor"],
                    multi: true,
                }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["CatchErrorInterceptor"],
                    multi: true,
                }],
            entryComponents: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var user = window.user;
        if (user)
            return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: 'auth',
        children: [{
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full'
            }, {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            }]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.example-card {\n  width: 400px;\n  margin: 10% auto; }\n\n.mat-card-title {\n  font-size: 16px; }\n\n.title {\n  text-align: center;\n  font-size: 45px;\n  color: #4b4b4b;\n  margin: 16px 0; }\n\n.subtitle {\n  text-align: center;\n  font-size: 24px;\n  margin-top: 0;\n  font-size: 18px;\n  font-weight: 300; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-group input {\n    width: 100%;\n    padding: 14px 16px;\n    line-height: 1;\n    font-weight: 300;\n    font-family: inherit;\n    font-size: 16px;\n    border-radius: 3px;\n    border: 1px solid #c3c3c3;\n    color: inherit;\n    background-color: white;\n    outline: none;\n    -webkit-appearance: none; }\n\n.form-group .error {\n    color: #ff6347;\n    font-size: 12px;\n    margin-top: 5px;\n    padding-left: 17px; }\n\n.form-submit {\n  display: flex;\n  justify-content: flex-end; }\n\n.button-link {\n  color: #47c9af;\n  font-weight: bold;\n  font-family: inherit;\n  font-size: inherit;\n  text-decoration: none;\n  border: none;\n  cursor: pointer; }\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  margin: 2rem 0;\n  font-size: 14px;\n  color: #8b8b8b;\n  font-weight: 300; }\n\n.social-form {\n  padding-top: 1rem;\n  border-top: 1px solid #c3c3c3; }\n\n.social-form button {\n    width: calc(50% - 10px);\n    font-weight: bold;\n    color: #8b8b8b;\n    padding: 6px 1rem;\n    border-radius: 3px;\n    border: 1px solid #c3c3c3; }\n\n.social-form button:first-child {\n      margin-right: 20px !important; }\n\n.social-form button img {\n      position: absolute;\n      left: 10px;\n      height: 20px;\n      top: 13px; }\n\n.auth-container {\n  max-width: 500px;\n  width: 100%;\n  margin: 0 auto;\n  padding-left: 1rem;\n  padding-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.storage */ "./src/app/auth/token.storage.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _shared_component_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/component.service */ "./src/app/shared/component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _token_storage__WEBPACK_IMPORTED_MODULE_6__["TokenStorage"],
                _shared_model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"],
                _shared_component_service__WEBPACK_IMPORTED_MODULE_9__["ComponentService"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _token_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.storage */ "./src/app/auth/token.storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, token) {
        this.http = http;
        this.token = token;
        this.$userSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$error = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/login', {
                email: email,
                password: password
            }).subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                _this.token.saveToken(data.token);
                observer.complete();
            }, function (e) { _this.$error.next(e); });
        });
    };
    AuthService.prototype.register = function (fullname, email, password, repeatPassword) {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.http.post('/api/auth/register', {
                fullname: fullname,
                email: email,
                password: password,
                repeatPassword: repeatPassword
            }).subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                _this.token.saveToken(data.token);
                observer.complete();
            });
        });
    };
    AuthService.prototype.setUser = function (user) {
        if (user)
            user.isAdmin = (user.roles.indexOf('admin') > -1);
        this.$userSource.next(user);
        window.user = user;
    };
    AuthService.prototype.getUser = function () {
        return this.$userSource.asObservable();
    };
    AuthService.prototype.me = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var tokenVal = _this.token.getToken();
            if (!tokenVal)
                return observer.complete();
            _this.http.get('/api/auth/me').subscribe(function (data) {
                observer.next({ user: data.user });
                _this.setUser(data.user);
                observer.complete();
            });
        });
    };
    AuthService.prototype.signOut = function () {
        this.token.signOut();
        this.setUser(null);
        delete window.user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _token_storage__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Welcome back!</h1>\n<p class=\"subtitle\">Log in below and make work flow.</p>\n<p class=\"subtitle\" *ngIf=\"showError\" style=\"color: red\">Incorrect login or password</p>\n\n<div class=\"auth-container\">\n  <form action=\"\">\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"email\"\n        class=\"input\"\n        placeholder=\"Your email\"\n        [(ngModel)]=\"email\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        class=\"input\"\n        [(ngModel)]=\"password\"\n        name=\"password\"\n        placeholder=\"Your password\"\n      />\n    </div>\n    <div class=\"form-submit\">\n      <button (click)=\"login()\" mat-raised-button color=\"primary\">\n        Login\n      </button>\n    </div>\n  </form>\n  <div class=\"form-footer df jc-b\">\n    <span>\n        No account yet?\n      <a class=\"button-link\" [routerLink]=\"['/auth/register']\">Sign up</a>\n    </span>\n    <span>\n      <a class=\"button-link\">Forgot your password?</a>\n    </span>\n  </div>\n  <!-- <form action=\"\" class=\"social-form\">\n    <button mat-stroked-button>\n      <img src=\"assets/icons/btn_google.svg\" alt=\"\" />\n      Login with Google\n    </button>\n    <button mat-stroked-button>\n      <img src=\"assets/icons/btn_linkedin.svg\" alt=\"\" />\n      Login with LinkedIn\n    </button>\n  </form> -->\n</div>\n\n<!-- <mat-card class=\"example-card\">\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Email\"\n                [(ngModel)]=\"email\"\n                name=\"email\"\n                required\n              />\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Password\"\n                [(ngModel)]=\"password\"\n                type=\"password\"\n                name=\"password\"\n                required\n              />\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n    <span\n      >Don't have an account ?\n      <a [routerLink]=\"['/auth/register']\">register</a> here</span\n    >\n  </mat-card-actions>\n</mat-card> -->"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.$error.subscribe(function (e) {
            _this.showError = true;
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .subscribe(function (data) {
            _this.router.navigate(['model-list']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Create a Cogintech Account</h1>\n<p class=\"subtitle\">Sign up below and make work flow.</p>\n<div class=\"auth-container\">\n  <form action=\"\" [formGroup]=\"userForm\">\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        class=\"input\"\n        placeholder=\"Your name\"\n        formControlName=\"fullname\"\n        name=\"fullname\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"email\"\n        class=\"input\"\n        formControlName=\"email\"\n        name=\"email\"\n        placeholder=\"Your email address\"\n      />\n      <div class=\"error\" *ngIf=\"userForm.controls['email'].invalid && userForm.controls['email'].touched\">\n          Password mismatch\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <input\n        class=\"input\"\n        formControlName=\"password\"\n        type=\"password\"\n        name=\"password\"\n        placeholder=\"Choose a password\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <input\n        class=\"input\"\n        formControlName=\"repeatPassword\"\n        type=\"password\"\n        name=\"repeatPassword\"\n        placeholder=\"Repeat a password\"\n      />\n      <div class=\"error\" *ngIf=\"userForm.controls['repeatPassword'].invalid && userForm.controls['repeatPassword'].touched\">\n        Password mismatch\n      </div>\n    </div>\n    <div class=\"form-submit\">\n      <button (click)=\"register()\" mat-raised-button color=\"primary\">\n        Sign up free\n      </button>\n    </div>\n    <div class=\"form-footer\">\n      <span>\n        By signing up you agree to our\n        <a target=\"_blank\" class=\"button-link\">Terms of Use</a> and\n        <a target=\"_blank\" class=\"button-link\">Privacy Policy</a>.\n      </span>\n    </div>\n  </form>\n  <!-- <form action=\"\" class=\"social-form\">\n    <button mat-stroked-button>\n      <img src=\"assets/icons/btn_google.svg\" alt=\"\" />\n      Sign up with Google\n    </button>\n    <button mat-stroked-button>\n      <img src=\"assets/icons/btn_linkedin.svg\" alt=\"\" />\n      Sign up with LinkedIn\n    </button>\n  </form> -->\n  <div class=\"form-footer\">\n    <span>\n      Already got an account?\n      <a class=\"button-link\" [routerLink]=\"['/auth/login']\">Login</a>\n    </span>\n  </div>\n</div>\n\n<!-- <mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <table cellspacing=\"0\" [formGroup]=\"userForm\">\n        <tr>\n          <td>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Fullname\"\n                formControlName=\"fullname\"\n                name=\"fullname\"\n                required\n              />\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Email\"\n                formControlName=\"email\"\n                name=\"email\"\n                required\n              />\n              <mat-error *ngIf=\"email.invalid && email.errors.email\"\n                >Invalid email address</mat-error\n              >\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Password\"\n                formControlName=\"password\"\n                type=\"password\"\n                name=\"password\"\n                required\n              />\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Reapet Password\"\n                formControlName=\"repeatPassword\"\n                type=\"password\"\n                name=\"repeatPassword\"\n                required\n              />\n              <mat-error\n                *ngIf=\"\n                  repeatPassword.invalid && repeatPassword.errors.passwordMatch\n                \"\n                >Password mismatch</mat-error\n              >\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">\n      Register\n    </button>\n    <span\n      >Allrady have an account ?\n      <a [routerLink]=\"['/auth/login']\">login</a> here</span\n    >\n  </mat-card-actions>\n</mat-card> -->"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.passwordsMatchValidator])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.passwordsMatchValidator = function (control) {
        var password = control.root.get('password');
        return password && control.value !== password.value ? {
            passwordMatch: true
        } : null;
    };
    Object.defineProperty(RegisterComponent.prototype, "fullname", {
        get: function () { return this.userForm.get('fullname'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.userForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "repeatPassword", {
        get: function () { return this.userForm.get('repeatPassword'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.userForm);
        console.log(this.userForm.controls['repeatPassword'].invalid);
        console.log(this.userForm.controls['repeatPassword'].touched);
        if (!this.userForm.valid)
            return;
        var _a = this.userForm.getRawValue(), fullname = _a.fullname, email = _a.email, password = _a.password, repeatPassword = _a.repeatPassword;
        this.authService.register(fullname, email, password, repeatPassword)
            .subscribe(function (data) {
            _this.router.navigate(['']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ../auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/token.storage.ts":
/*!***************************************!*\
  !*** ./src/app/auth/token.storage.ts ***!
  \***************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TOKEN_KEY = 'AuthToken';
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.clear();
    };
    TokenStorage.prototype.saveToken = function (token) {
        if (!token)
            return;
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorage.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_KEY);
    };
    TokenStorage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenStorage);
    return TokenStorage;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar color=\"primary\">\n    <div [ngClass]=\"{'container': router.url.slice(1, 5) === 'auth'}\" class=\"df full-width\">\n      <a [routerLink]=\"['/']\" class=\"logo\"></a>\n      <span class=\"example-spacer\"></span>\n      <button   *ngIf=\"!user\" [routerLink]=\"['/auth/register']\" mat-raised-button color=\"primary\" class=\"m-r-10\">\n        Sign up free\n      </button>\n      <button\n        mat-button\n        color=\"primary\"\n        [routerLink]=\"['/auth/login']\"\n        *ngIf=\"!user\"\n      >\n        Login\n      </button>\n      <div>\n        <a class=\"links side\" *ngIf=\"user\" [matMenuTriggerFor]=\"menu\">\n          <mat-icon>account_circle</mat-icon>{{ user.fullname }}\n        </a>\n        <mat-menu #menu=\"matMenu\">\n          <button\n            mat-menu-item\n            *ngIf=\"user && user.isAdmin\"\n            [routerLink]=\"['/admin']\"\n          >\n            admin\n          </button>\n          <button mat-menu-item (click)=\"logout()\">logout</button>\n        </mat-menu>\n      </div>\n    </div>\n  </mat-toolbar>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100%; }\n  header .logo {\n    background-image: url('logo.png');\n    width: 120px;\n    height: 40px;\n    background-size: contain;\n    background-repeat: no-repeat; }\n  header .example-spacer {\n    flex: 1 1 auto; }\n  header .links {\n    color: white;\n    font-family: \"Helvetica Neue\", sans-serif;\n    font-size: 15px;\n    font-weight: initial;\n    letter-spacing: -1px;\n    line-height: 1;\n    text-align: center;\n    padding: 15px; }\n  header .links.side {\n      padding: 0 14px; }\n  header .mat-toolbar {\n    background: white;\n    height: 58px;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.11);\n    z-index: 10;\n    position: relative; }\n  header .mat-icon {\n    vertical-align: middle;\n    margin: 0 5px;\n    color: #673ab7; }\n  header a {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.signOut();
        this.navigate("/auth/login");
    };
    HeaderComponent.prototype.navigate = function (link) {
        this.router.navigate([link]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/header.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/header.interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var _auth_token_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/token.storage */ "./src/app/auth/token.storage.ts");

var AuthHeaderInterceptor = /** @class */ (function () {
    function AuthHeaderInterceptor() {
    }
    AuthHeaderInterceptor.prototype.intercept = function (req, next) {
        // Clone the request to add the new header
        var token = new _auth_token_storage__WEBPACK_IMPORTED_MODULE_0__["TokenStorage"]();
        var tokenVal = token.getToken();
        var clonedRequest = req.clone({
            headers: req
                .headers
                .set('Authorization', tokenVal ? "Bearer " + tokenVal : '')
        });
        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    };
    return AuthHeaderInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/http-error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: CatchErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatchErrorInterceptor", function() { return CatchErrorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");


var CatchErrorInterceptor = /** @class */ (function () {
    function CatchErrorInterceptor() {
    }
    CatchErrorInterceptor.prototype.intercept = function (request, next) {
        return next
            .handle(request)
            .do(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                var text = (err.error && err.error.message) ? err.error.message : err.statusText;
                window.globalEvents.emit('open error dialog', text);
            }
        });
    };
    return CatchErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/model-list/model-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/model-list/model-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n  <div class=\"head\">\n    <div class=\"df ai-c\">\n      <div class=\"title\">\n        Recently Active\n      </div>\n      <!-- <div class=\"subtitle\">\n        Diagrams last changed by you\n      </div> -->\n    </div>\n    <div>\n      <button\n        (click)=\"openDialog()\"\n        mat-raised-button\n        color=\"primary\"\n      >\n        New project\n      </button>\n    </div>\n  </div>\n\n  <div class=\"model-list\">\n    <div *ngFor=\"let item of data\" class=\"model-wrap\">\n      <div [routerLink]=\"['/model/'+item._id]\" class=\"model\">\n        <div class=\"img-wrap\">\n          <img src=\"http://www.ucodice.com/kinglinkr/front/img/circle.png\" alt=\"\" />\n        </div>\n        <div>\n          <div class=\"name\">\n            {{item.name}}\n          </div>\n          <div class=\"desc\">\n            {{item.description}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/model-list/model-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/model-list/model-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  padding: 20px 40px; }\n  .wrap .head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px 0;\n    margin-bottom: 20px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .wrap .head .title {\n      color: #535353;\n      font-size: 19px;\n      font-family: Helvetica, Arial, sans-serif;\n      font-weight: 600; }\n  .wrap .head .subtitle {\n      font-size: 12px;\n      color: #7d7d7d;\n      margin: 0px 0px 0px 20px; }\n  .model-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -6px;\n  margin-right: -6px; }\n  .model-wrap {\n  padding: 12px;\n  max-width: 50%;\n  flex-basis: 50%;\n  height: 182px;\n  margin-bottom: 20px;\n  outline: none; }\n  .model-wrap .model {\n    outline: none;\n    color: #535353;\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.11);\n    border-width: 3px;\n    border-style: solid;\n    border-color: transparent;\n    -o-border-image: initial;\n       border-image: initial;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    cursor: pointer; }\n  .model-wrap .model .name {\n      color: #535353;\n      font-size: 14px;\n      font-weight: bold;\n      overflow-wrap: break-word;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      padding-left: 10px;\n      transition: all 0.3s; }\n  .model-wrap .model .desc {\n      padding-left: 10px;\n      padding-bottom: 10px;\n      overflow-wrap: break-word;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      line-height: 1.618;\n      font-size: 0.75em;\n      font-weight: 100;\n      font-family: Helvetica, Arial, sans-serif; }\n  .model-wrap .model .img-wrap {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .model-wrap .model .img-wrap img {\n        height: 100%;\n        position: absolute; }\n  .model-wrap .model:hover .name {\n      color: #673ab7; }\n  @media (min-width: 600px) {\n  .model-wrap {\n    flex-grow: 0;\n    max-width: 33.333333%;\n    flex-basis: 33.333333%; } }\n"

/***/ }),

/***/ "./src/app/model-list/model-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/model-list/model-list.component.ts ***!
  \****************************************************/
/*! exports provided: ModelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListComponent", function() { return ModelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/dialog-create-model/dialog-create-model.component */ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model */ "./src/app/shared/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModelListComponent = /** @class */ (function () {
    function ModelListComponent(modelService, authService, router, dialog) {
        this.modelService = modelService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.model = new _shared_model__WEBPACK_IMPORTED_MODULE_6__["ModelClass"]();
    }
    ModelListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
            console.log(data);
            _this.modelService.getAllById(_this.user._id).subscribe(function (data) {
                console.log(data);
                _this.data = data;
            });
        });
    };
    ModelListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_5__["DialogCreateModelComponent"], {
            width: '450px',
            data: {
                id: "mod" + (this.data.length + 1)
            }
        });
        dialogRef.afterClosed().subscribe(function (model) {
            if (model) {
                model.userId = _this.user._id;
                _this.modelService.create(model).subscribe(function (data) {
                    console.log(data);
                    _this.router.navigate(["model/" + data._id]);
                });
            }
        });
    };
    ModelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model-list',
            template: __webpack_require__(/*! ./model-list.component.html */ "./src/app/model-list/model-list.component.html"),
            styles: [__webpack_require__(/*! ./model-list.component.scss */ "./src/app/model-list/model-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ModelListComponent);
    return ModelListComponent;
}());



/***/ }),

/***/ "./src/app/model-main/model-main.component.html":
/*!******************************************************!*\
  !*** ./src/app/model-main/model-main.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bpm-wrap\">\n  <div class=\"palette-entries\">\n    <!-- <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-hand-tool\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-lasso-tool\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span class=\"entry icon bpmn-icon-space-tool\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span class=\"entry icon bpmn-icon-connection-multi\"></span>\n    </div>\n    <div class=\"separator\"></div> -->\n    <div *ngFor=\"let item of types\" class=\"bpm-item\">\n      <div [id]=\"item\" [draggable]=\"true\" [ngStyle]=\"{'background': colors[item]}\"\n       class=\"square\" [title]=\"item\" tooltipPosition=\"top\"></div>\n    </div>\n    <!-- <div class=\"bpm-item\">\n      <span pTooltip=\"Start\" tooltipPosition=\"top\" [draggable]=\"true\" id=\"Input\"\n        class=\"icon bpmn-icon-start-event-none\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span id=\"Output\" pTooltip=\"Start\" tooltipPosition=\"top\" [draggable]=\"true\"\n        class=\"icon bpmn-icon-intermediate-event-none\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span id=\"InputOutput\" pTooltip=\"Start\" tooltipPosition=\"top\" [draggable]=\"true\"\n        class=\"icon bpmn-icon-end-event-none\"></span>\n    </div> -->\n    <!-- <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-gateway-none\"></span>\n    </div> -->\n    <!-- <div class=\"bpm-item\">\n      <span id=\"Process\" pTooltip=\"Start\" tooltipPosition=\"top\" [draggable]=\"true\" class=\"icon bpmn-icon-task\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span id=\"Board\" pTooltip=\"Start\" tooltipPosition=\"top\" [draggable]=\"true\"\n        class=\"icon bpmn-icon-subprocess-expanded\"></span>\n    </div> -->\n    <!-- <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-data-object\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-data-store\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-participant\"></span>\n    </div>\n    <div class=\"bpm-item\">\n      <span class=\"icon bpmn-icon-group\"></span>\n    </div> -->\n  </div>\n  <div class=\"coco-bpm-graph\" id=\"graph\" style=\"height: calc(100vh - 60px);\"></div>\n  <div class=\"clickShield\" *ngIf=\"showSide\" (click)=\"showSide = false\"></div>\n  <div (click)=\"showSide = !showSide\" class=\"toggle-sidebar-btn\" [ngClass]=\"{ 'active': showSide }\">\n    <a mat-raised-button>\n      <i class=\"material-icons\">\n        menu_open\n      </i>\n    </a>\n  </div>\n  <div [ngClass]=\"{ show: showSide }\" *ngIf=\"selectedModal\" class=\"sidebar show\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Id (latin simbols and digits)</mat-label>\n      <input matInput [(ngModel)]=\"data[selectedModal].id\" (keydown)=\"onKeyDown($event)\"\n        (ngModelChange)=\"onFieldChange($event)\" />\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput [(ngModel)]=\"data[selectedModal].name\" (ngModelChange)=\"onFieldChange($event)\" />\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>ObjectClass</mat-label>\n      <mat-select [(ngModel)]=\"data[selectedModal].objectClass\" (ngModelChange)=\"onFieldChange($event)\">\n        <mat-option value=\"Board\">\n          Board\n        </mat-option>\n        <mat-option value=\"Input\">\n          Input\n        </mat-option>\n        <mat-option value=\"Output\">\n          Output\n        </mat-option>\n        <mat-option value=\"InputOutput\">\n          InputOutput\n        </mat-option>\n        <mat-option value=\"Process\">\n          Process\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"ObjectType\" [(ngModel)]=\"data[selectedModal].objectType\"\n        (ngModelChange)=\"onFieldChange($event)\" />\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Description\" [(ngModel)]=\"data[selectedModal].description\"\n        (ngModelChange)=\"onFieldChange($event)\"></textarea>\n    </mat-form-field>\n    <!-- <div class=\"input-btn-wrap\">\n      <mat-form-field class=\"example-full-width\">\n        <input readonly [(ngModel)]=\"picture\" matInput placeholder=\"Picture\" />\n      </mat-form-field>\n      <input #file [(ngModel)]=\"picture\" hidden type=\"file\" />\n      <button (click)=\"file.click()\" mat-raised-button color=\"primary\" class=\"btn\">\n        <i class=\"material-icons\">\n          forward\n        </i>\n      </button>\n    </div> -->\n    <table class=\"table\">\n      <tr>\n        <th style=\"text-align: left;\">Parameters</th>\n        <th></th>\n        <th>M</th>\n        <th>C</th>\n        <th>S</th>\n        <th></th>\n      </tr>\n\n      <tbody *ngFor=\"let item of data[selectedModal].parameters.slice().reverse(); let i = index\">\n        <tr>\n          <td>\n            {{item.name}}\n          </td>\n          <td>\n            <mat-form-field class=\"example-full-width table-input\">\n              <input matInput [(ngModel)]=\"item.value\" (ngModelChange)=\"onFieldChange($event)\" />\n            </mat-form-field>\n          </td>\n          <td>\n            <div class=\"df jc-c\">\n              <mat-checkbox [(ngModel)]=\"item.measurable\" (ngModelChange)=\"onFieldChange($event)\"></mat-checkbox>\n            </div>\n          </td>\n          <td>\n            <div class=\"df jc-c\">\n              <mat-checkbox [(ngModel)]=\"item.changeable\" (ngModelChange)=\"onFieldChange($event)\"></mat-checkbox>\n            </div>\n          </td>\n          <td>\n            <div class=\"df jc-c\">\n              <mat-checkbox [(ngModel)]=\"item.showOnDiagram\" (ngModelChange)=\"onFieldChange($event)\"></mat-checkbox>\n            </div>\n          </td>\n          <td>\n            <div class=\"df jc-c ai-c\">\n              <button class=\"table-more-btn\" mat-icon-button\n                (click)=\"optionsModal[item._id + index] = !optionsModal[item._id + index]\">\n                <i class=\"material-icons-outlined\">\n                  arrow_drop_down_circle\n                </i>\n              </button>\n            </div>\n          </td>\n        </tr>\n        <tr *ngIf=\"optionsModal[item._id + index]\">\n          <td colspan=\"6\">\n            <mat-accordion>\n              <mat-expansion-panel [expanded]=\"true\">\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Personal data\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <div class=\"loop-item desc\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Id\" (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"item.id\"\n                      (ngModelChange)=\"onFieldChange($event)\" />\n                  </mat-form-field>\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"item.name\"\n                      (ngModelChange)=\"onFieldChange($event)\" />\n                  </mat-form-field>\n                  <mat-form-field class=\"example-full-width\">\n                    <textarea matInput placeholder=\"Description\" [(ngModel)]=\"item.description\"\n                      (ngModelChange)=\"onFieldChange($event)\"></textarea>\n                  </mat-form-field>\n                  <div class=\"input-btn-wrap\">\n                    <mat-form-field *ngIf=\"item.value && item.value.charAt(0) !== '=' \" class=\"example-full-width\">\n                      <input matInput placeholder=\"Value\" [(ngModel)]=\"item.value\"\n                        (ngModelChange)=\"onFieldChange($event)\" />\n                    </mat-form-field>\n                    <span *ngIf=\"item.value && item.value.charAt(0) === '=' \" class=\"example-full-width\">Value = f (x)</span>\n\n                    <button (click)=\"openDialog(item)\" mat-raised-button color=\"primary\" class=\"btn\">\n                      <i>\n                        f(x)\n                      </i>\n                    </button>\n                  </div>\n                  <mat-form-field>\n                    <mat-label>Feature label</mat-label>\n                    <mat-select>\n                      <mat-option value=\"1\">\n                        1\n                      </mat-option>\n                      <mat-option value=\"2\">\n                        2\n                      </mat-option>\n                      <mat-option value=\"3\">\n                        3\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <div class=\"chekboxs-list\">\n                    <mat-checkbox [(ngModel)]=\"item.measurable\" (ngModelChange)=\"onFieldChange($event)\">Measurable\n                    </mat-checkbox>\n                    <mat-checkbox [(ngModel)]=\"item.changeable\" (ngModelChange)=\"onFieldChange($event)\">Changeable\n                    </mat-checkbox>\n                    <mat-checkbox [(ngModel)]=\"item.showOnDiagram\" (ngModelChange)=\"onFieldChange($event)\">Show on\n                      diagram</mat-checkbox>\n                    <mat-checkbox [(ngModel)]=\"item.showName\" (ngModelChange)=\"onFieldChange($event)\">Show name\n                    </mat-checkbox>\n                  </div>\n                  <mat-form-field *ngIf=\"item.showOnDiagram\">\n                    <mat-label>Control type</mat-label>\n                    <mat-select [(ngModel)]=\"item.controlType\" (ngModelChange)=\"onFieldChange($event)\">\n                      <mat-option value=\"Value\">\n                        Value\n                      </mat-option>\n                      <mat-option value=\"Input\">\n                        Input\n                      </mat-option>\n                      <mat-option value=\"Slider\">\n                        Slider\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </mat-expansion-panel>\n            </mat-accordion>\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n\n    <div class=\"m-t-10 m-b-10\">\n      <button mat-raised-button color=\"accent\" (click)=\"addParametr()\">+ Add parameter</button>\n    </div>\n\n    <div class=\"loop-item\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Id\" (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"newParametr.id\" />\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"newParametr.name\" />\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"newParametr.description\"></textarea>\n      </mat-form-field>\n      <div class=\"input-btn-wrap\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Value\" [(ngModel)]=\"newParametr.value\" />\n        </mat-form-field>\n        <button (click)=\"openDialog(newParametr)\" mat-raised-button color=\"primary\" class=\"btn\">\n          <i>\n            f(x)\n          </i>\n        </button>\n      </div>\n      <mat-form-field>\n        <mat-label>Feature label</mat-label>\n        <mat-select [(ngModel)]=\"newParametr.featureLabelNone\">\n          <mat-option value=\"1\">\n            1\n          </mat-option>\n          <mat-option value=\"2\">\n            2\n          </mat-option>\n          <mat-option value=\"3\">\n            3\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"chekboxs-list\">\n        <mat-checkbox [(ngModel)]=\"newParametr.measurable\">Measurable</mat-checkbox>\n        <mat-checkbox [(ngModel)]=\"newParametr.changeable\">Changeable</mat-checkbox>\n        <mat-checkbox [(ngModel)]=\"newParametr.showOnDiagram\">Show on diagram</mat-checkbox>\n        <mat-checkbox [(ngModel)]=\"newParametr.showName\">Show name</mat-checkbox>\n      </div>\n      <mat-form-field *ngIf=\"newParametr.showOnDiagram\">\n        <mat-label>Control type</mat-label>\n        <mat-select [(ngModel)]=\"newParametr.controlType\">\n          <mat-option value=\"Value\">\n            Value\n          </mat-option>\n          <mat-option value=\"Input\">\n            Input\n          </mat-option>\n          <mat-option value=\"Slider\">\n            Slider\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/model-main/model-main.component.scss":
/*!******************************************************!*\
  !*** ./src/app/model-main/model-main.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bpm-wrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: white;\n  border: 1px solid #ececec;\n  overflow: hidden;\n  min-height: calc(100vh - 58px); }\n\n.palette-entries {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  width: 94px;\n  border-radius: 5px;\n  background: #fafafa;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-wrap: wrap; }\n\n.palette-entries .bpm-item {\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    cursor: default;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.palette-entries .bpm-item .icon {\n      color: #333;\n      font-size: 30px; }\n\n.palette-entries .bpm-item:hover .icon {\n      color: #ff7400; }\n\n.palette-entries .bpm-item .square {\n      width: 30px;\n      height: 23px;\n      border-radius: 5px;\n      border: 2px solid; }\n\n.palette-entries .separator {\n    margin: 0 5px;\n    padding-top: 5px;\n    border: none;\n    border-bottom: 1px solid #ddd;\n    clear: both;\n    width: 100%; }\n\n.sidebar {\n  position: absolute;\n  width: 100%;\n  max-width: 400px;\n  background-color: white;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0);\n  transition: all 0.4s;\n  height: 100%;\n  right: 0;\n  top: 0;\n  padding: 15px;\n  overflow-y: auto; }\n\n.sidebar.show {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    box-shadow: rgba(0, 0, 0, 0.1) -8px 0px 5px -4px;\n    z-index: 111; }\n\nmat-form-field {\n  display: block; }\n\n.input-btn-wrap {\n  display: flex;\n  align-items: center; }\n\n.input-btn-wrap mat-form-field {\n    width: 100%; }\n\n.input-btn-wrap button.btn {\n    min-width: 0;\n    padding: 0 6px;\n    margin-left: 25px;\n    min-width: 35px; }\n\n.input-btn-wrap button.btn .material-icons {\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg); }\n\ntable {\n  width: 100%; }\n\ntable td {\n    padding: 0; }\n\ntable th {\n    padding: 0; }\n\n.chekboxs-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.chekboxs-list mat-checkbox {\n    width: 50%; }\n\n.loop-item {\n  padding-bottom: 20px;\n  border-bottom: 1px dashed #b7b7b7;\n  padding: 5px 10px;\n  padding-bottom: 10px;\n  border: 1px dashed #b7b7b7; }\n\n.loop-item.desc {\n    padding: 0 !important;\n    border: none !important; }\n\n.clickShield {\n  position: fixed;\n  background: #0000003d;\n  width: 100%;\n  height: 100%;\n  top: 0; }\n\n.toggle-sidebar-btn {\n  position: absolute;\n  top: calc(50% - 18px);\n  right: 0;\n  transition: all .4s; }\n\n.toggle-sidebar-btn.active {\n    -webkit-transform: translate(-400px, 0);\n            transform: translate(-400px, 0); }\n\n.toggle-sidebar-btn a {\n    width: 29px;\n    min-width: unset;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/model-main/model-main.component.ts":
/*!****************************************************!*\
  !*** ./src/app/model-main/model-main.component.ts ***!
  \****************************************************/
/*! exports provided: ModelMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelMainComponent", function() { return ModelMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _shared_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/component.service */ "./src/app/shared/component.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/dialog-parameters/dialog-parameters.component */ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model */ "./src/app/shared/model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ModelMainComponent = /** @class */ (function () {
    function ModelMainComponent(modelService, componentService, dialog, authService, activatedRoute) {
        var _this = this;
        this.modelService = modelService;
        this.componentService = componentService;
        this.dialog = dialog;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.types = [
            "Input",
            "Output",
            "InputOutput",
            "Process",
            "Board"
        ];
        this.colors = {
            "Input": "#f2f2f2",
            "Output": "#fbe5d6",
            "InputOutput": "#e2f0d9",
            "Process": "#b4c7e7",
            "Board": "#ffe699"
        };
        this.data = [];
        this.optionsModal = {};
        this.formulaSaver = {};
        this.txtQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.newParametr = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("", "", "0", "");
        this.modelId = this.activatedRoute.snapshot.paramMap.get('id');
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
            _this.modelService.getAllById(_this.user._id).subscribe(function (data) {
                console.log(data);
                _this.modelList = data;
                _this.componentService.getAllById(_this.modelId).subscribe(function (data) {
                    _this.data = data;
                    console.log(data);
                    _this.calc();
                    setTimeout(function () {
                        _this.drow();
                    }, 1000);
                });
            });
        });
        // setInterval(() => {
        //   this.removeAll()
        //   this.drowLines()
        //   this.drow();
        //   this.txtQueryChanged.next(this.uuidv4());
        // }, 5000)
        this.txtQueryChanged
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(1800), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (model) {
            var id = _this.data[model.selected];
            if (id) {
                _this.componentService.update(id).subscribe(function (data) {
                });
                _this.formulaSaver = {};
                if (!model.drag)
                    _this.calc();
            }
            if (!model.drag)
                setTimeout(function () {
                    _this.removeAll();
                    _this.drow();
                }, 1000);
        });
    }
    ModelMainComponent.prototype.calc = function () {
        var _this = this;
        this.data.forEach(function (comp) {
            comp.parameters.forEach(function (element) {
                if (element.value) {
                    var v = element.value;
                    var spcaSpit = v.split(" ");
                    spcaSpit.forEach(function (element, index) {
                        var earr = element.split(".");
                        if (earr.length == 2) {
                            if (!_this.formulaSaver[earr[1]] && !_this.formulaSaver[element]) {
                                _this.formulaSearch(element);
                            }
                        }
                    });
                }
            });
        });
    };
    ModelMainComponent.prototype.keyEvent = function (event) {
        var _this = this;
        if ((event.keyCode === 46 || event.keyCode === 8) && this.selected) {
            this.componentService.delete(this.data[this.selected]).subscribe(function (data) {
                _this.data.splice(_this.selected, 1);
                _this.removeAll();
                _this.drowLines();
                _this.drow();
                _this.selected = null;
                _this.activeArrow = null;
            });
        }
        if ((event.keyCode === 46 || event.keyCode === 8) && (this.selectedLineId || this.selectedLineId === 0)) {
            this.selectedLineFrom.selected.forEach(function (id, index) {
                if (id === _this.selectedLineTo._id) {
                    _this.data.forEach(function (element, i) {
                        if (element._id === _this.selectedLineFrom._id) {
                            _this.data[i].selected.splice(index, 1);
                            _this.txtQueryChanged.next({
                                value: _this.selectedLine,
                                selected: i
                            });
                        }
                    });
                }
            });
            this.removeAll();
            this.drowLines();
            this.drow();
        }
    };
    ModelMainComponent.prototype.openDialog = function (item) {
        var _this = this;
        this.openDialogItem = item;
        var dialogRef = this.dialog.open(_shared_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_4__["DialogParametersComponent"], {
            width: '450px',
            data: {
                list: this.modelList,
                formula: item.value
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            item.value = result.formula;
            _this.txtQueryChanged.next({
                value: item.value,
                selected: _this.selectedModal
            });
        });
    };
    ModelMainComponent.prototype.ngOnInit = function () {
    };
    ModelMainComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    ModelMainComponent.prototype.init = function () {
        var _this = this;
        this.menuInit();
        this.zoom = d3
            .zoom()
            .scaleExtent([0.1, 2])
            .on("zoom", function () {
            _this.zoomTrans = d3.event.transform;
            // this.conteiner.attr("transform", d3.event.transform);
            var currentTransform = d3.event.transform;
            if (!currentTransform.x) {
                currentTransform.x = 0;
                currentTransform.y = 0;
            }
            _this.conteiner.attr("transform", currentTransform);
            _this.slider.property("value", currentTransform.k);
            _this.rangeWidth();
        });
        this.vis = d3.select("#graph").append("svg");
        var w = "100%", h = "100%";
        this.vis
            .attr("width", w)
            .attr("height", h)
            .on("click", function () {
            // if (!this.readOnly) {
            //   this.unselect();
            //   if (this.startDrowLine) {
            //     this.removeAll();
            //     this.startDrowLine = null;
            //     this.activeArrow = null;
            //     document.documentElement.style.cursor = "default";
            //     this.drow();
            //   }
            //   if (!this.clickArrow) {
            //     this.unselectArrow();
            //   }
            //   this.clickArrow = false;
            // }
        });
        this.vis.call(this.zoom).on("dblclick.zoom", null);
        this.conteiner = this.vis.append("g").attr("id", "wrap");
        var g = d3
            .select("#graph")
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-d3-zoom-wrap");
        var g1 = g;
        var icon = g1
            .append("svg")
            .attr("width", "14")
            .attr("height", "14")
            .attr("viewBox", "0 0 14 14")
            .append("g")
            .attr("fill", "#2196F3")
            .attr("fill-rule", "nonzero");
        icon
            .append("path")
            .attr("d", "M12.316 9.677a5.677 5.677 0 0 0 0-8.019 5.676 5.676 0 0 0-8.019 0 5.56 5.56 0 0 0-.853 6.843s.094.158-.033.284L.518 11.678c-.575.576-.712 1.381-.202 1.892l.088.088c.51.51 1.316.373 1.892-.202l2.886-2.887c.133-.133.29-.04.29-.04a5.56 5.56 0 0 0 6.844-.852zM5.344 8.63a4.194 4.194 0 0 1 0-5.925 4.194 4.194 0 0 1 5.925 0 4.194 4.194 0 0 1 0 5.925 4.195 4.195 0 0 1-5.925 0z");
        icon
            .append("path")
            .attr("d", "M5.706 5.331a.584.584 0 0 1-.539-.813A3.688 3.688 0 0 1 9.996 2.56a.585.585 0 0 1-.457 1.078 2.516 2.516 0 0 0-3.294 1.336.585.585 0 0 1-.54.357z");
        var g2 = g1
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-slider-wrap");
        this.slider = g2
            .append("input")
            .datum({})
            .attr("type", "range")
            .attr("class", "coco-bpm-slider")
            .attr("id", "range")
            .attr("value", 1)
            .attr("min", 0.1)
            .attr("max", 2)
            .attr("step", 0.01)
            .on("input", function () {
            _this.zoom.scaleTo(_this.vis, d3.select("#range").property("value"));
            _this.rangeWidth();
        });
        g2.append("div")
            .datum({})
            .attr("class", "coco-bpm-line-range")
            .attr("id", "lineZoomRange");
        document.getElementById("graph").addEventListener("mousemove", function (e) {
            var dummyX = e.offsetX;
            var dummyY = e.offsetY;
            if (_this.startDrowLine && _this.data[_this.startDrowLine]) {
                _this.removeAll();
                d3.selectAll("#drowLine").remove();
                var x = void 0, y = void 0;
                if (document.getElementById("wrap").getAttribute("transform") === null) {
                    x = e.offsetX;
                    y = e.offsetY;
                }
                else {
                    x = (e.offsetX - _this.zoomTrans.x) / _this.zoomTrans.k;
                    y = (e.offsetY - _this.zoomTrans.y) / _this.zoomTrans.k;
                }
                var d = {
                    source: {
                        x: _this.data[_this.startDrowLine].x,
                        y: _this.data[_this.startDrowLine].y - 50
                    },
                    target: {
                        x: x,
                        y: y
                    }
                };
                var link = d3
                    .linkHorizontal()
                    .x(function (d) {
                    return d.x;
                })
                    .y(function (d) {
                    return d.y;
                });
                _this.conteiner
                    .append("path")
                    .attr("class", "path")
                    .attr("id", "drowLine")
                    .attr("d", link(d))
                    .style("fill", "none")
                    .style("stroke", "#555")
                    .attr("stroke-opacity", 0.4)
                    .attr("stroke-width", 1.5);
                _this.conteiner
                    .append("polyline")
                    .attr("points", d.source.x +
                    "," +
                    d.source.y +
                    " " +
                    (d.source.x + d.target.x) / 2 +
                    "," +
                    (d.source.y + d.target.y) / 2 +
                    " " +
                    d.target.x +
                    "," +
                    d.target.y)
                    .style("fill", "none");
                _this.drow();
            }
        });
        this.marker = this.conteiner
            .append("svg:defs")
            .append("svg:marker")
            .attr("id", "triangle")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("markerWidth", 30)
            .attr("markerHeight", 30)
            .attr("orient", "auto");
        this.marker
            .append("path")
            .attr("class", "path")
            .attr("d", "M 0 0 12 6 0 12 3 6")
            .style("fill", "#999");
    };
    ModelMainComponent.prototype.menuInit = function () {
        var _this = this;
        this.types.forEach(function (type) {
            if (document.getElementById(type)) {
                document.getElementById(type).addEventListener("dragstart", function (ev) {
                    _this.dragType = type;
                    if (_this.isStart && type === "Start") {
                        event.preventDefault();
                    }
                }, false);
            }
        });
        document.addEventListener("dragover", function (event) {
            event.preventDefault();
        });
        document.getElementById("graph").addEventListener("drop", function (ev) {
            var x, y;
            if (document.getElementById("wrap").getAttribute("transform") === null) {
                x = ev.offsetX;
                y = ev.offsetY;
            }
            else {
                x = (ev.offsetX - _this.zoomTrans.x) / _this.zoomTrans.k;
                y = (ev.offsetY - _this.zoomTrans.y) / _this.zoomTrans.k;
            }
            ev.preventDefault();
            var model = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ComponentClass"]();
            model.x = x;
            model.y = y;
            model.objectClass = _this.dragType;
            model.modelId = _this.modelId;
            model.id = "obj" + (_this.data.length + 1);
            var p1 = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("Price" + model.id, "Price", "0", 1);
            var p2 = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("Speed" + model.id, "Speed", "0", 1);
            var p3 = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("CostPrice" + model.id, "CostPrice", "0", 1);
            model.parameters = [p1, p2, p3];
            _this.componentService.create(model).subscribe(function (data) {
                _this.data.push(data);
                _this.removeAll();
                _this.drow();
                _this.dragType = null;
            });
        }, false);
    };
    ModelMainComponent.prototype.drow = function () {
        var _this = this;
        this.drowLines();
        this.data.forEach(function (element, index, arr) {
            switch (element.objectClass) {
                case "Input":
                case "Output":
                case "InputOutput":
                case "Process":
                case "Board":
                    var d = void 0, dx = void 0, dy = void 0, color = void 0;
                    dx = element.x - 10;
                    dy = element.y - 8;
                    color = _this.colors[element.objectClass];
                    var count_1 = 0;
                    element.parameters.forEach(function (param, index) {
                        if (param.showOnDiagram) {
                            count_1++;
                        }
                    });
                    var h = (60 + (count_1 > 3 ? ((count_1 - 3) * 16 + (count_1 * 5)) : 0));
                    var react = ((element.objectClass === "Process") || (element.objectClass === "Board")) ? " coco-bpm-rect-style" : "";
                    var selected = +_this.selected === +index ? "stroke-width:1;stroke:rgb(0,0,0)" : "";
                    var g_1 = _this.conteiner.append("g").attr("class", "g");
                    g_1.append("rect")
                        .attr("class", "nodes" + react)
                        .attr("id", index)
                        .attr("style", selected)
                        .attr("fill", color)
                        .attr("x", element.x - 25)
                        .attr("y", element.y - 80)
                        .attr("width", 160)
                        .attr("height", h)
                        .attr("rx", 10)
                        .attr("ry", 10)
                        .on("mouseover", function (q, w, e) {
                        d3.event.stopPropagation();
                        if (_this.activeArrow) {
                            document.documentElement.style.cursor = "default";
                            d3.select(document.getElementById(e[0].id + "main")).style("fill", "#84bd96");
                        }
                    })
                        .on("mouseout", function (q, w, e) {
                        d3.event.stopPropagation();
                        d3.select(document.getElementById(e[0].id + "main")).style("fill", "#2196f3");
                        if (_this.activeArrow) {
                            document.documentElement.style.cursor = "not-allowed";
                        }
                    })
                        .on("click", function (d, i, s) {
                        d3.event.stopPropagation();
                        _this.shepClick(s);
                    })
                        .on("dblclick", function (d, i, s) {
                        _this.selectedModal = s[0].id;
                        _this.newParametr = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("par" + (_this.data[_this.selectedModal].parameters.length + 1), "", "0");
                        _this.showSide = !_this.showSide;
                        _this.removeAll();
                        _this.drow();
                        _this.activeArrow = null;
                        _this.startDrowLine = null;
                        _this.selected = null;
                    })
                        .call(d3
                        .drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended));
                    var countIndex_1 = 0;
                    var parameters = element.parameters.slice();
                    parameters.forEach(function (param, paramIndex) {
                        if (param.showOnDiagram) {
                            var py = element.y - 50 - (countIndex_1 * 20) + (count_1 >= 3 ? ((count_1 - 3) * 16 + (count_1 * 7)) : (count_1 > 1) ? (count_1 * 4) : -9);
                            switch (param.controlType) {
                                case "Value":
                                case "":
                                    var v = param.value;
                                    if (v && v.charAt(0) === "=") {
                                        var spcaSpit_1 = v.split(" ");
                                        spcaSpit_1.forEach(function (element, index) {
                                            var earr = element.split(".");
                                            if (earr.length == 2) {
                                                if (_this.formulaSaver[earr[1]]) {
                                                    spcaSpit_1[index] = _this.formulaSaver[earr[1]];
                                                }
                                                else {
                                                    spcaSpit_1[index] = _this.formulaSaver[element];
                                                }
                                            }
                                        });
                                        spcaSpit_1.shift();
                                        try {
                                            _this.formulaSaver[param.id] = _this.notEval(spcaSpit_1.join(''));
                                        }
                                        catch (_a) {
                                            _this.calc();
                                        }
                                        g_1.append("text")
                                            .attr("x", element.x)
                                            .attr("y", py)
                                            .text((param.name || param.id) + " - " + _this.formulaSaver[param.id]);
                                    }
                                    else {
                                        g_1.append("text")
                                            .attr("x", element.x)
                                            .attr("y", py)
                                            .text((param.name || param.id) + " - " + v);
                                    }
                                    break;
                                case "Input":
                                    var gI = g_1.append("g");
                                    gI.append("text")
                                        .attr("x", element.x)
                                        .attr("y", py)
                                        .text((param.name || param.id) + " - ");
                                    gI.append("foreignObject")
                                        .attr("x", element.x + ((param.name || param.id).length * 11))
                                        .attr("y", py - 15)
                                        .attr("width", 50)
                                        .attr("height", 16)
                                        .attr("class", "foreignObject-input-bmp")
                                        .html(function (d) {
                                        return "<input id=\"" + index + "-" + paramIndex + "\" type=\"number\" value=\"" + param.value + "\" />";
                                    });
                                    var inputElement_1 = document.getElementById(index + "-" + paramIndex);
                                    var self_1 = _this;
                                    inputElement_1.onkeypress = function (e) {
                                        setTimeout(function () {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = inputElement_1.value.toString();
                                            self_1.txtQueryChanged.next({
                                                value: inputElement_1.value,
                                                selected: self_1.dragSelected
                                            });
                                        }, 500);
                                    };
                                    break;
                                case "Slider":
                                    var gR = g_1.append("g");
                                    gR.append("text")
                                        .attr("x", element.x)
                                        .attr("y", py)
                                        .text((param.name || param.id) + " - ");
                                    gR.append("foreignObject")
                                        .attr("x", element.x + ((param.name || param.id).length * 10))
                                        .attr("y", py - 15)
                                        .attr("width", 50)
                                        .attr("height", 16)
                                        .attr("class", "foreignObject-input-bmp")
                                        .html(function (d) {
                                        return "<input id=\"" + index + "-" + paramIndex + "\" type=\"range\" min=\"0\" max=\"1000\" value=\"" + param.value + "\" />";
                                    });
                                    self_1 = _this;
                                    var rangeElement_1 = document.getElementById(index + "-" + paramIndex);
                                    rangeElement_1.onchange = function (e) {
                                        setTimeout(function () {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = rangeElement_1.value.toString();
                                            self_1.txtQueryChanged.next({
                                                value: inputElement_1.value,
                                                selected: self_1.dragSelected
                                            });
                                        }, 500);
                                    };
                                    break;
                                default:
                                    break;
                            }
                            countIndex_1++;
                        }
                    });
                    break;
                default:
                    break;
            }
            if (_this.marker)
                _this.marker
                    .append("path")
                    .attr("class", "path")
                    .attr("d", "M 0 0 12 6 0 12 3 6")
                    .style("fill", "#999");
            var self = _this;
            function dragstarted(d) {
                // d3.select(this)
                //   .classed("active", true);
                self.start_x = +d3.event.x;
                self.start_y = +d3.event.y;
            }
            function dragged(d) {
                var current_scale, current_scale_string;
                var transform = document.getElementById('wrap');
                if (transform.getAttribute("transform") === null) {
                    current_scale = 1;
                }
                else {
                    current_scale_string = transform.getAttribute("transform").split(" ")[1];
                    current_scale = +current_scale_string.substring(6, current_scale_string.length - 1);
                }
                if (!self.zoomTrans) {
                    self.zoomTrans = {
                        x: 0,
                        y: 0,
                        k: 1,
                    };
                }
                self.dragSelected = this.getAttribute("id");
                self.data[this.getAttribute("id")].x =
                    (d3.event.x - self.zoomTrans.x) / self.zoomTrans.k;
                // self.start_x + (d3.event.x - self.start_x) / current_scale;
                // (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
                var scale = 30;
                if (self.zoomTrans.k < 0.33) {
                    scale = 50;
                }
                self.data[this.getAttribute("id")].y =
                    (d3.event.y - self.zoomTrans.y) / self.zoomTrans.k - (scale / self.zoomTrans.k);
                // self.start_y + (d3.event.y - self.start_y) / current_scale;
                self.removeAll();
                self.drow();
                self.txtQueryChanged.next({
                    value: self.zoomTrans,
                    selected: self.dragSelected,
                    drag: 1
                });
            }
            function dragended(d) {
                d3.select(this).classed("active", false);
            }
        });
    };
    ModelMainComponent.prototype.formulaSearch = function (element) {
        var _this = this;
        var arr = element.split(".");
        this.modelList.forEach(function (model) {
            if (model.id === arr[0]) {
                _this.componentService.getAllById(model._id).subscribe(function (data) {
                    data.forEach(function (comp) {
                        comp.parameters.forEach(function (param) {
                            if (param.id === arr[1]) {
                                _this.formulaSaver[element] = param.value;
                            }
                        });
                    });
                });
            }
        });
    };
    ModelMainComponent.prototype.drowLines = function () {
        var _this = this;
        this.data.forEach(function (value, index, arr) {
            value.selected.forEach(function (item) {
                var to = _this.searchById(item, _this.data);
                var from = _this.data[index];
                if (to) {
                    var x = +from.x;
                    var y = +from.y;
                    var x2 = +to.x;
                    var y2 = +to.y;
                    var minX = Math.abs(x - x2);
                    var minY = Math.abs(y - y2);
                    if (minX > minY) {
                        if (+x < +x2) {
                            x += 25;
                            x2 -= 25;
                        }
                        else {
                            x -= 25;
                            x2 += 25;
                        }
                    }
                    else {
                        if (+y < +y2) {
                            y += 25;
                            y2 -= 25;
                        }
                        else {
                            y -= 25;
                            y2 += 25;
                        }
                    }
                    var d = {
                        source: {
                            x: x,
                            y: y - 50
                        },
                        target: {
                            x: x2,
                            y: y2 - 50
                        }
                    };
                    var link = d3
                        .linkHorizontal()
                        .x(function (d) {
                        return d.x;
                    })
                        .y(function (d) {
                        return d.y;
                    });
                    _this.conteiner
                        .append("path")
                        .attr("d", link(d))
                        .attr("id", from.id + to.id)
                        .attr("class", "path")
                        .style("fill", "none")
                        .style("stroke", "#555")
                        .attr("stroke-opacity", 0.4)
                        .attr("stroke-width", 1.5)
                        .attr("marker-mid", "url(#triangle)");
                    _this.conteiner
                        .append("path")
                        .attr("class", "path")
                        .attr("d", link(d))
                        .style("fill", "none")
                        .style("stroke", "#555")
                        .attr("stroke-opacity", 0)
                        .attr("stroke-width", 15)
                        .on("click", function () {
                        // if (this.selectedLine) {
                        //   this.unselectArrow();
                        // }
                        _this.clickArrow = true;
                        _this.selectedLine = from.id + to.id;
                        _this.selectedLineId = index;
                        _this.selectedLineFrom = from;
                        _this.selectedLineTo = to;
                        d3.select(document.getElementById(from.id + to.id)).style("stroke-width", 2.5);
                        d3.select(document.getElementById(from.id + to.id)).style("stroke", "black");
                    });
                    _this.conteiner
                        .append("polyline")
                        .attr("points", d.source.x +
                        "," +
                        d.source.y +
                        " " +
                        (d.source.x + d.target.x) / 2 +
                        "," +
                        (d.source.y + d.target.y) / 2 +
                        " " +
                        d.target.x +
                        "," +
                        d.target.y)
                        .style("fill", "none")
                        .attr("marker-mid", "url(#triangle)");
                }
            });
        });
    };
    ModelMainComponent.prototype.shepClick = function (s) {
        var _this = this;
        this.selected = s[0].id;
        var id = this.selected;
        if (!this.activeArrow) {
            this.activeArrow = id;
            this.startDrowLine = id;
        }
        else {
            if (this.data[id].selected[0] &&
                this.data[id].selected[0] === this.data[this.activeArrow]._id) {
                return;
            }
            var count_2 = 0;
            this.data.forEach(function (element, index) {
                if (_this.data[_this.activeArrow].selected[0] &&
                    _this.data[_this.activeArrow].selected[0] === _this.data[index]._id) {
                    count_2++;
                }
            });
            if (count_2) {
                return;
            }
            if (id !== this.activeArrow) {
                this.data[this.activeArrow].selected.push(this.data[id]._id);
                this.txtQueryChanged.next({
                    value: "query",
                    selected: this.activeArrow
                });
            }
            this.activeArrow = null;
            this.startDrowLine = null;
        }
        this.removeAll();
        this.drowLines();
        this.drow();
    };
    ModelMainComponent.prototype.removeAll = function () {
        d3.selectAll("line").remove();
        d3.selectAll("polyline").remove();
        d3.selectAll("rect").remove();
        d3.selectAll("text").remove();
        d3.selectAll("circle").remove();
        // d3.selectAll("g").remove();
        d3.selectAll(".path").remove();
        d3.selectAll(".g").remove();
        // this.types.forEach(type => {
        //   d3.selectAll(type).remove();
        // });
    };
    ModelMainComponent.prototype.searchById = function (id, arr) {
        if (arr) {
            var result = arr.find(function (element) { return element._id === id; });
            return result;
        }
    };
    ModelMainComponent.prototype.uuidv4 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    ModelMainComponent.prototype.onFieldChange = function (query) {
        this.txtQueryChanged.next({
            value: query,
            selected: this.selectedModal
        });
    };
    ModelMainComponent.prototype.addParametr = function () {
        this.data[this.selectedModal].parameters.unshift(this.newParametr);
        this.newParametr = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("", "", "0", "");
        this.txtQueryChanged.next({
            value: this.newParametr,
            selected: this.selectedModal
        });
    };
    ModelMainComponent.prototype.onKeyDown = function (e) {
        var re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;
        if (!re.test(e.key)) {
            return false;
        }
    };
    ModelMainComponent.prototype.notEval = function (fn) {
        return new Function('return ' + fn)();
    };
    ModelMainComponent.prototype.rangeWidth = function (flag) {
        if (flag) {
            setTimeout(function () {
                document.getElementById("lineZoomRange").style.width = 50 + "%";
            }, 500);
        }
        else {
            var input = document.getElementById("range");
            var width = void 0;
            width = (input["value"] / 2) * 100;
            document.getElementById("lineZoomRange").style.width = width + "%";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("document:keyup", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModelMainComponent.prototype, "keyEvent", null);
    ModelMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model-main',
            template: __webpack_require__(/*! ./model-main.component.html */ "./src/app/model-main/model-main.component.html"),
            styles: [__webpack_require__(/*! ./model-main.component.scss */ "./src/app/model-main/model-main.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"],
            _shared_component_service__WEBPACK_IMPORTED_MODULE_2__["ComponentService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ModelMainComponent);
    return ModelMainComponent;
}());



/***/ }),

/***/ "./src/app/shared/component.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/component.service.ts ***!
  \*********************************************/
/*! exports provided: ComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentService = /** @class */ (function () {
    function ComponentService(http) {
        this.http = http;
    }
    ComponentService.prototype.create = function (component) {
        return this.http.post('/api/component', component);
    };
    ComponentService.prototype.getAll = function () {
        return this.http.get('/api/component');
    };
    ComponentService.prototype.update = function (component) {
        return this.http.put('/api/component', component);
    };
    ComponentService.prototype.delete = function (component) {
        return this.http.delete('/api/component/' + component._id);
    };
    ComponentService.prototype.getAllById = function (id) {
        return this.http.get('/api/component/list/' + id);
    };
    ComponentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ComponentService);
    return ComponentService;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-create-model/dialog-create-model.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create Model</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <mat-label>ID</mat-label>\n    <input matInput (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"model.id\" />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput [(ngModel)]=\"model.name\" />\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Description</mat-label>\n    <input matInput [(ngModel)]=\"model.description\" />\n  </mat-form-field>\n</div>\n<div mat-dialog-actions class=\"jc-c df\">\n  <button\n    mat-button\n    [mat-dialog-close]=\"model\"\n    mat-raised-button\n    color=\"primary\"\n    cdkFocusInitial\n  >\n    Ok\n  </button>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-create-model/dialog-create-model.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea-wrap {\n  display: flex; }\n  .textarea-wrap textarea {\n    height: 170px;\n    border: 1px solid #949494;\n    margin-bottom: -8px;\n    resize: none;\n    background: white;\n    position: relative;\n    z-index: 1;\n    padding: 5px;\n    box-sizing: border-box; }\n  .mat-form-field {\n  display: block; }\n  button.func {\n  min-width: 0;\n  padding: 0 7px;\n  margin-top: 35px; }\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-create-model/dialog-create-model.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DialogCreateModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCreateModelComponent", function() { return DialogCreateModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model */ "./src/app/shared/model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogCreateModelComponent = /** @class */ (function () {
    function DialogCreateModelComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.model = new _model__WEBPACK_IMPORTED_MODULE_2__["ModelClass"]();
    }
    DialogCreateModelComponent.prototype.ngOnInit = function () {
        this.model.id = this.data.id;
    };
    DialogCreateModelComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogCreateModelComponent.prototype.onKeyDown = function (e) {
        var re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;
        if (!re.test(e.key)) {
            return false;
        }
    };
    DialogCreateModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dialog-create-model",
            template: __webpack_require__(/*! ./dialog-create-model.component.html */ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.html"),
            styles: [__webpack_require__(/*! ./dialog-create-model.component.scss */ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogCreateModelComponent);
    return DialogCreateModelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-parameters/dialog-parameters.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Formula dialog</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <mat-label>Model</mat-label>\n    <mat-select [(ngModel)]=\"sleectedModel\" (ngModelChange)=\"modelChange($event)\">\n      <mat-option *ngFor=\"let item of listModel\" [value]=\"item._id\">\n        {{item.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Class</mat-label>\n    <mat-select [(ngModel)]=\"selectedClass\" (ngModelChange)=\"paramsFilter($event)\">\n      <mat-option *ngFor=\"let item of listClass\" [value]=\"item\">\n        {{item}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Object</mat-label>\n    <mat-select [(ngModel)]=\"selectedObject\" (ngModelChange)=\"paramsFilter($event)\">\n      <mat-option *ngFor=\"let item of listObjects\" [value]=\"item\">\n        {{item}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Parameter</mat-label>\n    <mat-select [(ngModel)]=\"selectedParam\" (ngModelChange)=\"paramsChange($event)\">\n      <mat-option *ngFor=\"let item of listParams | filtrListParam: selectedClass: selectedObject\" [value]=\"item._id\">\n        {{item.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"textarea-wrap\">\n    <div style=\"width: 60%; position: relative;\">\n      <mat-form-field style=\"width: 100%\" class=\"example-full-width\">\n        <!-- (ngModelChange)=\"change($event)\" -->\n        <textarea #textArea [(ngModel)]=\"formula\" (ngModelChange)=\"change($event)\" (keydown)=\"checkPattern($event)\"\n          matInput></textarea>\n      </mat-form-field>\n      <div (click)=\"textArea.focus()\" class=\"text-area-shield\"></div>\n    </div>\n    <div style=\"width: 40%; padding: 20px 0 0 20px;\">\n      <div class=\"full-width\">\n        <!-- [disabled]=\"!boolLastOperator\" -->\n        <button [matTooltip]=\"!boolLastOperator ? 'Before add math operator: +, -, *, /' : null\" (click)=\"add()\" class=\"full-width\" mat-raised-button color=\"primary\" mat-button>\n          <= ADD</button> </div> <div class=\"df jc-c\">\n            <button (click)=\"test()\" class=\"func\" mat-raised-button color=\"primary\" mat-button>\n              <i>\n                f(x)\n              </i>\n            </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions class=\"jc-c df\">\n  <button mat-button (click)=\"ok()\" mat-raised-button color=\"primary\" cdkFocusInitial>\n    Ok\n  </button>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-parameters/dialog-parameters.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea-wrap {\n  display: flex; }\n  .textarea-wrap textarea {\n    height: 170px;\n    border: 1px solid #949494;\n    margin-bottom: -8px;\n    resize: none;\n    background: white;\n    position: relative;\n    z-index: 1;\n    padding: 5px;\n    box-sizing: border-box; }\n  .mat-form-field {\n  display: block; }\n  button.func {\n  min-width: 0;\n  padding: 0 7px;\n  margin-top: 35px; }\n  .text-area-shield {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1; }\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-parameters/dialog-parameters.component.ts ***!
  \************************************************************************************/
/*! exports provided: DialogParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogParametersComponent", function() { return DialogParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component.service */ "./src/app/shared/component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogParametersComponent = /** @class */ (function () {
    function DialogParametersComponent(dialogRef, componentService, data) {
        this.dialogRef = dialogRef;
        this.componentService = componentService;
        this.data = data;
        this.listModel = [];
        this.listComponents = [];
        this.listClass = [];
        this.listObjects = [];
        this.listParams = [];
        this.selectedFormulaVar = "";
        this.formula = "= ";
        this.re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|(\-)|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
        this.reOperator = /^[+\-*/]$/mg;
        this.reNumber = /[0-9]/;
        this.reDigit = /^[0-9]*.([0-9]+)?$/mg;
        this.keyPeriod = true;
    }
    DialogParametersComponent.prototype.ngOnInit = function () {
        this.listModel = this.data.list;
        // this.formula = this.data.formula;
        this.formula = '= ' + this.data.formula;
        this.sleectedModel = this.listModel[0]._id;
        this.modelChange(this.sleectedModel);
    };
    DialogParametersComponent.prototype.modelChange = function (id) {
        var _this = this;
        this.componentService.getAllById(id).subscribe(function (data) {
            _this.listComponents = data;
            _this.listComponents.forEach(function (item) {
                _this.listClass.push(item.objectClass);
                _this.listObjects.push(item.objectType);
                item.parameters.forEach(function (element) {
                    element.objectClass = item.objectClass;
                    element.objectType = item.objectType;
                });
                _this.listParams = _this.listParams.concat(item.parameters);
            });
            _this.listClass = _this.listClass.filter(_this.onlyUnique).slice();
            _this.listObjects = _this.listObjects.filter(_this.onlyUnique).slice();
        });
    };
    DialogParametersComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogParametersComponent.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    DialogParametersComponent.prototype.paramsFilter = function (e) {
    };
    DialogParametersComponent.prototype.ok = function () {
        var _this = this;
        var spcaSpit = this.formula.split(" ");
        var valid = true;
        spcaSpit.forEach(function (item) {
            var arr = item.split(".");
            if (arr.length == 2) {
                _this.listModel.forEach(function (model, modelIndex) {
                    var validModel;
                    if (model.id === arr[0]) {
                        validModel = true;
                        var validParam_1 = false;
                        _this.listParams.forEach(function (comp, index) {
                            if (comp.id === arr[1]) {
                                validParam_1 = true;
                            }
                            if (_this.listParams.length === (index + 1) && !validParam_1) {
                                valid = false;
                            }
                        });
                    }
                    if (_this.listModel.length === (modelIndex + 1) && !validModel) {
                        valid = false;
                    }
                });
            }
        });
        if (valid) {
            this.dialogRef.close({ formula: this.formula });
        }
    };
    DialogParametersComponent.prototype.paramsChange = function (e) {
        var item = this.searchById(e, this.listParams);
        var model = this.searchById(this.sleectedModel, this.listModel);
        this.selectedFormulaVar = model.id + "." + item.id;
    };
    DialogParametersComponent.prototype.add = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.boolLastOperator && _this.selectedFormulaVar) {
                if (_this.reOperator.test(_this.formula[_this.formula.length - 1])) {
                    _this.formula = _this.formula + ' ' + _this.selectedFormulaVar;
                }
                else {
                    _this.formula += _this.selectedFormulaVar;
                }
                _this.boolLastOperator = false;
            }
        }, 2);
    };
    DialogParametersComponent.prototype.searchById = function (id, arr) {
        if (arr) {
            var result = arr.find(function (element) { return element._id === id; });
            return result;
        }
    };
    DialogParametersComponent.prototype.renameFormula = function (text) {
        var _this = this;
        var newFormula = text + ' ';
        setTimeout(function () {
            _this.formula = newFormula;
            _this.boolLastOperator = true;
        }, 1);
    };
    DialogParametersComponent.prototype.checkPattern = function (elem) {
        var _this = this;
        setTimeout(function () {
            if (_this.formula[_this.formula.length - 1] === ' ') {
                if (_this.reOperator.test(_this.formula[_this.formula.length - 2])) {
                    _this.boolLastOperator = true;
                }
                else {
                    _this.boolLastOperator = false;
                }
            }
            else {
                // backspace
                if ((elem.keyCode !== 8 && elem.keyCode !== 46)) {
                    if (_this.reOperator.test(_this.formula[_this.formula.length - 1])) {
                        _this.boolLastOperator = true;
                    }
                    else {
                        _this.boolLastOperator = false;
                    }
                }
            }
        }, 1);
        // operator
        if (this.reOperator.test(elem.key)) {
            this.keyPeriod = true;
            if (this.formula[this.formula.length - 1] === '.') {
                this.formula = this.formula + '0';
            }
            if (this.formula[this.formula.length - 2] === '=') {
                return false;
            }
            else if (this.formula[this.formula.length - 1] !== ' ' &&
                this.reOperator.test(this.formula[this.formula.length - 1])) {
                this.formula = this.formula + ' ';
            }
            else if (this.formula[this.formula.length - 1] !== ' ' &&
                (!this.reOperator.test(this.formula[this.formula.length - 1]))) {
                this.formula = this.formula + ' ' + elem.key + ' ';
            }
            else if (this.formula[this.formula.length - 1] === ' ' &&
                !this.reOperator.test(this.formula[this.formula.length - 2])) {
                if (!this.reOperator.test(this.formula[this.formula.length - 2])) {
                    this.formula = this.formula + elem.key + ' ';
                }
            }
        }
        if (elem.key === ".") {
            if (!this.reNumber.test(this.formula[this.formula.length - 1])) {
                return false;
            }
            if (!this.keyPeriod) {
                return false;
            }
            this.keyPeriod = false;
        }
        //space
        if (elem.keyCode === 32) {
            if (this.formula[this.formula.length - 1] === '.') {
                this.formula = this.formula + '0';
            }
        }
        // backspace
        if (elem.keyCode === 8 || elem.keyCode === 46) {
            setTimeout(function () {
                if (_this.formula[_this.formula.length - 1] !== ' ') {
                    var arr = _this.formula.split(' ');
                    var number = _this.reNumber.test(arr[arr.length - 1]);
                    var oper = _this.reOperator.test(arr[arr.length - 1]);
                    if (!number &&
                        !oper) {
                        _this.renameFormula(arr.splice(0, arr.length - 1).join(' '));
                    }
                }
            }, 1);
        }
        if (this.formula[this.formula.length - 1] === ' ' &&
            this.reNumber.test(elem.key) &&
            this.reNumber.test(this.formula[this.formula.length - 2])) {
            return false;
        }
        //space
        if (elem.keyCode === 32 && this.formula[this.formula.length - 1] === ' ') {
            return false;
        }
        if (this.reNumber.test(elem.key)) {
            if (this.reOperator.test(this.formula[this.formula.length - 1])) {
                this.formula = this.formula + ' ';
            }
        }
        if (!this.reNumber.test(elem.key) &&
            // backspace
            (elem.keyCode !== 8 && elem.keyCode !== 46) &&
            // space
            elem.keyCode !== 32 &&
            elem.key !== ".") {
            return false;
        }
        else {
            if (!this.reNumber.test(elem.key) && elem.key !== ".") {
                this.keyPeriod = true;
            }
            //backspace
            if (elem.keyCode !== 8 && elem.keyCode !== 46) {
                if (this.reOperator.test(this.formula[this.formula.length - 1])) {
                    this.formula = this.formula + ' ';
                }
            }
        }
    };
    DialogParametersComponent.prototype.change = function (e) {
        var _this = this;
        var re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|\-|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
        var patternMath = /\s?([+|(\-)|*|/])\s?$/;
        setTimeout(function () {
            if (_this.formula.slice(0, 2) !== '= ') {
                _this.formula = '= ';
            }
        }, 110);
        // this.getBoolLastOperator();
        //   if (value.slice(0, 1) === '=') {
        //     if (value.slice(0, 2) === '= ') {
        //       value = value.replace('= ', '')
        //     } else {
        //       value = value.replace('=', '')
        //     }
        //   }
        //   if (!re.test(value)) {
        //     if (!patternMath.test(value[value.length - 1])) {
        //       setTimeout(() => {
        //         this.formula = '= ' + value.substring(0, value.length - 1);
        //         this.formula = this.formula.trim();
        //         if (!value.length) {
        //           this.formula = this.formula + ' '
        //         }
        //       }, 1);
        //     } else {
        //       this.formula = this.formula + '/s';
        //     }
        //     setTimeout(() => {
        //       this.boolKeyPress = false;
        //     }, 2);
        //   } else {
        //     this.currentFotmula = this.formula;
        //     this.boolKeyPress = false;
        //     console.log(this.currentFotmula);
        //   }
        // }
    };
    DialogParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dialog-parameters",
            template: __webpack_require__(/*! ./dialog-parameters.component.html */ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.html"),
            styles: [__webpack_require__(/*! ./dialog-parameters.component.scss */ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _component_service__WEBPACK_IMPORTED_MODULE_3__["ComponentService"], Object])
    ], DialogParametersComponent);
    return DialogParametersComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/click-outside.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/click-outside.directive.ts ***!
  \**************************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/shared/model.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model.service.ts ***!
  \*****************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelService = /** @class */ (function () {
    function ModelService(http) {
        this.http = http;
    }
    ModelService.prototype.create = function (model) {
        return this.http.post('/api/model', model);
    };
    ModelService.prototype.getAll = function () {
        return this.http.get('/api/model');
    };
    ModelService.prototype.getAllById = function (id) {
        return this.http.get('/api/model/list/' + id);
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/shared/model.ts":
/*!*********************************!*\
  !*** ./src/app/shared/model.ts ***!
  \*********************************/
/*! exports provided: ModelClass, ComponentClass, ParameterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelClass", function() { return ModelClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentClass", function() { return ComponentClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterClass", function() { return ParameterClass; });
var ModelClass = /** @class */ (function () {
    function ModelClass() {
    }
    return ModelClass;
}());

var ComponentClass = /** @class */ (function () {
    function ComponentClass() {
        this.id = "";
        this.modelId = "";
        this.name = "";
        this.objectClass = "";
        this.objectType = "";
        this.description = "";
        this.unit = "";
        this.picture = "";
        this.x = 0;
        this.y = 0;
        this.selected = [];
        this.parameters = [];
    }
    return ComponentClass;
}());

var ParameterClass = /** @class */ (function () {
    function ParameterClass(id, name, value, showOnDiagram) {
        this.id = "";
        this.name = "";
        this.description = "";
        this.value = "";
        this.measurable = 0;
        this.changeable = 0;
        this.controlType = "";
        this.showName = 0;
        this.showOnDiagram = 0;
        this.featureLabelNone = "";
        this.id = id;
        this.name = name;
        this.value = value;
        this.showOnDiagram = showOnDiagram;
    }
    return ParameterClass;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filtr-list-param.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/filtr-list-param.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FiltrListParamPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltrListParamPipe", function() { return FiltrListParamPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltrListParamPipe = /** @class */ (function () {
    function FiltrListParamPipe() {
    }
    FiltrListParamPipe.prototype.transform = function (data, class_, object) {
        data = data.filter(function (item) {
            if (class_ && object) {
                if (item.objectClass === class_ && item.objectType === object) {
                    return true;
                }
            }
            else {
                if (class_ && item.objectClass === class_) {
                    return true;
                }
                if (object && item.objectType === object) {
                    return true;
                }
            }
        });
        console.log(data);
        return data;
    };
    FiltrListParamPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filtrListParam'
        })
    ], FiltrListParamPipe);
    return FiltrListParamPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dialog-parameters/dialog-parameters.component */ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.ts");
/* harmony import */ var _components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dialog-create-model/dialog-create-model.component */ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.ts");
/* harmony import */ var _pipes_filtr_list_param_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/filtr-list-param.pipe */ "./src/app/shared/pipes/filtr-list-param.pipe.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/click-outside.directive */ "./src/app/shared/directives/click-outside.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]
            ],
            entryComponents: [_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_6__["DialogParametersComponent"], _components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateModelComponent"]],
            declarations: [_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_6__["DialogParametersComponent"], _components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateModelComponent"], _pipes_filtr_list_param_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltrListParamPipe"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"]],
        })
    ], SharedModule);
    return SharedModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shumik/Documents/mean/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map