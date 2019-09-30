"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var shared_module_1 = require("./shared/shared.module");
var auth_module_1 = require("./auth/auth.module");
var app_component_1 = require("./app.component");
var admin_module_1 = require("./admin/admin.module");
var header_interceptor_1 = require("./interceptors/header.interceptor");
var http_error_interceptor_1 = require("./interceptors/http-error.interceptor");
var app_routing_module_1 = require("./app-routing/app-routing.module");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var model_main_component_1 = require("./model-main/model-main.component");
var model_list_component_1 = require("./model-list/model-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                model_main_component_1.ModelMainComponent,
                model_list_component_1.ModelListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                router_1.RouterModule,
                shared_module_1.SharedModule,
                auth_module_1.AuthModule,
                admin_module_1.AdminModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [{
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: header_interceptor_1.AuthHeaderInterceptor,
                    multi: true,
                }, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: http_error_interceptor_1.CatchErrorInterceptor,
                    multi: true,
                }],
            entryComponents: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map