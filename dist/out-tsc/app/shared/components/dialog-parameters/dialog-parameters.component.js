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
var material_1 = require("@angular/material");
var component_service_1 = require("../../component.service");
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
        core_1.Component({
            selector: "app-dialog-parameters",
            templateUrl: "./dialog-parameters.component.html",
            styleUrls: ["./dialog-parameters.component.scss"]
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef,
            component_service_1.ComponentService, Object])
    ], DialogParametersComponent);
    return DialogParametersComponent;
}());
exports.DialogParametersComponent = DialogParametersComponent;
//# sourceMappingURL=dialog-parameters.component.js.map