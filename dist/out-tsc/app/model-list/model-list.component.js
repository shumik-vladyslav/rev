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
var model_service_1 = require("../shared/model.service");
var auth_service_1 = require("../auth/auth.service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var dialog_create_model_component_1 = require("../shared/components/dialog-create-model/dialog-create-model.component");
var model_1 = require("../shared/model");
var ModelListComponent = /** @class */ (function () {
    function ModelListComponent(modelService, authService, router, dialog) {
        this.modelService = modelService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.model = new model_1.ModelClass();
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
        var dialogRef = this.dialog.open(dialog_create_model_component_1.DialogCreateModelComponent, {
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
        core_1.Component({
            selector: 'app-model-list',
            templateUrl: './model-list.component.html',
            styleUrls: ['./model-list.component.scss']
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            auth_service_1.AuthService,
            router_1.Router,
            material_1.MatDialog])
    ], ModelListComponent);
    return ModelListComponent;
}());
exports.ModelListComponent = ModelListComponent;
//# sourceMappingURL=model-list.component.js.map