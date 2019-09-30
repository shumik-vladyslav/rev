"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ComponentService);
    return ComponentService;
}());
exports.ComponentService = ComponentService;
//# sourceMappingURL=component.service.js.map