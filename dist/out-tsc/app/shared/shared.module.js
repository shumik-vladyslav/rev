"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var tooltip_1 = require("@angular/material/tooltip");
var dialog_parameters_component_1 = require("./components/dialog-parameters/dialog-parameters.component");
var dialog_create_model_component_1 = require("./components/dialog-create-model/dialog-create-model.component");
var filtr_list_param_pipe_1 = require("./pipes/filtr-list-param.pipe");
var click_outside_directive_1 = require("./directives/click-outside.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatToolbarModule,
                material_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatDividerModule,
                material_1.MatCardModule,
                material_1.MatListModule,
                material_1.MatExpansionModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                material_1.MatInputModule,
                material_1.MatSnackBarModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatSidenavModule,
                material_1.MatTreeModule,
                material_1.MatProgressBarModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatCheckboxModule,
                flex_layout_1.FlexLayoutModule,
                tooltip_1.MatTooltipModule
            ],
            exports: [
                material_1.MatToolbarModule,
                material_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatDividerModule,
                material_1.MatCardModule,
                material_1.MatListModule,
                material_1.MatExpansionModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                material_1.MatInputModule,
                material_1.MatSnackBarModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatSidenavModule,
                material_1.MatTreeModule,
                material_1.MatProgressBarModule,
                material_1.MatFormFieldModule,
                material_1.MatSelectModule,
                material_1.MatCheckboxModule,
                flex_layout_1.FlexLayoutModule,
                tooltip_1.MatTooltipModule
            ],
            entryComponents: [dialog_parameters_component_1.DialogParametersComponent, dialog_create_model_component_1.DialogCreateModelComponent],
            declarations: [dialog_parameters_component_1.DialogParametersComponent, dialog_create_model_component_1.DialogCreateModelComponent, filtr_list_param_pipe_1.FiltrListParamPipe, click_outside_directive_1.ClickOutsideDirective],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map