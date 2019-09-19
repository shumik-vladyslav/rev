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
    value = 1;
    measurable = 1;
    changeable = 1;
    controlType = "";
    showName = 1;
    showOnDiagram = 1;
    featureLabelNone = "";
}