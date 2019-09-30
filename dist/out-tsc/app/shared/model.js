"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelClass = /** @class */ (function () {
    function ModelClass() {
    }
    return ModelClass;
}());
exports.ModelClass = ModelClass;
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
exports.ComponentClass = ComponentClass;
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
exports.ParameterClass = ParameterClass;
//# sourceMappingURL=model.js.map