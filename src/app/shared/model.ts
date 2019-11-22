export class ModelClass{
    _id?;
     id: "";
    userId: "";
    name: "";
    description: "";
    ver: "";
}

export class ComponentClass{
    _id?;
    id = "";
    modelId = "";
    userId = "";
    name = "";
    objectClass = "";
    objectType = "";
    description = "";
    unit = "";
    picture = "";
    x = 0;
    y = 0;
    selected = [];
    parameters: ParameterClass[] = [];
    modelIdName = "";
}

export class ParameterClass{
    constructor(id?, name?, value?, showOnDiagram?){
        this.id = id;
        this.name = name;
        this.value = value;
        this.showOnDiagram = showOnDiagram;
    }
    id = "";
    name = "";
    description = ""
    value = "";
    measurable = 0;
    changeable = 0;
    controlType = "";
    showName = 0;
    showOnDiagram = 0;
    featureLabelNone = "";
    sliderStep = 1;
    sliderMax = 100;
    sliderMin = 0;
}