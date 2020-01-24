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
/* harmony import */ var _users_info_users_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-info/users-info.component */ "./src/app/admin/users-info/users-info.component.ts");
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
            },
            {
                path: 'users',
                component: _users_info_users_info_component__WEBPACK_IMPORTED_MODULE_4__["UsersInfoComponent"],
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
/* harmony import */ var _auth_token_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/token.storage */ "./src/app/auth/token.storage.ts");
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
    function OnlyAdminUsersGuard(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    OnlyAdminUsersGuard.prototype.canActivate = function () {
        var user = this.tokenStorage.getUser();
        console.log(user);
        return user && user.isAdmin;
    };
    OnlyAdminUsersGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["TokenStorage"]])
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
/* harmony import */ var _users_info_users_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-info/users-info.component */ "./src/app/admin/users-info/users-info.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _users_info_users_info_component__WEBPACK_IMPORTED_MODULE_5__["UsersInfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
            ],
            providers: [
                _admin_user_guard__WEBPACK_IMPORTED_MODULE_4__["OnlyAdminUsersGuard"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/users-info/users-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/users-info/users-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table id=\"customers\">\n  <tr>\n    <th>Users</th>\n    <th>Models</th>\n    <th>Objects</th>\n    <th>Admin</th>\n  </tr>\n  <tr *ngFor=\"let user of users\">\n    <td>{{user.email}}</td>\n    <td>{{getModels(user._id).length}}</td>\n    <td>{{getComponents(user._id).length}}</td>\n    <td>\n        <mat-checkbox [(ngModel)]=\"user.isAdmin\" (ngModelChange)=\"setAdmin(user)\">Admin</mat-checkbox>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/users-info/users-info.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/users-info/users-info.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#customers {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  margin-left: 40px; }\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px; }\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#customers tr:hover {\n  background-color: #ddd; }\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/admin/users-info/users-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/users-info/users-info.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersInfoComponent", function() { return UsersInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _shared_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/component.service */ "./src/app/shared/component.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersInfoComponent = /** @class */ (function () {
    function UsersInfoComponent(modelService, componentService) {
        var _this = this;
        this.modelService = modelService;
        this.componentService = componentService;
        this.users = [];
        this.models = [];
        this.components = [];
        this.modelService.getAllUsers().subscribe(function (data) {
            _this.users = data;
            console.log(data);
        });
        this.modelService.getAll().subscribe(function (data) {
            _this.models = data;
            console.log(data);
        });
        this.componentService.getAll().subscribe(function (data) {
            _this.components = data;
            console.log(data);
        });
    }
    UsersInfoComponent.prototype.ngOnInit = function () {
    };
    UsersInfoComponent.prototype.setAdmin = function (user) {
        var _this = this;
        this.modelService.updateUserById(user).subscribe(function () {
            _this.modelService.getAllUsers().subscribe(function (data) {
                _this.users = data;
                console.log(data);
            });
        });
    };
    UsersInfoComponent.prototype.getModels = function (id) {
        return this.models.filter(function (model) {
            return model.userId === id;
        });
    };
    UsersInfoComponent.prototype.getComponents = function (id) {
        return this.components.filter(function (component) {
            return component.userId === id;
        });
    };
    UsersInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-info',
            template: __webpack_require__(/*! ./users-info.component.html */ "./src/app/admin/users-info/users-info.component.html"),
            styles: [__webpack_require__(/*! ./users-info.component.scss */ "./src/app/admin/users-info/users-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"], _shared_component_service__WEBPACK_IMPORTED_MODULE_2__["ComponentService"]])
    ], UsersInfoComponent);
    return UsersInfoComponent;
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

module.exports = "<app-header [user]=\"user\"></app-header>\r\n<div class=\"wrapper-app\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer>\r\n</footer>\r\n"

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
/* harmony import */ var _auth_token_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/token.storage */ "./src/app/auth/token.storage.ts");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/model.service */ "./src/app/shared/model.service.ts");
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
    function AppComponent(authService, router, domSanitizer, matIconRegistry, tokenStorage, modelService) {
        this.authService = authService;
        this.router = router;
        this.domSanitizer = domSanitizer;
        this.matIconRegistry = matIconRegistry;
        this.tokenStorage = tokenStorage;
        this.modelService = modelService;
        this.registerSvgIcons();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init this.user on startup
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
            window.user = data.user;
            // this.user.isAdmin = true;
            // this.modelService.updateUserById(this.user).subscribe(() => {
            // })
            _this.tokenStorage.saveUser(JSON.stringify(data.user));
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
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _auth_token_storage__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"],
            _shared_model_service__WEBPACK_IMPORTED_MODULE_6__["ModelService"]])
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

module.exports = "<h1 class=\"title\">Welcome back!</h1>\r\n<p class=\"subtitle\">Log in below and make work flow.</p>\r\n<p class=\"subtitle\" *ngIf=\"showError\" style=\"color: red\">Incorrect login or password</p>\r\n\r\n<div class=\"auth-container\">\r\n  <form action=\"\">\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"text\"\r\n        name=\"email\"\r\n        class=\"input\"\r\n        placeholder=\"Your email\"\r\n        [(ngModel)]=\"email\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"password\"\r\n        class=\"input\"\r\n        [(ngModel)]=\"password\"\r\n        name=\"password\"\r\n        placeholder=\"Your password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-submit\">\r\n      <button (click)=\"login()\" mat-raised-button color=\"primary\">\r\n        Login\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <div class=\"form-footer df jc-b\">\r\n    <span>\r\n        No account yet?\r\n      <a class=\"button-link\" [routerLink]=\"['/auth/register']\">Sign up</a>\r\n    </span>\r\n    <span>\r\n      <a class=\"button-link\">Forgot your password?</a>\r\n    </span>\r\n  </div>\r\n  <!-- <form action=\"\" class=\"social-form\">\r\n    <button mat-stroked-button>\r\n      <img src=\"assets/icons/btn_google.svg\" alt=\"\" />\r\n      Login with Google\r\n    </button>\r\n    <button mat-stroked-button>\r\n      <img src=\"assets/icons/btn_linkedin.svg\" alt=\"\" />\r\n      Login with LinkedIn\r\n    </button>\r\n  </form> -->\r\n</div>\r\n\r\n<!-- <mat-card class=\"example-card\">\r\n  <mat-card-content>\r\n    <form class=\"example-form\">\r\n      <table cellspacing=\"0\">\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                placeholder=\"Email\"\r\n                [(ngModel)]=\"email\"\r\n                name=\"email\"\r\n                required\r\n              />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                placeholder=\"Password\"\r\n                [(ngModel)]=\"password\"\r\n                type=\"password\"\r\n                name=\"password\"\r\n                required\r\n              />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\r\n    <span\r\n      >Don't have an account ?\r\n      <a [routerLink]=\"['/auth/register']\">register</a> here</span\r\n    >\r\n  </mat-card-actions>\r\n</mat-card> -->"

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

module.exports = "<h1 class=\"title\">Create a Cogintech Account</h1>\r\n<p class=\"subtitle\">Sign up below and make work flow.</p>\r\n<div class=\"auth-container\">\r\n  <form action=\"\" [formGroup]=\"userForm\">\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"input\"\r\n        placeholder=\"Your name\"\r\n        formControlName=\"fullname\"\r\n        name=\"fullname\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input\r\n        type=\"email\"\r\n        class=\"input\"\r\n        formControlName=\"email\"\r\n        name=\"email\"\r\n        placeholder=\"Your email address\"\r\n      />\r\n      <div class=\"error\" *ngIf=\"userForm.controls['email'].invalid && userForm.controls['email'].touched\">\r\n          Password mismatch\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input\r\n        class=\"input\"\r\n        formControlName=\"password\"\r\n        type=\"password\"\r\n        name=\"password\"\r\n        placeholder=\"Choose a password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input\r\n        class=\"input\"\r\n        formControlName=\"repeatPassword\"\r\n        type=\"password\"\r\n        name=\"repeatPassword\"\r\n        placeholder=\"Repeat a password\"\r\n      />\r\n      <div class=\"error\" *ngIf=\"userForm.controls['repeatPassword'].invalid && userForm.controls['repeatPassword'].touched\">\r\n        Password mismatch\r\n      </div>\r\n    </div>\r\n    <div class=\"form-submit\">\r\n      <button (click)=\"register()\" mat-raised-button color=\"primary\">\r\n        Sign up free\r\n      </button>\r\n    </div>\r\n    <div class=\"form-footer\">\r\n      <span>\r\n        By signing up you agree to our\r\n        <a target=\"_blank\" class=\"button-link\">Terms of Use</a> and\r\n        <a target=\"_blank\" class=\"button-link\">Privacy Policy</a>.\r\n      </span>\r\n    </div>\r\n  </form>\r\n  <!-- <form action=\"\" class=\"social-form\">\r\n    <button mat-stroked-button>\r\n      <img src=\"assets/icons/btn_google.svg\" alt=\"\" />\r\n      Sign up with Google\r\n    </button>\r\n    <button mat-stroked-button>\r\n      <img src=\"assets/icons/btn_linkedin.svg\" alt=\"\" />\r\n      Sign up with LinkedIn\r\n    </button>\r\n  </form> -->\r\n  <div class=\"form-footer\">\r\n    <span>\r\n      Already got an account?\r\n      <a class=\"button-link\" [routerLink]=\"['/auth/login']\">Login</a>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<!-- <mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <mat-card-title>Register</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <form class=\"example-form\">\r\n      <table cellspacing=\"0\" [formGroup]=\"userForm\">\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                placeholder=\"Fullname\"\r\n                formControlName=\"fullname\"\r\n                name=\"fullname\"\r\n                required\r\n              />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                placeholder=\"Email\"\r\n                formControlName=\"email\"\r\n                name=\"email\"\r\n                required\r\n              />\r\n              <mat-error *ngIf=\"email.invalid && email.errors.email\"\r\n                >Invalid email address</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                placeholder=\"Password\"\r\n                formControlName=\"password\"\r\n                type=\"password\"\r\n                name=\"password\"\r\n                required\r\n              />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field>\r\n              <input\r\n                matInput\r\n                placeholder=\"Reapet Password\"\r\n                formControlName=\"repeatPassword\"\r\n                type=\"password\"\r\n                name=\"repeatPassword\"\r\n                required\r\n              />\r\n              <mat-error\r\n                *ngIf=\"\r\n                  repeatPassword.invalid && repeatPassword.errors.passwordMatch\r\n                \"\r\n                >Password mismatch</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </form>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-raised-button (click)=\"register()\" color=\"primary\">\r\n      Register\r\n    </button>\r\n    <span\r\n      >Allrady have an account ?\r\n      <a [routerLink]=\"['/auth/login']\">login</a> here</span\r\n    >\r\n  </mat-card-actions>\r\n</mat-card> -->"

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
var USER = 'user';
var TokenStorage = /** @class */ (function () {
    function TokenStorage() {
    }
    TokenStorage.prototype.signOut = function () {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(USER);
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
    TokenStorage.prototype.saveUser = function (user) {
        if (!user)
            return;
        window.localStorage.removeItem(USER);
        window.localStorage.setItem(USER, user);
    };
    TokenStorage.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem(USER));
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

module.exports = "<header>\r\n  <mat-toolbar color=\"primary\">\r\n    <div [ngClass]=\"{'container': router.url.slice(1, 5) === 'auth'}\" class=\"df full-width ai-e\">\r\n      <a [routerLink]=\"['/']\" class=\"logo\"></a>\r\n      <div *ngIf=\"selectedModel\" style=\"padding-bottom: 5px; color: #463e3e;\">Model: {{selectedModel.name}}</div>\r\n      <span class=\"example-spacer\">\r\n        <app-player></app-player>\r\n      </span>\r\n      <button *ngIf=\"!user\" style=\"margin-bottom: 5px;\" [routerLink]=\"['/auth/register']\" mat-raised-button\r\n        color=\"primary\" class=\"m-r-10\">\r\n        Sign up free\r\n      </button>\r\n      <button style=\"margin-bottom: 5px;\" mat-button color=\"primary\" [routerLink]=\"['/auth/login']\" *ngIf=\"!user\">\r\n        Login\r\n      </button>\r\n      <div style=\"margin-bottom: 5px;\">\r\n        <a class=\"links side\" *ngIf=\"user\" [matMenuTriggerFor]=\"menu\">\r\n          <mat-icon>account_circle</mat-icon>{{ user.fullname }}\r\n        </a>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item *ngIf=\"user && user.isAdmin\" [routerLink]=\"['/admin']\">\r\n            admin\r\n          </button>\r\n          <button mat-menu-item (click)=\"logout()\">logout</button>\r\n        </mat-menu>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  width: 100%; }\n  header .logo {\n    background-image: url('logo.png');\n    width: 120px;\n    height: 40px;\n    background-size: contain;\n    background-repeat: no-repeat; }\n  header .example-spacer {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: center; }\n  header .links {\n    color: white;\n    font-family: \"Helvetica Neue\", sans-serif;\n    font-size: 15px;\n    font-weight: initial;\n    letter-spacing: -1px;\n    line-height: 1;\n    text-align: center;\n    padding: 15px; }\n  header .links.side {\n      padding: 0 14px; }\n  header .mat-toolbar {\n    background: white;\n    height: unset;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.11);\n    z-index: 10;\n    position: relative;\n    min-height: 64px; }\n  header .mat-icon {\n    vertical-align: middle;\n    margin: 0 5px;\n    color: #673ab7; }\n  header a {\n    cursor: pointer; }\n"

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
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/model.service */ "./src/app/shared/model.service.ts");
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
    function HeaderComponent(authService, router, modelService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.modelService = modelService;
        console.log(2);
        this.modelService.selectedModelEvent.subscribe(function (data) {
            console.log(2);
            _this.selectedModel = data;
        });
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
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"]])
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

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

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

module.exports = "<div class=\"wrap\">\r\n  <div class=\"head\">\r\n    <div class=\"df ai-c\">\r\n      <div class=\"title\">\r\n        Recently Active\r\n      </div>\r\n      <!-- <div class=\"subtitle\">\r\n        Diagrams last changed by you\r\n      </div> -->\r\n    </div>\r\n    <div>\r\n      <button\r\n        (click)=\"openDialog()\"\r\n        mat-raised-button\r\n        color=\"primary\"\r\n      >\r\n        New project\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"model-list\">\r\n    <div *ngFor=\"let item of data\" class=\"model-wrap\">\r\n      <div [routerLink]=\"['/model/'+item._id]\" class=\"model\">\r\n        <div style=\"padding-left: 10px;\">\r\n          {{item.name}}\r\n        </div>\r\n        <div class=\"img-wrap\">\r\n          <img src=\"http://www.ucodice.com/kinglinkr/front/img/circle.png\" alt=\"\" />\r\n        </div>\r\n        <div>\r\n          <!-- <div class=\"name\">\r\n            {{item.name}}\r\n          </div> -->\r\n          <div class=\"desc\">\r\n            {{item.description}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"more-btn\">\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button (click)=\"edit(item)\" mat-menu-item class=\"menu-item\">\r\n          <i class=\"material-icons\">\r\n            edit\r\n          </i>\r\n          Edit\r\n        </button>\r\n        <button (click)=\"clone(item)\" mat-menu-item class=\"menu-item\">\r\n          <i class=\"material-icons\">\r\n            file_copy\r\n          </i>\r\n          Copy\r\n        </button>\r\n        <button (click)=\"remove(item)\" mat-menu-item class=\"menu-item\">\r\n          <i class=\"material-icons\">\r\n            delete_outline\r\n          </i>\r\n          Delete\r\n        </button>\r\n        <button (click)=\"export(item)\" mat-menu-item class=\"menu-item\">\r\n          <i class=\"material-icons\">\r\n            import_export\r\n          </i>\r\n          Export\r\n        </button>\r\n        <button (click)=\"file.click();selected = item;\" mat-menu-item class=\"menu-item\">\r\n          <i class=\"material-icons\">\r\n            import_export\r\n          </i>\r\n          Import\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<input #file type=\"file\" (change)=\"onChange($event)\" accept=\".upm\" style=\"display: none;\"/>\r\n\r\n"

/***/ }),

