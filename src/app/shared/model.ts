export class ModelClass{
    id: "";
    userId: "";
    name: "";
    description: "";
}

export class ComponentClass{
    id = "";
    modelId = "";
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
}

export class ParameterClass{
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
}