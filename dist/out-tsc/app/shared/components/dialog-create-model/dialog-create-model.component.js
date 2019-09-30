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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var model_1 = require("../../model");
var DialogCreateModelComponent = /** @class */ (function () {
    function DialogCreateModelComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.model = new model_1.ModelClass();
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
        core_1.Component({
            selector: "app-dialog-create-model",
            templateUrl: "./dialog-create-model.component.html",
            styleUrls: ["./dialog-create-model.component.scss"]
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], DialogCreateModelComponent);
    return DialogCreateModelComponent;
}());
exports.DialogCreateModelComponent = DialogCreateModelComponent;
//# sourceMappingURL=dialog-create-model.component.js.map