/***/ "./src/app/model-list/model-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/model-list/model-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  padding: 20px 40px; }\n  .wrap .head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 25px 0;\n    margin-bottom: 20px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .wrap .head .title {\n      color: #535353;\n      font-size: 19px;\n      font-family: Helvetica, Arial, sans-serif;\n      font-weight: 600; }\n  .wrap .head .subtitle {\n      font-size: 12px;\n      color: #7d7d7d;\n      margin: 0px 0px 0px 20px; }\n  .model-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -6px;\n  margin-right: -6px; }\n  .more-btn {\n  position: absolute;\n  z-index: 111;\n  right: 12px;\n  top: 13px; }\n  .menu-item {\n  display: flex;\n  align-items: center;\n  min-width: 150px; }\n  .menu-item .material-icons {\n    margin-right: 10px; }\n  .model-wrap {\n  padding: 12px;\n  max-width: 50%;\n  flex-basis: 50%;\n  height: 182px;\n  margin-bottom: 20px;\n  outline: none;\n  position: relative; }\n  .model-wrap .model {\n    outline: none;\n    color: #535353;\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.11);\n    border-width: 3px;\n    border-style: solid;\n    border-color: transparent;\n    -o-border-image: initial;\n       border-image: initial;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-flow: column;\n    justify-content: space-between;\n    cursor: pointer; }\n  .model-wrap .model .name {\n      color: #535353;\n      font-size: 14px;\n      font-weight: bold;\n      overflow-wrap: break-word;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      padding-left: 10px;\n      transition: all 0.3s; }\n  .model-wrap .model .desc {\n      padding-left: 10px;\n      padding-bottom: 10px;\n      overflow-wrap: break-word;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      line-height: 1.618;\n      font-size: 0.75em;\n      font-weight: 100;\n      font-family: Helvetica, Arial, sans-serif; }\n  .model-wrap .model .img-wrap {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .model-wrap .model .img-wrap img {\n        height: 100%;\n        position: absolute; }\n  .model-wrap .model:hover .name {\n      color: #673ab7; }\n  @media (min-width: 600px) {\n  .model-wrap {\n    flex-grow: 0;\n    max-width: 33.333333%;\n    flex-basis: 33.333333%; } }\n"

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
/* harmony import */ var _shared_component_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/component.service */ "./src/app/shared/component.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function ModelListComponent(modelService, authService, router, dialog, componentService) {
        this.modelService = modelService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.componentService = componentService;
        this.model = new _shared_model__WEBPACK_IMPORTED_MODULE_6__["ModelClass"]();
    }
    ModelListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
            console.log(data, _this.user._id, 11);
            _this.getData();
        });
    };
    ModelListComponent.prototype.getData = function () {
        var _this = this;
        this.modelService.getAllById(this.user._id).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    ModelListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_5__["DialogCreateModelComponent"], {
            width: '450px',
            data: {
                id: 'mod' + (this.data.length + 1),
                label: 'Create Model',
                dataArr: this.data
            }
        });
        dialogRef.afterClosed().subscribe(function (model) {
            if (model) {
                model.userId = _this.user._id;
                model.ver = "1.0";
                _this.modelService.create(model).subscribe(function (data) {
                    _this.router.navigate(['model/' + data._id]);
                });
            }
        });
    };
    ModelListComponent.prototype.remove = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_5__["DialogCreateModelComponent"], {
            width: '450px',
            data: {
                label: 'You delete the model! Are you sure?',
                deleteMode: true
            }
        });
        dialogRef.afterClosed().subscribe(function (model) {
            if (model) {
                _this.modelService.remove(item._id).subscribe(function (data) {
                    _this.getData();
                });
            }
        });
    };
    ModelListComponent.prototype.edit = function (item) {
        var _this = this;
        var id = item._id;
        var dialogRef = this.dialog.open(_shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_5__["DialogCreateModelComponent"], {
            width: '450px',
            data: {
                id: item.id,
                name: item.name,
                description: item.description,
                label: 'Edit Model',
                dataArr: this.data
            }
        });
        dialogRef.afterClosed().subscribe(function (model) {
            if (model) {
                item.id = model.id;
                item.name = model.name;
                item.description = model.description;
                _this.modelService.updateById(item).subscribe(function (data) {
                    _this.getData();
                    _this.componentService.getAllById(id).subscribe(function (arr) {
                        _this.componentService.deleteAll(item).subscribe(function (data) {
                            _this.createNewComponents(arr, item);
                        });
                    });
                });
            }
        });
    };
    ModelListComponent.prototype.clone = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_5__["DialogCreateModelComponent"], {
            width: '450px',
            data: {
                id: '',
                name: item.name,
                description: item.description,
                label: 'Clone Model',
                dataArr: this.data
            }
        });
        dialogRef.afterClosed().subscribe(function (model) {
            if (model) {
                model.userId = _this.user._id;
                _this.modelService.create(model).subscribe(function (newModel) {
                    _this.componentService.getAllById(item._id).subscribe(function (arr) {
                        _this.createNewComponents(arr, newModel);
                    });
                });
            }
        });
    };
    ModelListComponent.prototype.onChange = function (event) {
        var file = event.srcElement.files[0];
        if (file) {
            var reader = new FileReader();
            var self_1 = this;
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                var arr = JSON.parse(evt.target.result).data;
                self_1.componentService.deleteAll(self_1.selected).subscribe(function (data) {
                    self_1.createNewComponents(arr, self_1.selected, true);
                });
            };
            reader.onerror = function (evt) {
                console.log('error reading file');
            };
        }
    };
    ModelListComponent.prototype.createNewComponents = function (arr, newModel, mask) {
        var _this = this;
        var observableList = [];
        arr.forEach(function (m) {
            m.modelId = newModel._id;
            m.userId = _this.user._id;
            m.parameters.forEach(function (p) {
                if (mask) {
                    var re = new RegExp("#" + m.modelIdName + "#", 'g');
                    p.value = p.value.replace(re, newModel.id);
                }
                else {
                    var re = new RegExp(m.modelIdName, 'g');
                    p.value = p.value.replace(re, newModel.id);
                }
            });
            m.modelIdName = newModel.id;
            delete m._id;
            observableList.push(_this.componentService.create(m));
        });
        var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(observableList);
        obs.subscribe(function (t) {
            _this.router.navigate(["model/" + newModel._id]);
        });
    };
    ModelListComponent.prototype.export = function (item) {
        var _this = this;
        this.componentService.getAllById(item._id).subscribe(function (data) {
            data.forEach(function (element) {
                delete element._id;
                element.userId = "#" + element.userId + "#";
                element.parameters.forEach(function (p) {
                    var re = new RegExp(" " + element.modelIdName + ".", 'g');
                    p.value = p.value.replace(re, " #" + element.modelIdName + "#.");
                });
            });
            var verSplit = (item.ver || "1.0").split(".");
            var ver = +verSplit[0] + 1 + ".0";
            var obj = {
                "modelName ": item.name,
                "modelDescription ": item.description,
                "date": new Date(),
                "data": data,
                "ver": ver
            };
            item.ver = ver;
            _this.modelService.updateById(item).subscribe(function () { });
            console.log(obj);
            _this.download(JSON.stringify(obj), 'json.upm', 'json');
        });
    };
    ModelListComponent.prototype.download = function (content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
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
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _shared_component_service__WEBPACK_IMPORTED_MODULE_7__["ComponentService"]])
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

module.exports = "\r\n<input #file type=\"file\" (change)=\"onChange($event)\"  style=\"display: none;\"/>\r\n\r\n\r\n<div class=\"bpm-wrap\">\r\n  <div class=\"palette-entries\">\r\n    <div *ngFor=\"let item of types\" class=\"bpm-item\">\r\n      <div [id]=\"item\" [draggable]=\"true\" [ngStyle]=\"{'background': colors[item]}\"\r\n       class=\"square\" [title]=\"item\" tooltipPosition=\"top\">\r\n      {{item}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"player-button\">\r\n      <div class=\"wrap\">\r\n          <button (click)=\"generateCSVPatern()\" mat-icon-button>\r\n            <i class=\"material-icons\">\r\n                table_chart\r\n            </i>\r\n          </button>\r\n          <button (click)=\"file.click()\" mat-icon-button>\r\n            <i class=\"material-icons\">\r\n              folder\r\n            </i>\r\n          </button>\r\n          <button (click)=\"generateCSVFull()\" mat-icon-button>\r\n            <i class=\"material-icons\">\r\n              cloud_download\r\n            </i>\r\n          </button>\r\n      </div>\r\n  </div>\r\n  <div class=\"coco-bpm-graph\" id=\"graph\" style=\"height: calc(100vh - 60px);\"></div>\r\n  <!-- <div class=\"clickShield\" *ngIf=\"showSide\" (click)=\"showSide = false\"></div> -->\r\n  <div (click)=\"showSide = !showSide\" class=\"toggle-sidebar-btn\" [ngClass]=\"{ 'active': showSide }\">\r\n    <a mat-raised-button>\r\n      <i class=\"material-icons\">\r\n        menu_open\r\n      </i>\r\n    </a>\r\n  </div>\r\n  <div [ngClass]=\"{ show: showSide }\" *ngIf=\"selectedModal\" class=\"sidebar show\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Id (latin simbols and digits)</mat-label>\r\n      <input id=\"dataId\" matInput [(ngModel)]=\"data[selectedModal].id\" (keydown)=\"onKeyDown($event)\"\r\n      (ngModelChange)=\"idModelChange($event)\"\r\n      (keyup.enter)=\"onFieldChangeId($event)\" (blur)=\"onFieldChangeId($event)\"/>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Name</mat-label>\r\n      <input matInput [(ngModel)]=\"data[selectedModal].name\" \r\n      (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>ObjectClass</mat-label>\r\n      <mat-select [(ngModel)]=\"data[selectedModal].objectClass\" \r\n      (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\">\r\n        <mat-option value=\"Board\">\r\n          Board\r\n        </mat-option>\r\n        <mat-option value=\"Input\">\r\n          Input\r\n        </mat-option>\r\n        <mat-option value=\"Output\">\r\n          Output\r\n        </mat-option>\r\n        <mat-option value=\"InputOutput\">\r\n          InputOutput\r\n        </mat-option>\r\n        <mat-option value=\"Process\">\r\n          Process\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"ObjectType\" [(ngModel)]=\"data[selectedModal].objectType\"\r\n      (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <textarea matInput placeholder=\"Description\" [(ngModel)]=\"data[selectedModal].description\"\r\n      (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\"></textarea>\r\n    </mat-form-field>\r\n    <!-- <div class=\"input-btn-wrap\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input readonly [(ngModel)]=\"picture\" matInput placeholder=\"Picture\" />\r\n      </mat-form-field>\r\n      <input #file [(ngModel)]=\"picture\" hidden type=\"file\" />\r\n      <button (click)=\"file.click()\" mat-raised-button color=\"primary\" class=\"btn\">\r\n        <i class=\"material-icons\">\r\n          forward\r\n        </i>\r\n      </button>\r\n    </div> -->\r\n    <table class=\"table\">\r\n      <tr>\r\n        <th style=\"text-align: left;\">Parameters</th>\r\n        <th></th>\r\n        <th>M</th>\r\n        <th>C</th>\r\n        <th>S</th>\r\n        <th></th>\r\n      </tr>\r\n\r\n      <tbody *ngFor=\"let item of data[selectedModal].parameters.slice().reverse(); let i = index\">\r\n        <tr>\r\n          <td>\r\n            {{item.name}}\r\n          </td>\r\n          <td>\r\n            <mat-form-field *ngIf=\"(item.value && item.value.charAt(0) !== '=') || !item.value\" class=\"example-full-width table-input\">\r\n              <input matInput [(ngModel)]=\"item.value\" \r\n              (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event);validValue(item, index)\" />\r\n            </mat-form-field>\r\n            <span *ngIf=\"item.value && item.value.charAt(0) === '=' \">\r\n              f (x)\r\n            </span>\r\n          </td>\r\n          <td>\r\n            <div class=\"df jc-c\">\r\n              <mat-checkbox [(ngModel)]=\"item.measurable\" \r\n              (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\"></mat-checkbox>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"df jc-c\">\r\n              <mat-checkbox [(ngModel)]=\"item.changeable\" \r\n              (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\"></mat-checkbox>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"df jc-c\">\r\n              <mat-checkbox [(ngModel)]=\"item.showOnDiagram\" \r\n              (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\"></mat-checkbox>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div class=\"df jc-c ai-c\">\r\n              <button class=\"table-more-btn\" mat-icon-button\r\n                (click)=\"optionsModal[item._id + index] = !optionsModal[item._id + index]\">\r\n                <i class=\"material-icons-outlined\">\r\n                  arrow_drop_down_circle\r\n                </i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"optionsModal[item._id + index]\">\r\n          <td colspan=\"6\">\r\n            <mat-accordion>\r\n              <mat-expansion-panel [expanded]=\"true\">\r\n                <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                    Personal data\r\n                  </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div class=\"loop-item desc\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Id (latin simbols and digits)\" (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"item.id\"\r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input matInput placeholder=\"Name\" [(ngModel)]=\"item.name\"\r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <textarea matInput placeholder=\"Description\" [(ngModel)]=\"item.description\"\r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\"></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"input-btn-wrap\">\r\n                    <mat-form-field *ngIf=\"item.value && item.value.charAt(0) !== '=' \" class=\"example-full-width\">\r\n                      <input matInput placeholder=\"Value\" [(ngModel)]=\"item.value\"\r\n                      (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event);validValue(item,index)\"/>\r\n                    </mat-form-field>\r\n                    <span *ngIf=\"item.value && item.value.charAt(0) === '=' \" class=\"example-full-width\">Value = f (x)</span>\r\n\r\n                    <button (click)=\"openDialog(item)\" mat-raised-button color=\"primary\" class=\"btn\">\r\n                      <i>\r\n                        f(x)\r\n                      </i>\r\n                    </button>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <mat-label>Feature label</mat-label>\r\n                    <mat-select>\r\n                      <mat-option value=\"1\">\r\n                        1\r\n                      </mat-option>\r\n                      <mat-option value=\"2\">\r\n                        2\r\n                      </mat-option>\r\n                      <mat-option value=\"3\">\r\n                        3\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"chekboxs-list\">\r\n                    <mat-checkbox [(ngModel)]=\"item.measurable\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\">Measurable\r\n                    </mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"item.changeable\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\">Changeable\r\n                    </mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"item.showOnDiagram\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\">Show on\r\n                      diagram</mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"item.showName\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\">Show name\r\n                    </mat-checkbox>\r\n                  </div>\r\n                  <mat-form-field *ngIf=\"item.showOnDiagram\">\r\n                    <mat-label>Control type</mat-label>\r\n                    <mat-select [(ngModel)]=\"item.controlType\" \r\n                    (keyup.enter)=\"onFieldChange($event);\" (blur)=\"onFieldChange($event);sliderChange($event, item, index)\">\r\n                      <mat-option value=\"Value\">\r\n                        Value\r\n                      </mat-option>\r\n                      <mat-option value=\"Input\">\r\n                        Input\r\n                      </mat-option>\r\n                      <mat-option value=\"Slider\">\r\n                        Slider\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field *ngIf=\"item.controlType === 'Slider'\">\r\n                    <input matInput placeholder=\"Slider Step\" [(ngModel)]=\"item.sliderStep\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n                  </mat-form-field>\r\n                  <mat-form-field *ngIf=\"item.controlType === 'Slider'\">\r\n                    <input matInput placeholder=\"Slider Max\" [(ngModel)]=\"item.sliderMax\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n                  </mat-form-field>\r\n                  <mat-form-field *ngIf=\"item.controlType === 'Slider'\">\r\n                    <input matInput placeholder=\"Slider Min\" [(ngModel)]=\"item.sliderMin\" \r\n                    (keyup.enter)=\"onFieldChange($event)\" (blur)=\"onFieldChange($event)\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </mat-expansion-panel>\r\n            </mat-accordion>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n\r\n    <div class=\"m-t-10 m-b-10\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"addParametr()\">+ Add parameter</button>\r\n    </div>\r\n\r\n    <div class=\"loop-item\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Id (latin simbols and digits)\" (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"newParametr.id\" />\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"newParametr.name\" />\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"newParametr.description\"></textarea>\r\n      </mat-form-field>\r\n      <div class=\"input-btn-wrap\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Value\" [(ngModel)]=\"newParametr.value\" />\r\n        </mat-form-field>\r\n        <button (click)=\"openDialog(newParametr)\" mat-raised-button color=\"primary\" class=\"btn\">\r\n          <i>\r\n            f(x)\r\n          </i>\r\n        </button>\r\n      </div>\r\n      <mat-form-field>\r\n        <mat-label>Feature label</mat-label>\r\n        <mat-select [(ngModel)]=\"newParametr.featureLabelNone\">\r\n          <mat-option value=\"1\">\r\n            1\r\n          </mat-option>\r\n          <mat-option value=\"2\">\r\n            2\r\n          </mat-option>\r\n          <mat-option value=\"3\">\r\n            3\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"chekboxs-list\">\r\n        <mat-checkbox [(ngModel)]=\"newParametr.measurable\">Measurable</mat-checkbox>\r\n        <mat-checkbox [(ngModel)]=\"newParametr.changeable\">Changeable</mat-checkbox>\r\n        <mat-checkbox [(ngModel)]=\"newParametr.showOnDiagram\">Show on diagram</mat-checkbox>\r\n        <mat-checkbox [(ngModel)]=\"newParametr.showName\">Show name</mat-checkbox>\r\n      </div>\r\n      <mat-form-field *ngIf=\"newParametr.showOnDiagram\">\r\n        <mat-label>Control type</mat-label>\r\n        <mat-select [(ngModel)]=\"newParametr.controlType\">\r\n          <mat-option value=\"Value\">\r\n            Value\r\n          </mat-option>\r\n          <mat-option value=\"Input\">\r\n            Input\r\n          </mat-option>\r\n          <mat-option value=\"Slider\">\r\n            Slider\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"newParametr.controlType === 'Slider'\">\r\n        <input matInput placeholder=\"Slider Step\" [(ngModel)]=\"newParametr.sliderStep\" />\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"newParametr.controlType === 'Slider'\">\r\n        <input matInput placeholder=\"Slider Max\" [(ngModel)]=\"newParametr.sliderMax\" />\r\n      </mat-form-field>\r\n      <mat-form-field *ngIf=\"newParametr.controlType === 'Slider'\">\r\n        <input matInput placeholder=\"Slider Min\" [(ngModel)]=\"newParametr.sliderMin\" />\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/model-main/model-main.component.scss":
/*!******************************************************!*\
  !*** ./src/app/model-main/model-main.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bpm-wrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: white;\n  border: 1px solid #ececec;\n  overflow: hidden;\n  min-height: calc(100vh - 58px); }\n\n.player-button {\n  position: absolute;\n  padding: 5px 0;\n  left: 31px;\n  top: 69%;\n  width: 44px;\n  border-radius: 5px;\n  background: #fafafa;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-wrap: wrap; }\n\n.player-button .wrap {\n    display: -ms-grid;\n    display: grid; }\n\n.palette-entries {\n  position: absolute;\n  padding: 5px 0;\n  left: 20px;\n  top: 20px;\n  width: 94px;\n  border-radius: 5px;\n  background: #fafafa;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-wrap: wrap; }\n\n.palette-entries .bpm-item {\n    width: 100%;\n    height: 25px;\n    line-height: 46px;\n    cursor: default;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.palette-entries .bpm-item .icon {\n      color: #333;\n      font-size: 30px; }\n\n.palette-entries .bpm-item:hover .icon {\n      color: #ff7400; }\n\n.palette-entries .bpm-item .square {\n      width: calc(100% - 10px);\n      height: 23px;\n      border-radius: 5px;\n      border: 2px solid;\n      display: flex;\n      align-items: center;\n      font-size: 13px;\n      padding-left: 3px; }\n\n.palette-entries .separator {\n    margin: 0 5px;\n    padding-top: 5px;\n    border: none;\n    border-bottom: 1px solid #ddd;\n    clear: both;\n    width: 100%; }\n\n.sidebar {\n  position: absolute;\n  width: 100%;\n  max-width: 400px;\n  background-color: white;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0);\n  transition: all 0.4s;\n  height: 100%;\n  right: 0;\n  top: 0;\n  padding: 15px;\n  overflow-y: auto; }\n\n.sidebar.show {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    box-shadow: rgba(0, 0, 0, 0.1) -8px 0px 5px -4px;\n    z-index: 111; }\n\nmat-form-field {\n  display: block; }\n\n.input-btn-wrap {\n  display: flex;\n  align-items: center; }\n\n.input-btn-wrap mat-form-field {\n    width: 100%; }\n\n.input-btn-wrap button.btn {\n    min-width: 0;\n    padding: 0 6px;\n    margin-left: 25px;\n    min-width: 35px; }\n\n.input-btn-wrap button.btn .material-icons {\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg); }\n\ntable {\n  width: 100%; }\n\ntable td {\n    padding: 0; }\n\ntable th {\n    padding: 0; }\n\n.chekboxs-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.chekboxs-list mat-checkbox {\n    width: 50%; }\n\n.loop-item {\n  padding-bottom: 20px;\n  border-bottom: 1px dashed #b7b7b7;\n  padding: 5px 10px;\n  padding-bottom: 10px;\n  border: 1px dashed #b7b7b7; }\n\n.loop-item.desc {\n    padding: 0 !important;\n    border: none !important; }\n\n.clickShield {\n  position: fixed;\n  background: #0000003d;\n  width: 100%;\n  height: 100%;\n  top: 0; }\n\n.toggle-sidebar-btn {\n  position: absolute;\n  top: calc(50% - 18px);\n  right: 0;\n  transition: all .4s; }\n\n.toggle-sidebar-btn.active {\n    -webkit-transform: translate(-400px, 0);\n            transform: translate(-400px, 0); }\n\n.toggle-sidebar-btn a {\n    width: 29px;\n    min-width: unset;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0; }\n"

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
/* harmony import */ var _shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/dialog-create-model/dialog-create-model.component */ "./src/app/shared/components/dialog-create-model/dialog-create-model.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_components_player_player_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/player/player.service */ "./src/app/shared/components/player/player.service.ts");
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
    function ModelMainComponent(modelService, componentService, dialog, authService, activatedRoute, http, playerService) {
        var _this = this;
        this.modelService = modelService;
        this.componentService = componentService;
        this.dialog = dialog;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.playerService = playerService;
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
        this.formulaSaverOld = {};
        this.saverComponent = [];
        this.modelsKeys = {};
        this.copyIndexCounter = {};
        this.formulaSaver = {};
        this.txtQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.txtQueryChangedDebounce = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.newParametr = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("", "", "0", "");
        this.modelId = this.activatedRoute.snapshot.paramMap.get('id');
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
            _this.modelService.getAllById(_this.user._id).subscribe(function (data) {
                console.log(data);
                _this.componentService.getAllByUserId(_this.user._id).subscribe(function (data) {
                    _this.formulaData = data;
                });
                _this.modelList = data;
                _this.modelList.forEach(function (model) {
                    if (_this.modelId === model._id) {
                        _this.modelID = model.id;
                    }
                    _this.modelsKeys[model._id] = model.id;
                });
                _this.modelService.getAll().subscribe(function (data) {
                    data.forEach(function (element) {
                        if (element._id === _this.modelId) {
                            _this.modelService.selectedModelEvent.emit(element);
                            _this.selectedModalObj = element;
                        }
                    });
                });
                _this.getData();
            });
        });
        this.setInterval = setInterval(function () {
            _this.removeAll();
            _this.drowLines();
            _this.drow();
            // this.txtQueryChanged.next(this.uuidv4());
            console.log(23);
        }, 5000);
        this.txtQueryChanged
            .subscribe(function (model) {
            _this.updateQuery(model);
        });
        this.txtQueryChangedDebounce
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (model) {
            _this.updateQuery(model);
        });
        this.playerService.cursorEmitter.subscribe(function (cursor) {
            _this.formulaSaver = {};
            for (var i = 1; i < _this.dataPlayer.length; i++) {
                for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.id.toLowerCase().trim() === _this.dataPlayer[i][0].toLowerCase().trim()) {
                        for (var _b = 0, _c = item.parameters; _b < _c.length; _b++) {
                            var param = _c[_b];
                            if (param.id.toLowerCase().trim() === _this.dataPlayer[i][2].toLowerCase().trim()) {
                                param.value = _this.dataPlayer[i][cursor];
                                _this.formulaSaver[_this.modelID + "." + item.id + "." + param.id] = _this.dataPlayer[i][cursor];
                            }
                        }
                    }
                }
            }
            _this.clear();
        });
    }
    ModelMainComponent.prototype.updateQuery = function (model) {
        var _this = this;
        this.saverComponent.push(JSON.parse(JSON.stringify(this.data)));
        var id = this.data[model.selected];
        if (id) {
            this.componentService.update(id).subscribe(function (r) {
                if (!model.drag) {
                    _this.componentService.getAllByUserId(_this.user._id).subscribe(function (data) {
                        _this.formulaData = data;
                        _this.formulaSaver = {};
                        new Promise(function (resolve, reject) { _this.calc(resolve, reject); }).then(function () {
                            _this.removeAll();
                            _this.drow();
                        });
                    });
                }
            });
        }
    };
    ModelMainComponent.prototype.getData = function () {
        var _this = this;
        this.componentService.getAllById(this.modelId).subscribe(function (data) {
            _this.data = JSON.parse(JSON.stringify(data));
            _this.dataCopy = JSON.parse(JSON.stringify(data));
            _this.saverComponent = _this.saverComponent.concat([JSON.parse(JSON.stringify(_this.data))]);
            new Promise(function (resolve, reject) { _this.calc(resolve, reject); }).then(function () {
                _this.removeAll();
                _this.drowLines();
                _this.drow();
            });
        });
    };
    ModelMainComponent.prototype.onKeyPress = function ($event) {
        var _this = this;
        if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 67) {
            console.log('CTRL + C', this.selected);
            this.selectedCopyIndex = this.selected;
        }
        if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 86) {
            console.log('CTRL +  V', this.data[this.selectedCopyIndex]);
            if ((this.selectedCopyIndex || this.selectedCopyIndex === 0) && this.data[this.selectedCopyIndex]) {
                if (!this.copyIndexCounter[this.selectedCopyIndex]) {
                    this.copyIndexCounter[this.selectedCopyIndex] = 0;
                }
                var obj_1 = JSON.parse(JSON.stringify(this.data[this.selectedCopyIndex]));
                delete obj_1._id;
                var id_1 = obj_1.id.slice();
                obj_1.id = obj_1.id + "1";
                obj_1.x = obj_1.x + 50;
                obj_1.y = obj_1.y + 150 + (this.copyIndexCounter[this.selectedCopyIndex] * 80);
                obj_1.selected = [];
                obj_1.parameters.forEach(function (p) {
                    if (p.value && p.value.charAt(0) === "=") {
                        var re = new RegExp(id_1, 'g');
                        p.value = p.value.replace(re, obj_1.id).slice();
                    }
                });
                var res = void 0;
                do {
                    res = this.data.find(function (el) {
                        return el.id === obj_1.id;
                    });
                    if (res) {
                        obj_1.id += "1";
                    }
                } while (res);
                this.componentService.create(obj_1).subscribe(function (data) {
                    _this.componentService.getAllByUserId(_this.user._id).subscribe(function (comp) {
                        _this.formulaData = comp;
                        _this.copyIndexCounter[_this.selectedCopyIndex] += 1;
                        _this.saverComponent.push(JSON.parse(JSON.stringify(_this.data)));
                        _this.data.push(JSON.parse(JSON.stringify(data)));
                        _this.clear();
                        _this.dragType = null;
                    });
                });
            }
        }
    };
    ModelMainComponent.prototype.calc = function (resolve, reject) {
        var _this = this;
        this.data.forEach(function (comp) {
            comp.parameters.forEach(function (element, i) {
                if (element.value) {
                    var v = element.value;
                    var spcaSpit_1 = v.split(" ");
                    spcaSpit_1.forEach(function (element, index) {
                        var earr = element.split(".");
                        if (earr.length == 3) {
                            if (!_this.formulaSaver[earr[2]] && !_this.formulaSaver[element]) {
                                _this.formulaSearch(element);
                            }
                        }
                        if (comp.parameters.length === (i + 1) && spcaSpit_1.length === (index + 1)) {
                            if (resolve)
                                resolve();
                        }
                    });
                }
            });
        });
    };
    ModelMainComponent.prototype.clear = function () {
        this.selected = null;
        this.activeArrow = null;
        this.clickArrow = null;
        this.selectedLine = null;
        this.selectedLineId = null;
        this.selectedLineFrom = null;
        this.selectedLineTo = null;
        this.startDrowLine = null;
        this.removeAll();
        this.drowLines();
        this.drow();
    };
    ModelMainComponent.prototype.keyEvent = function (event) {
        // if (
        //   (event.keyCode === 46 || event.keyCode === 8) && this.selected
        // ) {
        // }
        var _this = this;
        if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) {
            this.undo();
        }
        if (event.keyCode === 27) {
            if (this.startDrowLine) {
                this.removeAll();
                document.documentElement.style.cursor = "default";
                this.clear();
            }
            if (!this.clickArrow) {
                this.unselectArrow();
            }
        }
        if ((event.keyCode === 46 || event.keyCode === 8) && (this.selectedLineId || this.selectedLineId === 0)) {
            this.selectedLineFrom.selected.forEach(function (id, index) {
                if (id === _this.selectedLineTo.id) {
                    _this.saverComponent.push(JSON.parse(JSON.stringify(_this.data)));
                    _this.data.forEach(function (element, i) {
                        if (element.id === _this.selectedLineFrom.id) {
                            _this.data[i].selected.splice(index, 1);
                            _this.txtQueryChanged.next({
                                value: _this.selectedLine,
                                selected: i
                            });
                        }
                    });
                }
            });
            this.clear();
        }
    };
    ModelMainComponent.prototype.openDialog = function (item) {
        var _this = this;
        this.openDialogItem = item;
        var dialogRef = this.dialog.open(_shared_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_4__["DialogParametersComponent"], {
            width: '450px',
            data: {
                list: this.modelList,
                formula: item.value,
                modelId: this.modelId
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
    ModelMainComponent.prototype.ngOnDestroy = function () {
        this.modelService.selectedModelEvent.emit(null);
        clearInterval(this.setInterval);
    };
    ModelMainComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    ModelMainComponent.prototype.undo = function () {
        var _this = this;
        if (this.saverComponent) {
            var arr = this.saverComponent[this.saverComponent.length - 2];
            if (arr && this.saverComponent.length > 1) {
                var oldData_1 = JSON.parse(JSON.stringify(this.data));
                this.data = JSON.parse(JSON.stringify(arr));
                this.saverComponent.pop();
                var observableList_1 = [];
                this.data.forEach(function (element) {
                    var res = JSON.parse(JSON.stringify(oldData_1)).find(function (el) {
                        return el.id === element.id;
                    });
                    if (!res) {
                        delete element._id;
                        observableList_1.push(_this.componentService.create(element));
                    }
                    else {
                        observableList_1.push(_this.componentService.update(element));
                    }
                });
                var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(observableList_1);
                obs.subscribe(function (t) {
                    _this.componentService.getAllByUserId(_this.user._id).subscribe(function (data) {
                        _this.formulaData = data;
                        _this.formulaSaver = {};
                        _this.calc();
                        _this.clear();
                        // this.removeAll();
                        // this.drowLines();
                        // this.clear();
                        // this.drow();
                    });
                });
            }
        }
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
            if (_this.startDrowLine) {
                _this.removeAll();
                _this.startDrowLine = null;
                _this.activeArrow = null;
                document.documentElement.style.cursor = "default";
                _this.drow();
            }
            if (!_this.clickArrow) {
                _this.unselectArrow();
            }
        });
        this.vis.call(this.zoom).on("dblclick.zoom", null);
        this.conteiner = this.vis.append("g").attr("id", "wrap");
        var g = d3
            .select("#graph")
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-d3-zoom-wrap");
        var g1 = g;
        var icon1 = g1
            .append("svg")
            .attr("width", "14")
            .attr("height", "14")
            .attr("viewBox", "0 0 14 14")
            .on("click", function () {
            _this.undo();
        })
            .append("g")
            .attr("fill", "#2196F3")
            .attr("transform", "translate(-384.000000, -144.000000)")
            .attr("fill-rule", "nonzero");
        icon1
            .append("path")
            .attr("d", "M391.5,157 C389.014719,157 387,154.985281 387,152.5 C387,152.331018 387.009314,152.164211 387.027464,152 L385.018945,152 C385.00639,152.165053 385,152.33178 385,152.5 C385,156.089851 387.910149,159 391.5,159 C395.089851,159 398,156.089851 398,152.5 C398,149.078368 395.356198,146.27423 392,146.018945 L392,148.027464 C394.249941,148.27615 396,150.183701 396,152.5 C396,154.985281 393.985281,157 391.5,157 L391.5,157 Z M388,147 L392,150 L392,144 L388,147 L388,147 Z M388,147");
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
                        x: _this.data[_this.startDrowLine].x + 20,
                        y: _this.data[_this.startDrowLine].y
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
                    ev.dataTransfer.setData('text', 'foo');
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
            model.modelIdName = _this.modelsKeys[_this.modelId];
            model.userId = _this.user._id;
            model.id = _this.dragType + (_this.data.filter(function (value) { return value.objectClass === _this.dragType; }).length + 1);
            var p1 = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("Cost", "Cost", "0", 1);
            var p2 = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("Rate", "Rate", "0", 1);
            var p3 = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("Price", "Price", "0", 1);
            model.parameters = [p1, p2, p3];
            _this.componentService.create(model).subscribe(function (data) {
                _this.saverComponent.push(JSON.parse(JSON.stringify(_this.data)));
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
                    var countS_1 = 0;
                    element.parameters.forEach(function (param, index) {
                        if (param.showOnDiagram) {
                            if (param.controlType === "Slider") {
                                countS_1++;
                            }
                            count_1++;
                        }
                    });
                    var h = (65 + (count_1 > 3 ? ((count_1 - 3) * 27 + (countS_1 * 5) + (count_1 * 5)) : 0 + (countS_1 * 5)));
                    var selected = (_this.selected !== null && (+_this.selected === +index)) ? "stroke-width:1;stroke:rgb(0,0,0)" : "";
                    var g_1 = _this.conteiner.append("g").attr("class", "g");
                    g_1.append("rect")
                        .attr("class", "nodes")
                        .attr("id", index)
                        .attr("style", selected)
                        .attr("fill", color)
                        .attr("x", element.x - 5)
                        .attr("y", element.y - 10)
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
                        _this.selectedModal = s[0].id;
                        _this.selected = s[0].id;
                        _this.removeAll();
                        _this.drow();
                        if (_this.activeArrow)
                            _this.shepClick(s[0].id);
                    })
                        .on("dblclick", function (d, i, s) {
                        _this.selectedModal = s[0].id;
                        var name = _this.data[_this.selectedModal].objectClass + (_this.data[_this.selectedModal].parameters.length + 1);
                        _this.newParametr = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["ParameterClass"]("Par" + (_this.data.filter(function (value) { return value.objectClass === _this.data[_this.selectedModal].objectClass; }).length + 1), "", "0");
                        _this.showSide = true;
                        _this.selected = s[0].id;
                        _this.removeAll();
                        _this.drow();
                        _this.activeArrow = null;
                        _this.startDrowLine = null;
                    });
                    g_1.append("text")
                        .attr("x", element.x - 5)
                        .attr("y", element.y - 13)
                        .text((element.name || element.id));
                    g_1.append("text")
                        .attr("id", index + "-remove")
                        .attr("x", element.x + 140)
                        .attr("y", element.y - 13)
                        .text("X")
                        .attr("cursor", "pointer")
                        .on("click", function (d, i, s) {
                        d3.event.stopPropagation();
                        var id = s[0].id.split("-")[0];
                        // this.componentService.delete(this.data[id]).subscribe((data) => {
                        //   this.data.splice(id, 1);
                        //   this.clear();
                        // });
                        var dialogRef = _this.dialog.open(_shared_components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_10__["DialogCreateModelComponent"], {
                            width: '450px',
                            data: {
                                label: 'You delete the object! Are you sure?',
                                deleteMode: true
                            }
                        });
                        dialogRef.afterClosed().subscribe(function (model) {
                            if (model) {
                                console.log(_this.saverComponent);
                                _this.saverComponent.push(JSON.parse(JSON.stringify(_this.data)));
                                console.log(_this.saverComponent);
                                var observableList_2 = [];
                                _this.componentService.getAllByUserId(_this.user._id).subscribe(function (data) {
                                    _this.formulaData = data;
                                    _this.formulaData.forEach(function (comp) {
                                        comp.parameters.forEach(function (param) {
                                            if (param.value && param.value.charAt(0) === "=") {
                                                _this.data[id].parameters.forEach(function (p) {
                                                    var element = _this.data[id].modelIdName + "." +
                                                        _this.data[id].id + "." + p.id;
                                                    var re = new RegExp(element, 'g');
                                                    param.value = param.value.replace(re, "0");
                                                });
                                            }
                                        });
                                        observableList_2.push(_this.componentService.update(comp));
                                    });
                                    var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(observableList_2);
                                    obs.subscribe(function (t) {
                                        _this.componentService.delete(_this.data[id]).subscribe(function (data) {
                                            _this.selectedModal = null;
                                            _this.selected = null;
                                            _this.getData();
                                        });
                                    });
                                });
                            }
                        });
                    });
                    g_1.append("text")
                        .attr("id", index + "-arrow")
                        .attr("x", element.x + 135)
                        .attr("y", element.y + 5)
                        .text("=>")
                        .attr("cursor", "pointer")
                        .on("click", function (d, i, s) {
                        d3.event.stopPropagation();
                        var id = s[0].id.split("-")[0];
                        _this.shepClick(id);
                    });
                    g_1.append("text")
                        .attr("id", index + "-drag")
                        .attr("x", element.x)
                        .attr("y", element.y + 5)
                        .text("|||")
                        .attr("cursor", "pointer")
                        .call(d3
                        .drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended));
                    var countIndex_1 = 0;
                    var parameters = element.parameters.slice();
                    parameters.forEach(function (param, paramIndex) {
                        if (param.showOnDiagram) {
                            var py = element.y + 79 - 50 - (countIndex_1 * 24) + (count_1 >= 3 ?
                                ((count_1 - 3) * 24 + (count_1 * 7)) :
                                (count_1 > 1) ? (count_1 * 4) : -9);
                            switch (param.controlType) {
                                case "Value":
                                case "":
                                    var v = param.value;
                                    if (v && v.charAt(0) === "=") {
                                        var spcaSpit_2 = v.split(" ");
                                        spcaSpit_2.forEach(function (element, index) {
                                            var earr = element.split(".");
                                            if (earr.length == 3) {
                                                spcaSpit_2[index] = _this.formulaSaver[element];
                                            }
                                        });
                                        spcaSpit_2.shift();
                                        try {
                                            _this.formulaSaver[_this.modelsKeys[element.modelId] + "." + element.id + "." + param.id] = _this.notEval(spcaSpit_2.join(''));
                                        }
                                        catch (_a) {
                                            _this.calc();
                                        }
                                        var res = _this.formulaSaver[_this.modelsKeys[element.modelId] + "." + element.id + "." + param.id] || 0;
                                        g_1.append("text")
                                            .attr("x", element.x + 20)
                                            .attr("y", py)
                                            .text((param.name || param.id) + ": " +
                                            ((parseFloat(res).toFixed(1))));
                                    }
                                    else {
                                        g_1.append("text")
                                            .attr("x", element.x + 20)
                                            .attr("y", py)
                                            .text((param.name || param.id) + ": " + parseFloat(v || "").toFixed(1));
                                    }
                                    break;
                                case "Input":
                                    var gI = g_1.append("g");
                                    gI.append("text")
                                        .attr("x", element.x + 15)
                                        .attr("y", py)
                                        .text((param.name || param.id) + " - ");
                                    var l = (param.name || param.id).length;
                                    gI.append("foreignObject")
                                        .attr("x", element.x + (l < 7 ? l * 9 : l * 7) + 15)
                                        .attr("y", py - 13)
                                        .attr("width", 50)
                                        .attr("height", 16)
                                        .attr("class", "foreignObject-input-bmp")
                                        .html(function (d) {
                                        return "<input id=\"" + index + "-" + paramIndex + "\" type=\"number\" value=\"" + param.value + "\" />";
                                    });
                                    var inputElement_1 = document.getElementById(index + "-" + paramIndex);
                                    var self_1 = _this;
                                    inputElement_1.onchange = function (e) {
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
                                    // gR.append("text")
                                    //   .attr("x", element.x)
                                    //   .attr("y", py)
                                    //   .text((param.name || param.id) + " - ");
                                    l = (param.name || param.id).length;
                                    gR.append("foreignObject")
                                        .attr("x", element.x + ((param.name || param.id).length) + 5)
                                        .attr("y", py - 5)
                                        .attr("width", 120)
                                        .attr("height", 30)
                                        .attr("class", "foreignObject-input-bmp")
                                        .html(function (d) {
                                        return "\n                      <div id=\"" + index + "-" + paramIndex + "-slider\" class=\"cust-slider\">\n                      <div id=\"" + index + "-" + paramIndex + "-slider-value\" class=\"slider-value\">\n                      " + (param.name || param.id) + ": " + parseFloat(param.value || "").toFixed(1) + "\n                      </div>\n                      <div class=\"slider-wrap-outer\">\n                        <button id=\"" + index + "-" + paramIndex + "-left\" class=\"left\">\n                          <i class=\"material-icons\">\n                            keyboard_arrow_left\n                          </i>\n                        </button>\n                        <div id=\"" + index + "-" + paramIndex + "-slider-wrap\" class=\"slider-wrap\">\n                          <div id=\"" + index + "-" + paramIndex + "-sliderFillBg\" class=\"fill-bg\"></div>\n                          <div id=\"" + index + "-" + paramIndex + "-sliderIndecator\" class=\"indecator\" draggable=\"true\">\n                            <div class=\"bg-inside\"></div>\n                          </div>\n                        </div>\n                        <button id=\"" + index + "-" + paramIndex + "-right\" class=\"right\">\n                          <i class=\"material-icons\">\n                            keyboard_arrow_right\n                          </i>\n                        </button>\n                      </div>\n                    </div>\n                      ";
                                    });
                                    document.getElementById(index + "-" + paramIndex + "-sliderIndecator").addEventListener("dragstart", function (ev) {
                                        console.log("sliderIndecator");
                                    }, false);
                                    self_1 = _this;
                                    var rangeElement = document.getElementById(index + "-" + paramIndex);
                                    self_1.sladerChange(param, paramIndex, index);
                                    var rangeElementleft = document.getElementById(index + "-" + paramIndex + "-left");
                                    rangeElementleft.onclick = function (e) {
                                        var value = +param.value - +param.sliderStep;
                                        if (value >= param.sliderMin) {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = value.toString();
                                            document.getElementById(index + "-" + paramIndex + "-slider-value").textContent
                                                = (param.name || param.id) + ": " + parseFloat(value.toString() || "").toFixed(1);
                                            self_1.txtQueryChangedDebounce.next({
                                                value: value,
                                                selected: self_1.dragSelected
                                            });
                                            self_1.sladerChange(param, paramIndex, index);
                                        }
                                    };
                                    var rangeElementright = document.getElementById(index + "-" + paramIndex + "-right");
                                    rangeElementright.onclick = function (e) {
                                        var value = +param.value + +param.sliderStep;
                                        if (value <= (param.sliderMax + 1)) {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = value.toString();
                                            document.getElementById(index + "-" + paramIndex + "-slider-value").textContent
                                                = (param.name || param.id) + ": " + parseFloat(value.toString() || "").toFixed(1);
                                            self_1.txtQueryChangedDebounce.next({
                                                value: value,
                                                selected: self_1.dragSelected
                                            });
                                            self_1.sladerChange(param, paramIndex, index);
                                        }
                                    };
                                    var sliderwrapElementright = document.getElementById(index + "-" + paramIndex + "-slider-wrap");
                                    sliderwrapElementright.onclick = function (e) {
                                        var value = ((e.offsetX / 90 * 100) * ((param.sliderMax - param.sliderMin) / 100)) + param.sliderMin;
                                        value = Math.round(value / param.sliderStep) * param.sliderStep;
                                        if (value <= (param.sliderMax + 1)) {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = value.toString();
                                            document.getElementById(index + "-" + paramIndex + "-slider-value").textContent
                                                = (param.name || param.id) + ": " + parseFloat(value.toString() || "").toFixed(1);
                                            self_1.txtQueryChangedDebounce.next({
                                                value: value,
                                                selected: self_1.dragSelected
                                            });
                                            self_1.sladerChange(param, paramIndex, index);
                                        }
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
                self.dragSelected = this.getAttribute("id").split("-")[0];
                self.data[self.dragSelected].x =
                    (d3.event.x - self.zoomTrans.x) / self.zoomTrans.k;
                // self.start_x + (d3.event.x - self.start_x) / current_scale;
                // (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
                var scale = 30;
                if (self.zoomTrans.k < 0.33) {
                    scale = 50;
                }
                self.data[self.dragSelected].y = ((d3.event.y - self.zoomTrans.y) / self.zoomTrans.k - (scale / self.zoomTrans.k)) - 25;
                // self.start_y + (d3.event.y - self.start_y) / current_scale;
                self.removeAll();
                self.drow();
            }
            function dragended(d) {
                d3.select(this).classed("active", false);
                self.txtQueryChanged.next({
                    value: self.zoomTrans,
                    selected: self.dragSelected,
                    drag: 1
                });
            }
        });
    };
    ModelMainComponent.prototype.sladerChange = function (param, paramIndex, index) {
        var otions = {
            min: param.sliderMin,
            max: param.sliderMax,
            value: param.value
        };
        document.getElementById(index + "-" + paramIndex + "-sliderIndecator").style.left = "calc(" + ((otions.value - otions.min) / (otions.max - otions.min)) * 100 + "% - " + 15 * ((otions.value - otions.min) / (otions.max - otions.min)) + "px)";
        document.getElementById(index + "-" + paramIndex + "-sliderFillBg").style.width = "calc(" + ((otions.value - otions.min) / (otions.max - otions.min)) * 100 + "% - " + 15 * ((otions.value - otions.min) / (otions.max - otions.min)) + "px)";
    };
    ModelMainComponent.prototype.formulaSearch = function (element) {
        var _this = this;
        var arr = element.split(".");
        if (!this.formulaSearchRun) {
            this.formulaSearchRun = true;
            this.componentService.getAllByUserId(this.user._id).subscribe(function (data) {
                _this.formulaData = data;
                _this.formulaDataSearch(data, arr, element);
            });
        }
        else if (this.formulaData) {
            this.formulaDataSearch(this.formulaData, arr, element);
        }
    };
    ModelMainComponent.prototype.formulaDataSearch = function (data, arr, element) {
        var _this = this;
        new Promise(function (resolve, reject) {
            data.forEach(function (comp) {
                comp.parameters.forEach(function (param, i) {
                    if (_this.modelsKeys[comp.modelId] === arr[0] && comp.id === arr[1] && param.id === arr[2]) {
                        _this.formulaSaver[element] = +param.value;
                    }
                    if ((comp.parameters.length - 1) === i) {
                        resolve();
                    }
                });
            });
        }).then(function () {
            _this.clear();
        });
    };
    ModelMainComponent.prototype.drowLines = function () {
        var _this = this;
        this.data.forEach(function (value, index, arr) {
            value.selected.forEach(function (item) {
                var to = _this.searchById(item, _this.data, 'id');
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
                            x: x + 30,
                            y: y + 15
                        },
                        target: {
                            x: x2 + 30,
                            y: y2 + 15
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
                        _this.selected = undefined;
                        _this.removeAll();
                        _this.drow();
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
        this.selected = s;
        var id = this.selected;
        if (!this.activeArrow) {
            this.activeArrow = id;
            this.startDrowLine = id;
        }
        else {
            var count_2 = 0;
            this.data[id].selected.forEach(function (element, index) {
                if (_this.data[_this.activeArrow].id === element) {
                    count_2++;
                }
            });
            this.data[this.activeArrow].selected.forEach(function (element, index) {
                if (_this.data[id].id === element) {
                    count_2++;
                }
            });
            if (count_2) {
                this.activeArrow = null;
                this.startDrowLine = null;
                this.removeAll();
                this.drowLines();
                this.drow();
                return;
            }
            if (id !== this.activeArrow) {
                this.data[this.activeArrow].selected.push(this.data[id].id);
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
    ModelMainComponent.prototype.searchById = function (id, arr, idField) {
        if (arr) {
            var f_1 = idField || "_id";
            var result = arr.find(function (element) { return element[f_1] === id; });
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
        this.saverComponent.push(JSON.parse(JSON.stringify(this.data)));
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
    ModelMainComponent.prototype.unselectArrow = function () {
        var _this = this;
        if (this.selectedLine) {
            this.data.forEach(function (element, index) {
                d3.select(document.getElementById(_this.selectedLine)).style("stroke-width", 1.5);
                d3.select(document.getElementById(_this.selectedLine)).style("stroke", "#555");
            });
            this.selectedLine = null;
            this.clickArrow = false;
        }
    };
    ModelMainComponent.prototype.sliderChange = function (e, item, i) {
        if (item.controlType === "Slider") {
            if (+item.value < item.sliderMin) {
                item.value = item.sliderMin.toString();
                this.txtQueryChanged.next({
                    value: item.value,
                    selected: i
                });
            }
            else if (+item.value > item.sliderMax) {
                item.value = item.sliderMax.toString();
                this.txtQueryChanged.next({
                    value: item.value,
                    selected: i
                });
            }
        }
    };
    ModelMainComponent.prototype.idModelChange = function (e) {
        var _this = this;
        var data = this.returnCopyData();
        var res = data.find(function (el) {
            return el.id === _this.data[_this.selectedModal].id;
        });
        if (!res) {
            this.canChangeId = true;
        }
        console.log(data, this.data[this.selectedModal].id, this.canChangeId, res);
    };
    ModelMainComponent.prototype.returnCopyData = function () {
        var data;
        if (this.saverComponent) {
            var arr = this.saverComponent[this.saverComponent.length - 2];
            if (arr && this.saverComponent.length > 1) {
                data = JSON.parse(JSON.stringify(arr));
            }
            else {
                data = this.dataCopy;
            }
        }
        else {
            data = this.dataCopy;
        }
        return data;
    };
    ModelMainComponent.prototype.onFieldChangeId = function (query) {
        var _this = this;
        var data = this.returnCopyData();
        var id = document.getElementById("dataId").value;
        if (this.canChangeId) {
            this.data.forEach(function (d) {
                d.parameters.forEach(function (p) {
                    console.log(p.value, data[_this.selectedModal].id, id);
                    var re = new RegExp(data[_this.selectedModal].id, 'g');
                    p.value = p.value.replace(re, id);
                    console.log(p.value, data[_this.selectedModal].id, id);
                });
                console.log(d);
                _this.componentService.update(d).subscribe(function (r) {
                });
            });
            this.saverComponent.push(JSON.parse(JSON.stringify(this.data)));
        }
        else {
            this.data[this.selectedModal].id = data[this.selectedModal].id;
        }
        this.txtQueryChanged.next({
            value: id,
            selected: this.selectedModal
        });
    };
    ModelMainComponent.prototype.validValue = function (item, i) {
        if (item.controlType === "Slider") {
            if (+item.value < item.sliderMin) {
                item.value = item.sliderMin.toString();
                this.txtQueryChanged.next({
                    value: item.value,
                    selected: i
                });
            }
            else if (+item.value > item.sliderMax) {
                item.value = item.sliderMax.toString();
                this.txtQueryChanged.next({
                    value: item.value,
                    selected: i
                });
            }
        }
    };
    ModelMainComponent.prototype.generateCSVPatern = function () {
        var _this = this;
        var items = [
            ['Obgect ID'],
            ['Obgect name'],
            ['Parameter ID'],
            ['Parameter name'],
            ["Timestamp\\Mesured"]
        ];
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var item = _a[_i];
            var _loop_1 = function (param) {
                if (param.measurable) {
                    console.log(param);
                    items[0].push(item.id);
                    items[1].push(item.name);
                    items[2].push(param.id);
                    items[3].push(param.name);
                    var v = param.value;
                    if (v && v.charAt(0) === "=") {
                        var spcaSpit_3 = v.split(" ");
                        spcaSpit_3.forEach(function (element, index) {
                            var earr = element.split(".");
                            if (earr.length == 3) {
                                spcaSpit_3[index] = _this.formulaSaver[element];
                            }
                        });
                        spcaSpit_3.shift();
                        try {
                            items[4].push(parseFloat(this_1.notEval(spcaSpit_3.join('')).toFixed(1)).toString());
                        }
                        catch (_a) {
                            items[4].push("0");
                        }
                    }
                    else {
                        items[4].push(param.value);
                    }
                }
            };
            var this_1 = this;
            for (var _b = 0, _c = item.parameters; _b < _c.length; _b++) {
                var param = _c[_b];
                _loop_1(param);
            }
        }
        console.log(items);
        var csvContent = "data:text/csv;charset=utf-8,"
            // + windows1251.decode(items.map(e => e.join(";")).join("\n"));
            + (items.map(function (e) { return e.join(";"); }).join("\n"));
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
        console.log(this.ConvertToCSV(items));
    };
    ModelMainComponent.prototype.generateCSVFull = function () {
        console.log(this.data, this.dataPlayer);
        var items = [];
        for (var i = 0; i < this.dataPlayer.length; i++) {
            for (var j = 0; j < this.dataPlayer[i].length; j++) {
                if (this.dataPlayer[i][j])
                    if (!items[j]) {
                        items[j] = [];
                    }
                if (this.dataPlayer[i][j])
                    items[j].push(this.dataPlayer[i][j]);
            }
        }
        console.log(this.data, this.dataPlayer, items);
        var csvContent = "data:text/csv;charset=utf-8,"
            + (items.map(function (e) { return e.join(";"); }).join("\n"));
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "my_data.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    };
    ModelMainComponent.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ';';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    ModelMainComponent.prototype.onChange = function (event) {
        var file = event.srcElement.files[0];
        if (file) {
            var reader = new FileReader();
            var self_2 = this;
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log(evt.target.result);
                self_2.setDataPlayer(self_2.csvJSON(evt.target.result));
                self_2.playerService.dataEmitter.emit(self_2.dataPlayer);
            };
            reader.onerror = function (evt) {
                console.log('error reading file');
            };
        }
    };
    ModelMainComponent.prototype.setDataPlayer = function (data) {
        var _this = this;
        console.log(data);
        var newArr = [];
        // this.dataPlayer = data;
        for (var j = 4; j < data[1].length; j++) {
            for (var i = 1; i < data.length; i++) {
                for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.id === data[i][0]) {
                        for (var _b = 0, _c = item.parameters; _b < _c.length; _b++) {
                            var param = _c[_b];
                            if (param.id === data[i][2]) {
                                param.value = data[i][j];
                                this.formulaSaver[this.modelID + "." + item.id + "." + param.id] = data[i][j];
                            }
                        }
                    }
                }
            }
            for (var _d = 0, _e = this.data; _d < _e.length; _d++) {
                var item = _e[_d];
                var _loop_2 = function (param) {
                    var v = param.value;
                    if (v && v.charAt(0) === "=") {
                        var spcaSpit_4 = v.split(" ");
                        console.log(v);
                        spcaSpit_4.forEach(function (element, index) {
                            var earr = element.split(".");
                            if (earr.length == 3) {
                                spcaSpit_4[index] = _this.formulaSaver[element];
                            }
                        });
                        spcaSpit_4.shift();
                        try {
                            var flag = void 0;
                            var res = this_2.notEval(spcaSpit_4.join(''));
                            for (var i = 0; i < newArr.length; i++) {
                                if (item.id === newArr[i][0] && param.id === newArr[i][2]) {
                                    flag = true;
                                    newArr[i][j] = res.toString();
                                }
                            }
                            console.log(spcaSpit_4, res);
                            if (!flag) {
                                newArr.push([]);
                                newArr[newArr.length - 1].push(item.id);
                                newArr[newArr.length - 1].push(item.name);
                                newArr[newArr.length - 1].push(param.id);
                                newArr[newArr.length - 1].push(param.name);
                                newArr[newArr.length - 1].push(res.toString());
                            }
                        }
                        catch (_a) {
                        }
                    }
                };
                var this_2 = this;
                for (var _f = 0, _g = item.parameters; _f < _g.length; _f++) {
                    var param = _g[_f];
                    _loop_2(param);
                }
            }
        }
        this.dataPlayer = data.concat(newArr);
        console.log(this.dataPlayer);
    };
    ModelMainComponent.prototype.csvJSON = function (csv) {
        var lines = csv.split("\n");
        var result = [];
        // NOTE: If your columns contain commas in their values, you'll need
        // to deal with those before doing the next step 
        // (you might convert them to &&& or something, then covert them back later)
        // jsfiddle showing the issue https://jsfiddle.net/
        var headers = lines[0].split(",");
        for (var i = 0; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(";");
            for (var j = 0; j < currentline.length; j++) {
                if (!result[j]) {
                    result[j] = [];
                }
                result[j].push(currentline[j]);
            }
            // for(var j=0;j<headers.length;j++){
            //     obj[headers[j]] = currentline[j];
            // }
            // result.push(obj);
        }
        return result; //JavaScript object
        // return JSON.stringify(result); //JSON
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModelMainComponent.prototype, "onKeyPress", null);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
            _shared_components_player_player_service__WEBPACK_IMPORTED_MODULE_12__["PlayerService"]])
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
    ComponentService.prototype.deleteAll = function (component) {
        return this.http.delete('/api/component/list/' + component._id);
    };
    ComponentService.prototype.getAllById = function (id) {
        return this.http.get('/api/component/list/' + id);
    };
    ComponentService.prototype.getAllByUserId = function (id) {
        return this.http.get('/api/component/list/user/' + id);
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

module.exports = "<h1 mat-dialog-title>{{label}}</h1>\r\n<div *ngIf=\"!deleteMode\" mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-label>ID</mat-label>\r\n    <input matInput (keydown)=\"onKeyDown($event)\" (ngModelChange)=\"validChange($event)\" [(ngModel)]=\"model.id\" />\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Name</mat-label>\r\n    <input matInput [(ngModel)]=\"model.name\" />\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Description</mat-label>\r\n    <input matInput [(ngModel)]=\"model.description\" />\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions class=\"jc-c df\">\r\n  <button\r\n    mat-button\r\n    [disabled]=\"!valid && !deleteMode\"\r\n    [mat-dialog-close]=\"model\"\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    cdkFocusInitial\r\n  >\r\n    Ok\r\n  </button>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n</div>\r\n"

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
        this.label = "";
    }
    DialogCreateModelComponent.prototype.ngOnInit = function () {
        this.model.id = this.data.id;
        this.saveId = this.data.id;
        this.model.name = this.data.name || "";
        this.model.description = this.data.description || "";
        this.label = this.data.label;
        this.deleteMode = this.data.deleteMode;
        this.dataArr = this.data.dataArr;
        console.log(this.dataArr);
        this.validChange(this.model.id);
    };
    DialogCreateModelComponent.prototype.validChange = function (e) {
        if (!e) {
            this.valid = false;
            return;
        }
        var res = this.dataArr.find(function (element) {
            return e === element.id;
        });
        if (!res) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
        if (this.label === 'Edit Model' && this.saveId === e) {
            this.valid = true;
        }
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

module.exports = "<h1 mat-dialog-title>Formula dialog</h1>\r\n<div id=\"wrap-dialog-scroll\" mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-label>Model</mat-label>\r\n    <mat-select [(ngModel)]=\"sleectedModel\" (ngModelChange)=\"modelChange($event)\">\r\n      <mat-option *ngFor=\"let item of listModel\" [value]=\"item._id\">\r\n        {{item.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Class</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedClass\" (ngModelChange)=\"paramsFilter($event)\">\r\n      <mat-option *ngFor=\"let item of listClass\" [value]=\"item\">\r\n        {{item}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Object</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedObject\" (ngModelChange)=\"selectedObjectChange($event)\">\r\n      <mat-option *ngFor=\"let item of listObjects | filtrListParam: selectedClass\" [value]=\"item.id\">\r\n        {{item.name || item.id}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <mat-label>Parameter</mat-label>\r\n    <mat-select [(ngModel)]=\"selectedParam\" (ngModelChange)=\"paramsChange($event)\">\r\n      <mat-option *ngFor=\"let item of listParams | filtrListParam: selectedClass: selectedObject\" [value]=\"item._id\">\r\n        {{item.name || item.id}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <div style=\"width: 40%; padding: 20px 0 0 20px;\">\r\n    <div class=\"full-width\">\r\n      <!-- [disabled]=\"!boolLastOperator\" -->\r\n      <!-- [matTooltip]=\"!boolLastOperator ? 'Before add math operator: +, -, *, /' : null\"? -->\r\n      <button\r\n       (click)=\"add()\" class=\"full-width\" mat-raised-button color=\"primary\" mat-button>\r\n        <= ADD</button> </div>\r\n          <!-- <button (click)=\"test()\" class=\"func\" mat-raised-button color=\"primary\" mat-button>\r\n            <i>\r\n              f(x)\r\n            </i>\r\n          </button> -->\r\n  </div>\r\n  <div class=\"textarea-wrap\">\r\n    <div class=\"formula-wrap-outer\">\r\n      <div (click)=\"formulaWrapClick();textArea.focus()\" class=\"formula-wrap\">\r\n        <div class=\"formula-item-wrap\" *ngFor=\"let item of formulaArr;let i = index\">\r\n            <div *ngIf=\"(item !== '|') && (i === 0 || (formulaArr[i - 1] && formulaArr[i - 1] !== '|'))\" \r\n            (click)=\"formulaItemClick(item, i)\" class=\"formula-item-space\"\r\n             ></div>\r\n            <div (click)=\"formulaItemClick(item, i + 1)\" class=\"formula-item\" [ngClass]=\"{'blink blink-item': item === '|'}\">\r\n              {{item}}\r\n            </div>\r\n            <div *ngIf=\"(i === (formulaArr.length - 1)) && item !== '|'\" (click)=\"formulaItemClick(item, i+1)\" class=\"formula-item-space\"></div>\r\n        </div>\r\n      </div>\r\n      <!-- formula-text -->\r\n      <mat-form-field style=\"width: 100%;position: absolute;top: 0; z-index: -1;\" class=\" example-full-width\">\r\n        <!-- (ngModelChange)=\"change($event)\" -->\r\n        <!-- [(ngModel)]=\"formula\" (ngModelChange)=\"change($event)\" (keydown)=\"checkPattern($event)\" -->\r\n        <textarea #textArea matInput [(ngModel)]=\"formulaData\" \r\n        (ngModelChange)=\"changeForumula($event)\" (keydown)=\"keyFormula($event)\"></textarea>\r\n          \r\n      </mat-form-field>\r\n      <!-- <div (click)=\"textArea.focus()\" class=\"text-area-shield\"></div> -->\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions class=\"jc-c df\">\r\n  <button mat-button (click)=\"ok()\" mat-raised-button color=\"primary\" cdkFocusInitial>\r\n    Ok\r\n  </button>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-parameters/dialog-parameters.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes blinker {\n  from {\n    opacity: 1.0; }\n  to {\n    opacity: 0.0; } }\n\n.blink {\n  text-decoration: blink;\n  -webkit-animation-name: blinker;\n  -webkit-animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-direction: alternate; }\n\n.textarea-wrap {\n  display: flex; }\n\n.textarea-wrap textarea {\n    height: 170px;\n    border: 1px solid #949494;\n    margin-bottom: -8px;\n    resize: none;\n    background: white;\n    position: relative;\n    z-index: 1;\n    padding: 5px;\n    box-sizing: border-box; }\n\n.mat-form-field {\n  display: block; }\n\nbutton.func {\n  min-width: 0;\n  padding: 0 7px;\n  margin-top: 35px; }\n\n.text-area-shield {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1; }\n\n.formula-wrap-outer {\n  width: 100%;\n  position: relative;\n  background-color: #f2f2f2;\n  padding: 10px; }\n\n.formula-wrap {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  height: unset; }\n\n.formula-text {\n  opacity: 0;\n  color: transparent;\n  position: absolute;\n  font-size: 0;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-indent: -10000px;\n  z-index: 20; }\n\n.formula-item-wrap {\n  display: inline-flex;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10px; }\n\n.formula-item {\n  display: inline;\n  vertical-align: middle;\n  padding: 4px 10px;\n  word-break: break-all;\n  background-color: #ffffff;\n  border-radius: 999px;\n  color: #333333;\n  position: relative;\n  overflow: hidden; }\n\n.formula-item-space {\n  width: 10px;\n  height: 25px; }\n\n.blink-item {\n  padding: 0px 0px;\n  margin: 0px;\n  width: 11px;\n  text-align: center;\n  background: none;\n  font-size: 40px;\n  height: 26px; }\n"

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
    function DialogParametersComponent(dialogRef, componentService, chRef, data) {
        this.dialogRef = dialogRef;
        this.componentService = componentService;
        this.chRef = chRef;
        this.data = data;
        this.listModel = [];
        this.listComponents = [];
        this.listClass = [];
        this.listObjects = [];
        this.listParams = [];
        this.formulaData = "";
        this.selectedFormulaVar = "";
        this.formula = "= ";
        this.re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|(\-)|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
        this.reOperator = /^[+\-*()/]/;
        this.reNumber = /^\d/;
        // reNumber = /(?<=^| )\d+(\.\d+)?(?=$| )/;
        this.reDigit = /^[0-9]*.([0-9]+)?$/mg;
        this.keyPeriod = true;
    }
    DialogParametersComponent.prototype.ngOnInit = function () {
        this.listModel = this.data.list;
        // this.formula = this.data.formula;
        this.formula = this.data.formula.charAt(0) !== '=' ? this.data.formula : this.data.formula.slice(2);
        this.formulaArr = this.formula.split(' ');
        if (this.formulaArr.length === 1 && this.formulaArr[0] === "0") {
            this.formulaArr = [];
        }
        this.sleectedModel = this.data.modelId;
        this.modelChange(this.sleectedModel);
    };
    DialogParametersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.formulaArr.length) {
                _this.formulaArr = ["|"];
                _this.formulaIndex = _this.formulaArr.length - 1;
            }
            else {
                _this.formulaIndex = _this.formulaArr.length;
                _this.formulaArr.splice(_this.formulaIndex, 0, "|");
            }
            _this.textArea.nativeElement.focus();
            document.getElementById("wrap-dialog-scroll").scrollTo(0, 0);
            _this.chRef.detectChanges();
        }, 500);
    };
    DialogParametersComponent.prototype.formulaItemClick = function (item, i) {
        var fiend = this.formulaArr.indexOf("|");
        if (fiend > -1 && fiend < i) {
            i--;
        }
        this.removeSpace();
        this.formulaIndex = i;
        this.formulaArr.splice(i, 0, "|");
    };
    DialogParametersComponent.prototype.removeSpace = function () {
        var _this = this;
        this.formulaArr.forEach(function (e, i) {
            if (e === "|") {
                _this.formulaArr.splice(i, 1);
            }
        });
    };
    DialogParametersComponent.prototype.keyFormula = function (e) {
        // backspace
        if ((e.keyCode === 8 || e.keyCode === 46)) {
            this.formulaArr.splice(this.formulaIndex - 1, 1);
            this.formulaIndex--;
        }
    };
    DialogParametersComponent.prototype.changeForumula = function (e) {
        var char = e.substr(e.length - 1);
        console.log(e);
        if (this.reOperator.test(char)) {
            this.formulaArr.splice(this.formulaIndex, 0, char);
            this.formulaIndex++;
        }
        if (this.reNumber.test(char) || char === '.') {
            console.log(e);
            if (this.reNumber.test(this.formulaArr[this.formulaIndex - 1]) || char === '.') {
                this.formulaArr[this.formulaIndex - 1] += char;
            }
            else {
                this.formulaArr.splice(this.formulaIndex, 0, char);
                this.formulaIndex++;
            }
        }
        this.textArea.nativeElement.value = "";
        this.chRef.detectChanges();
    };
    DialogParametersComponent.prototype.formulaWrapClick = function () {
        console.log(23);
    };
    DialogParametersComponent.prototype.modelChange = function (id) {
        var _this = this;
        this.selectedClass = null;
        this.selectedObject = null;
        this.selectedParam = null;
        this.componentService.getAllById(id).subscribe(function (data) {
            _this.listComponents = data;
            _this.listClass = [];
            _this.listObjects = [];
            _this.listComponents.forEach(function (item) {
                _this.listClass.push(item.objectClass);
                _this.listObjects.push(item);
                item.parameters.forEach(function (element) {
                    element.objectClass = item.objectClass;
                    element.objectType = item.id;
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
        this.selectedObject = null;
        this.selectedParam = null;
    };
    DialogParametersComponent.prototype.selectedObjectChange = function () {
        this.selectedParam = null;
    };
    DialogParametersComponent.prototype.ok = function () {
        this.removeSpace();
        this.formulaArr.unshift("=");
        console.log(this.formulaArr, this.formulaArr.join(" "));
        this.formula = this.formulaArr.join(" ");
        this.dialogRef.close({ formula: this.formula });
        // let spcaSpit = this.formula.split(" ");
        // let valid = true;
        // spcaSpit.forEach((item) => {
        //   let arr = item.split(".");
        //   if (arr.length == 2) {
        //     this.listModel.forEach((model, modelIndex) => {
        //       let validModel;
        //       if (model.id === arr[0]) {
        //         validModel = true;
        //         let validParam = false;
        //         this.listParams.forEach((comp, index) => {
        //           if (comp.id === arr[1]) {
        //             validParam = true
        //           }
        //           if (this.listParams.length === (index + 1) && !validParam) {
        //             valid = false;
        //           }
        //         })
        //       }
        //       if (this.listModel.length === (modelIndex + 1) && !validModel) {
        //         valid = false;
        //       }
        //     })
        //   }
        // })
        // if (valid) {
        //   this.dialogRef.close({ formula: this.formula });
        // }
    };
    DialogParametersComponent.prototype.paramsChange = function (e) {
        var item = this.searchById(e, this.listParams);
        var model = this.searchById(this.sleectedModel, this.listModel);
        var object = this.searchById(this.selectedObject, this.listObjects);
        // if(this.sleectedModel === model.id) {
        //   this.selectedFormulaVar = item.id;
        // } else {
        this.selectedFormulaVar = model.id + "." + this.selectedObject + "." + item.id;
        // }
    };
    DialogParametersComponent.prototype.add = function () {
        // if (this.reOperator.test(this.formula[this.formula.length - 1])) {
        //   this.formula = this.formula + ' ' + this.selectedFormulaVar;
        // } else {
        //   this.formula += this.selectedFormulaVar;
        // }
        this.formulaArr.splice(this.formulaIndex, 0, this.selectedFormulaVar);
        this.formulaIndex += 1;
        this.formulaItemClick({}, this.formulaIndex);
        this.textArea.nativeElement.focus();
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("textArea"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DialogParametersComponent.prototype, "textArea", void 0);
    DialogParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dialog-parameters",
            template: __webpack_require__(/*! ./dialog-parameters.component.html */ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.html"),
            styles: [__webpack_require__(/*! ./dialog-parameters.component.scss */ "./src/app/shared/components/dialog-parameters/dialog-parameters.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _component_service__WEBPACK_IMPORTED_MODULE_3__["ComponentService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], Object])
    ], DialogParametersComponent);
    return DialogParametersComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/player/player.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/player/player.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data && data[0] && data[0][cursor]\" class=\"player-wrap\">\r\n  <div class=\"actions-buttons\">\r\n    <button \r\n      mat-icon-button \r\n      matTooltip=\"Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action Info about the action \" \r\n      matTooltipPosition=\"below\"\r\n      (click)=\"cursor = 4\"\r\n    >\r\n      <i class=\"material-icons\">\r\n        skip_previous\r\n      </i>\r\n    </button>\r\n    <button (click)=\"pause()\" mat-icon-button>\r\n      <i class=\"material-icons\">\r\n        pause\r\n      </i>\r\n    </button>\r\n    <button (click)=\"play()\" mat-icon-button>\r\n      <i class=\"material-icons\">\r\n        play_arrow\r\n      </i>\r\n    </button>\r\n    <button (click)=\"cursor = data[0].length - 2\" mat-icon-button>\r\n      <i class=\"material-icons\">\r\n        skip_next\r\n      </i>\r\n    </button>\r\n  </div>\r\n  <div>\r\n    <div class=\"labeles\">\r\n      <div class=\"box time\">\r\n        Time Stamp\r\n      </div>\r\n      <div class=\"box date\">\r\n        {{data[0][cursor]}}\r\n      </div>\r\n      <button mat-icon-button>\r\n        <img width=\"30px\" src=\"assets/icons/png/chart-down.png\" alt=\"\">\r\n      </button>\r\n      <button mat-icon-button>\r\n        <img width=\"30px\" src=\"assets/icons/png/chart-up.png\" alt=\"\">\r\n      </button>\r\n    </div>\r\n    <div class=\"field\">\r\n      <button (click)=\"skipPrevious()\" mat-icon-button style=\"margin-right: -18px;\">\r\n        <i class=\"material-icons\" style=\"font-size: 38px;\">\r\n          arrow_left\r\n        </i>\r\n      </button>\r\n      <div class=\"slider-wrap\">\r\n        <input [(ngModel)]=\"cursor\" type=\"range\" min=\"4\" [max]=\"data[0].length - 2\" (ngModelChange)=\"cursorChange($event)\">\r\n      </div>\r\n      <button (click)=\"skipNext()\" mat-icon-button style=\"margin-left: -18px;\">\r\n        <i class=\"material-icons\" style=\"font-size: 38px;\">\r\n          arrow_right\r\n        </i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/player/player.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/player/player.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".player-wrap {\n  color: black;\n  display: flex;\n  align-items: flex-end; }\n  .player-wrap .actions-buttons {\n    display: flex;\n    align-items: center; }\n  .player-wrap .actions-buttons .material-icons {\n      font-size: 32px; }\n  .player-wrap .field {\n    display: flex;\n    align-items: center; }\n  .player-wrap .labeles {\n    display: flex;\n    align-items: center; }\n  .player-wrap .labeles .box {\n      font-size: 12px;\n      padding: 4px;\n      border: 1px solid #673ab7;\n      border-radius: 6px;\n      margin-right: 10px;\n      height: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .player-wrap .labeles .box.time {\n        width: 30%;\n        margin-left: 13px; }\n  .player-wrap .labeles .box.date {\n        width: calc(70% - 125px); }\n  .slider-wrap {\n  width: 400px;\n  position: relative;\n  display: flex; }\n  input {\n  -webkit-appearance: none;\n  border-radius: 21px;\n  background-color: #000000;\n  outline: none;\n  width: calc(100% + 4px);\n  border: none;\n  height: 4px;\n  margin: 0; }\n  input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 6px;\n  height: 20px;\n  border-right: 2px solid black;\n  border-left: 2px solid black;\n  z-index: 11;\n  position: relative;\n  cursor: pointer; }\n  input::-moz-range-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 12px;\n  height: 12px;\n  border-right: 2px solid black;\n  border-left: 2px solid black;\n  z-index: 11;\n  position: relative;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/shared/components/player/player.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/player/player.component.ts ***!
  \**************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.service */ "./src/app/shared/components/player/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        this.data = [];
        this.cursor = 4;
        playerService.dataEmitter.subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.pause = function () {
        clearInterval(this.interval);
    };
    PlayerComponent.prototype.play = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.cursor < _this.data[0].length - 2)
                _this.cursor++;
            else {
                _this.cursor = 4;
                _this.pause();
            }
            _this.playerService.cursorEmitter.emit(_this.cursor);
        }, 1000);
    };
    PlayerComponent.prototype.skipPrevious = function () {
        if (this.cursor > 4) {
            this.cursor--;
            this.playerService.cursorEmitter.emit(this.cursor);
        }
    };
    PlayerComponent.prototype.skipNext = function () {
        if (this.cursor < this.data[0].length - 2) {
            this.cursor++;
            this.playerService.cursorEmitter.emit(this.cursor);
        }
    };
    PlayerComponent.prototype.cursorChange = function (e) {
        this.playerService.cursorEmitter.emit(e);
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/shared/components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/shared/components/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/player/player.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/player/player.service.ts ***!
  \************************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
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


var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cursorEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
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
        this.selectedModelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    ModelService.prototype.remove = function (id) {
        return this.http.delete('/api/model/' + id);
    };
    ModelService.prototype.updateById = function (model) {
        return this.http.put('/api/model', model);
    };
    ModelService.prototype.updateUserById = function (user) {
        return this.http.put('/api/user', user);
    };
    ModelService.prototype.getAllUsers = function () {
        return this.http.get('/api/user/getallusers');
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
        this.userId = "";
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
        this.modelIdName = "";
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
        this.sliderStep = 1;
        this.sliderMax = 100;
        this.sliderMin = 0;
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
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/shared/components/player/player.component.ts");
/* harmony import */ var _components_player_player_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/player/player.service */ "./src/app/shared/components/player/player.service.ts");
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
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_10__["PlayerComponent"]
            ],
            providers: [_components_player_player_service__WEBPACK_IMPORTED_MODULE_11__["PlayerService"]],
            entryComponents: [_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_6__["DialogParametersComponent"], _components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateModelComponent"]],
            declarations: [_components_dialog_parameters_dialog_parameters_component__WEBPACK_IMPORTED_MODULE_6__["DialogParametersComponent"], _components_dialog_create_model_dialog_create_model_component__WEBPACK_IMPORTED_MODULE_7__["DialogCreateModelComponent"], _pipes_filtr_list_param_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltrListParamPipe"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"], _components_player_player_component__WEBPACK_IMPORTED_MODULE_10__["PlayerComponent"]],
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

module.exports = __webpack_require__(/*! C:\Users\User\Documents\rev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map