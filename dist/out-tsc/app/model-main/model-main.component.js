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
var component_service_1 = require("../shared/component.service");
var dialog_1 = require("@angular/material/dialog");
var dialog_parameters_component_1 = require("../shared/components/dialog-parameters/dialog-parameters.component");
var model_1 = require("../shared/model");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/internal/operators");
var auth_service_1 = require("../auth/auth.service");
var ModelMainComponent = /** @class */ (function () {
    function ModelMainComponent(modelService, componentService, dialog, authService, activatedRoute) {
        var _this = this;
        this.modelService = modelService;
        this.componentService = componentService;
        this.dialog = dialog;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.types = [
            "Input",
            "Output",
            "InputOutput",
            "Process",
            "Board"
        ];
        this.colors = {
            "Input": "#f2f2f2",
            "Output": "#fbe5d6",
            "InputOutput": "#e2f0d9",
            "Process": "#b4c7e7",
            "Board": "#ffe699"
        };
        this.data = [];
        this.optionsModal = {};
        this.formulaSaver = {};
        this.txtQueryChanged = new rxjs_1.Subject();
        this.newParametr = new model_1.ParameterClass("", "", "0", "");
        this.modelId = this.activatedRoute.snapshot.paramMap.get('id');
        this.authService.me().subscribe(function (data) {
            _this.user = data.user;
            _this.modelService.getAllById(_this.user._id).subscribe(function (data) {
                console.log(data);
                _this.modelList = data;
                _this.componentService.getAllById(_this.modelId).subscribe(function (data) {
                    _this.data = data;
                    console.log(data);
                    _this.calc();
                    setTimeout(function () {
                        _this.drow();
                    }, 1000);
                });
            });
        });
        // setInterval(() => {
        //   this.removeAll()
        //   this.drowLines()
        //   this.drow();
        //   this.txtQueryChanged.next(this.uuidv4());
        // }, 5000)
        this.txtQueryChanged
            .pipe(operators_1.debounceTime(1800), operators_1.distinctUntilChanged())
            .subscribe(function (model) {
            var id = _this.data[model.selected];
            if (id) {
                _this.componentService.update(id).subscribe(function (data) {
                });
                _this.formulaSaver = {};
                if (!model.drag)
                    _this.calc();
            }
            if (!model.drag)
                setTimeout(function () {
                    _this.removeAll();
                    _this.drow();
                }, 1000);
        });
    }
    ModelMainComponent.prototype.calc = function () {
        var _this = this;
        this.data.forEach(function (comp) {
            comp.parameters.forEach(function (element) {
                if (element.value) {
                    var v = element.value;
                    var spcaSpit = v.split(" ");
                    spcaSpit.forEach(function (element, index) {
                        var earr = element.split(".");
                        if (earr.length == 2) {
                            if (!_this.formulaSaver[earr[1]] && !_this.formulaSaver[element]) {
                                _this.formulaSearch(element);
                            }
                        }
                    });
                }
            });
        });
    };
    ModelMainComponent.prototype.keyEvent = function (event) {
        var _this = this;
        if ((event.keyCode === 46 || event.keyCode === 8) && this.selected) {
            this.componentService.delete(this.data[this.selected]).subscribe(function (data) {
                _this.data.splice(_this.selected, 1);
                _this.removeAll();
                _this.drowLines();
                _this.drow();
                _this.selected = null;
                _this.activeArrow = null;
            });
        }
        if ((event.keyCode === 46 || event.keyCode === 8) && (this.selectedLineId || this.selectedLineId === 0)) {
            this.selectedLineFrom.selected.forEach(function (id, index) {
                if (id === _this.selectedLineTo._id) {
                    _this.data.forEach(function (element, i) {
                        if (element._id === _this.selectedLineFrom._id) {
                            _this.data[i].selected.splice(index, 1);
                            _this.txtQueryChanged.next({
                                value: _this.selectedLine,
                                selected: i
                            });
                        }
                    });
                }
            });
            this.removeAll();
            this.drowLines();
            this.drow();
        }
    };
    ModelMainComponent.prototype.openDialog = function (item) {
        var _this = this;
        this.openDialogItem = item;
        var dialogRef = this.dialog.open(dialog_parameters_component_1.DialogParametersComponent, {
            width: '450px',
            data: {
                list: this.modelList,
                formula: item.value
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            item.value = result.formula;
            _this.txtQueryChanged.next({
                value: item.value,
                selected: _this.selectedModal
            });
        });
    };
    ModelMainComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ModelMainComponent.prototype.init = function () {
        var _this = this;
        this.menuInit();
        this.zoom = d3
            .zoom()
            .scaleExtent([0.1, 2])
            .on("zoom", function () {
            _this.zoomTrans = d3.event.transform;
            // this.conteiner.attr("transform", d3.event.transform);
            var currentTransform = d3.event.transform;
            if (!currentTransform.x) {
                currentTransform.x = 0;
                currentTransform.y = 0;
            }
            _this.conteiner.attr("transform", currentTransform);
            _this.slider.property("value", currentTransform.k);
            _this.rangeWidth();
        });
        this.vis = d3.select("#graph").append("svg");
        var w = "100%", h = "100%";
        this.vis
            .attr("width", w)
            .attr("height", h)
            .on("click", function () {
            // if (!this.readOnly) {
            //   this.unselect();
            //   if (this.startDrowLine) {
            //     this.removeAll();
            //     this.startDrowLine = null;
            //     this.activeArrow = null;
            //     document.documentElement.style.cursor = "default";
            //     this.drow();
            //   }
            //   if (!this.clickArrow) {
            //     this.unselectArrow();
            //   }
            //   this.clickArrow = false;
            // }
        });
        this.vis.call(this.zoom).on("dblclick.zoom", null);
        this.conteiner = this.vis.append("g").attr("id", "wrap");
        var g = d3
            .select("#graph")
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-d3-zoom-wrap");
        var g1 = g;
        var icon = g1
            .append("svg")
            .attr("width", "14")
            .attr("height", "14")
            .attr("viewBox", "0 0 14 14")
            .append("g")
            .attr("fill", "#2196F3")
            .attr("fill-rule", "nonzero");
        icon
            .append("path")
            .attr("d", "M12.316 9.677a5.677 5.677 0 0 0 0-8.019 5.676 5.676 0 0 0-8.019 0 5.56 5.56 0 0 0-.853 6.843s.094.158-.033.284L.518 11.678c-.575.576-.712 1.381-.202 1.892l.088.088c.51.51 1.316.373 1.892-.202l2.886-2.887c.133-.133.29-.04.29-.04a5.56 5.56 0 0 0 6.844-.852zM5.344 8.63a4.194 4.194 0 0 1 0-5.925 4.194 4.194 0 0 1 5.925 0 4.194 4.194 0 0 1 0 5.925 4.195 4.195 0 0 1-5.925 0z");
        icon
            .append("path")
            .attr("d", "M5.706 5.331a.584.584 0 0 1-.539-.813A3.688 3.688 0 0 1 9.996 2.56a.585.585 0 0 1-.457 1.078 2.516 2.516 0 0 0-3.294 1.336.585.585 0 0 1-.54.357z");
        var g2 = g1
            .append("div")
            .datum({})
            .attr("class", "coco-bpm-slider-wrap");
        this.slider = g2
            .append("input")
            .datum({})
            .attr("type", "range")
            .attr("class", "coco-bpm-slider")
            .attr("id", "range")
            .attr("value", 1)
            .attr("min", 0.1)
            .attr("max", 2)
            .attr("step", 0.01)
            .on("input", function () {
            _this.zoom.scaleTo(_this.vis, d3.select("#range").property("value"));
            _this.rangeWidth();
        });
        g2.append("div")
            .datum({})
            .attr("class", "coco-bpm-line-range")
            .attr("id", "lineZoomRange");
        document.getElementById("graph").addEventListener("mousemove", function (e) {
            var dummyX = e.offsetX;
            var dummyY = e.offsetY;
            if (_this.startDrowLine && _this.data[_this.startDrowLine]) {
                _this.removeAll();
                d3.selectAll("#drowLine").remove();
                var x = void 0, y = void 0;
                if (document.getElementById("wrap").getAttribute("transform") === null) {
                    x = e.offsetX;
                    y = e.offsetY;
                }
                else {
                    x = (e.offsetX - _this.zoomTrans.x) / _this.zoomTrans.k;
                    y = (e.offsetY - _this.zoomTrans.y) / _this.zoomTrans.k;
                }
                var d = {
                    source: {
                        x: _this.data[_this.startDrowLine].x,
                        y: _this.data[_this.startDrowLine].y - 50
                    },
                    target: {
                        x: x,
                        y: y
                    }
                };
                var link = d3
                    .linkHorizontal()
                    .x(function (d) {
                    return d.x;
                })
                    .y(function (d) {
                    return d.y;
                });
                _this.conteiner
                    .append("path")
                    .attr("class", "path")
                    .attr("id", "drowLine")
                    .attr("d", link(d))
                    .style("fill", "none")
                    .style("stroke", "#555")
                    .attr("stroke-opacity", 0.4)
                    .attr("stroke-width", 1.5);
                _this.conteiner
                    .append("polyline")
                    .attr("points", d.source.x +
                    "," +
                    d.source.y +
                    " " +
                    (d.source.x + d.target.x) / 2 +
                    "," +
                    (d.source.y + d.target.y) / 2 +
                    " " +
                    d.target.x +
                    "," +
                    d.target.y)
                    .style("fill", "none");
                _this.drow();
            }
        });
        this.marker = this.conteiner
            .append("svg:defs")
            .append("svg:marker")
            .attr("id", "triangle")
            .attr("refX", 6)
            .attr("refY", 6)
            .attr("markerWidth", 30)
            .attr("markerHeight", 30)
            .attr("orient", "auto");
        this.marker
            .append("path")
            .attr("class", "path")
            .attr("d", "M 0 0 12 6 0 12 3 6")
            .style("fill", "#999");
    };
    ModelMainComponent.prototype.menuInit = function () {
        var _this = this;
        this.types.forEach(function (type) {
            if (document.getElementById(type)) {
                document.getElementById(type).addEventListener("dragstart", function (ev) {
                    _this.dragType = type;
                    if (_this.isStart && type === "Start") {
                        event.preventDefault();
                    }
                }, false);
            }
        });
        document.addEventListener("dragover", function (event) {
            event.preventDefault();
        });
        document.getElementById("graph").addEventListener("drop", function (ev) {
            var x, y;
            if (document.getElementById("wrap").getAttribute("transform") === null) {
                x = ev.offsetX;
                y = ev.offsetY;
            }
            else {
                x = (ev.offsetX - _this.zoomTrans.x) / _this.zoomTrans.k;
                y = (ev.offsetY - _this.zoomTrans.y) / _this.zoomTrans.k;
            }
            ev.preventDefault();
            var model = new model_1.ComponentClass();
            model.x = x;
            model.y = y;
            model.objectClass = _this.dragType;
            model.modelId = _this.modelId;
            model.id = "obj" + (_this.data.length + 1);
            var p1 = new model_1.ParameterClass("Price" + model.id, "Price", "0", 1);
            var p2 = new model_1.ParameterClass("Speed" + model.id, "Speed", "0", 1);
            var p3 = new model_1.ParameterClass("CostPrice" + model.id, "CostPrice", "0", 1);
            model.parameters = [p1, p2, p3];
            _this.componentService.create(model).subscribe(function (data) {
                _this.data.push(data);
                _this.removeAll();
                _this.drow();
                _this.dragType = null;
            });
        }, false);
    };
    ModelMainComponent.prototype.drow = function () {
        var _this = this;
        this.drowLines();
        this.data.forEach(function (element, index, arr) {
            switch (element.objectClass) {
                case "Input":
                case "Output":
                case "InputOutput":
                case "Process":
                case "Board":
                    var d = void 0, dx = void 0, dy = void 0, color = void 0;
                    dx = element.x - 10;
                    dy = element.y - 8;
                    color = _this.colors[element.objectClass];
                    var count_1 = 0;
                    element.parameters.forEach(function (param, index) {
                        if (param.showOnDiagram) {
                            count_1++;
                        }
                    });
                    var h = (60 + (count_1 > 3 ? ((count_1 - 3) * 16 + (count_1 * 5)) : 0));
                    var react = ((element.objectClass === "Process") || (element.objectClass === "Board")) ? " coco-bpm-rect-style" : "";
                    var selected = +_this.selected === +index ? "stroke-width:1;stroke:rgb(0,0,0)" : "";
                    var g_1 = _this.conteiner.append("g").attr("class", "g");
                    g_1.append("rect")
                        .attr("class", "nodes" + react)
                        .attr("id", index)
                        .attr("style", selected)
                        .attr("fill", color)
                        .attr("x", element.x - 25)
                        .attr("y", element.y - 80)
                        .attr("width", 160)
                        .attr("height", h)
                        .attr("rx", 10)
                        .attr("ry", 10)
                        .on("mouseover", function (q, w, e) {
                        d3.event.stopPropagation();
                        if (_this.activeArrow) {
                            document.documentElement.style.cursor = "default";
                            d3.select(document.getElementById(e[0].id + "main")).style("fill", "#84bd96");
                        }
                    })
                        .on("mouseout", function (q, w, e) {
                        d3.event.stopPropagation();
                        d3.select(document.getElementById(e[0].id + "main")).style("fill", "#2196f3");
                        if (_this.activeArrow) {
                            document.documentElement.style.cursor = "not-allowed";
                        }
                    })
                        .on("click", function (d, i, s) {
                        d3.event.stopPropagation();
                        _this.shepClick(s);
                    })
                        .on("dblclick", function (d, i, s) {
                        _this.selectedModal = s[0].id;
                        _this.newParametr = new model_1.ParameterClass("par" + (_this.data[_this.selectedModal].parameters.length + 1), "", "0");
                        _this.showSide = !_this.showSide;
                        _this.removeAll();
                        _this.drow();
                        _this.activeArrow = null;
                        _this.startDrowLine = null;
                        _this.selected = null;
                    })
                        .call(d3
                        .drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended));
                    var countIndex_1 = 0;
                    var parameters = element.parameters.slice();
                    parameters.forEach(function (param, paramIndex) {
                        if (param.showOnDiagram) {
                            var py = element.y - 50 - (countIndex_1 * 20) + (count_1 >= 3 ? ((count_1 - 3) * 16 + (count_1 * 7)) : (count_1 > 1) ? (count_1 * 4) : -9);
                            switch (param.controlType) {
                                case "Value":
                                case "":
                                    var v = param.value;
                                    if (v && v.charAt(0) === "=") {
                                        var spcaSpit_1 = v.split(" ");
                                        spcaSpit_1.forEach(function (element, index) {
                                            var earr = element.split(".");
                                            if (earr.length == 2) {
                                                if (_this.formulaSaver[earr[1]]) {
                                                    spcaSpit_1[index] = _this.formulaSaver[earr[1]];
                                                }
                                                else {
                                                    spcaSpit_1[index] = _this.formulaSaver[element];
                                                }
                                            }
                                        });
                                        spcaSpit_1.shift();
                                        try {
                                            _this.formulaSaver[param.id] = _this.notEval(spcaSpit_1.join(''));
                                        }
                                        catch (_a) {
                                            _this.calc();
                                        }
                                        g_1.append("text")
                                            .attr("x", element.x)
                                            .attr("y", py)
                                            .text((param.name || param.id) + " - " + _this.formulaSaver[param.id]);
                                    }
                                    else {
                                        g_1.append("text")
                                            .attr("x", element.x)
                                            .attr("y", py)
                                            .text((param.name || param.id) + " - " + v);
                                    }
                                    break;
                                case "Input":
                                    var gI = g_1.append("g");
                                    gI.append("text")
                                        .attr("x", element.x)
                                        .attr("y", py)
                                        .text((param.name || param.id) + " - ");
                                    gI.append("foreignObject")
                                        .attr("x", element.x + ((param.name || param.id).length * 11))
                                        .attr("y", py - 15)
                                        .attr("width", 50)
                                        .attr("height", 16)
                                        .attr("class", "foreignObject-input-bmp")
                                        .html(function (d) {
                                        return "<input id=\"" + index + "-" + paramIndex + "\" type=\"number\" value=\"" + param.value + "\" />";
                                    });
                                    var inputElement_1 = document.getElementById(index + "-" + paramIndex);
                                    var self_1 = _this;
                                    inputElement_1.onkeypress = function (e) {
                                        setTimeout(function () {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = inputElement_1.value.toString();
                                            self_1.txtQueryChanged.next({
                                                value: inputElement_1.value,
                                                selected: self_1.dragSelected
                                            });
                                        }, 500);
                                    };
                                    break;
                                case "Slider":
                                    var gR = g_1.append("g");
                                    gR.append("text")
                                        .attr("x", element.x)
                                        .attr("y", py)
                                        .text((param.name || param.id) + " - ");
                                    gR.append("foreignObject")
                                        .attr("x", element.x + ((param.name || param.id).length * 10))
                                        .attr("y", py - 15)
                                        .attr("width", 50)
                                        .attr("height", 16)
                                        .attr("class", "foreignObject-input-bmp")
                                        .html(function (d) {
                                        return "<input id=\"" + index + "-" + paramIndex + "\" type=\"range\" min=\"0\" max=\"1000\" value=\"" + param.value + "\" />";
                                    });
                                    self_1 = _this;
                                    var rangeElement_1 = document.getElementById(index + "-" + paramIndex);
                                    rangeElement_1.onchange = function (e) {
                                        setTimeout(function () {
                                            self_1.dragSelected = index;
                                            self_1.data[index].parameters[paramIndex].value = rangeElement_1.value.toString();
                                            self_1.txtQueryChanged.next({
                                                value: inputElement_1.value,
                                                selected: self_1.dragSelected
                                            });
                                        }, 500);
                                    };
                                    break;
                                default:
                                    break;
                            }
                            countIndex_1++;
                        }
                    });
                    break;
                default:
                    break;
            }
            if (_this.marker)
                _this.marker
                    .append("path")
                    .attr("class", "path")
                    .attr("d", "M 0 0 12 6 0 12 3 6")
                    .style("fill", "#999");
            var self = _this;
            function dragstarted(d) {
                // d3.select(this)
                //   .classed("active", true);
                self.start_x = +d3.event.x;
                self.start_y = +d3.event.y;
            }
            function dragged(d) {
                var current_scale, current_scale_string;
                var transform = document.getElementById('wrap');
                if (transform.getAttribute("transform") === null) {
                    current_scale = 1;
                }
                else {
                    current_scale_string = transform.getAttribute("transform").split(" ")[1];
                    current_scale = +current_scale_string.substring(6, current_scale_string.length - 1);
                }
                if (!self.zoomTrans) {
                    self.zoomTrans = {
                        x: 0,
                        y: 0,
                        k: 1,
                    };
                }
                self.dragSelected = this.getAttribute("id");
                self.data[this.getAttribute("id")].x =
                    (d3.event.x - self.zoomTrans.x) / self.zoomTrans.k;
                // self.start_x + (d3.event.x - self.start_x) / current_scale;
                // (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
                var scale = 30;
                if (self.zoomTrans.k < 0.33) {
                    scale = 50;
                }
                self.data[this.getAttribute("id")].y =
                    (d3.event.y - self.zoomTrans.y) / self.zoomTrans.k - (scale / self.zoomTrans.k);
                // self.start_y + (d3.event.y - self.start_y) / current_scale;
                self.removeAll();
                self.drow();
                self.txtQueryChanged.next({
                    value: self.zoomTrans,
                    selected: self.dragSelected,
                    drag: 1
                });
            }
            function dragended(d) {
                d3.select(this).classed("active", false);
            }
        });
    };
    ModelMainComponent.prototype.formulaSearch = function (element) {
        var _this = this;
        var arr = element.split(".");
        this.modelList.forEach(function (model) {
            if (model.id === arr[0]) {
                _this.componentService.getAllById(model._id).subscribe(function (data) {
                    data.forEach(function (comp) {
                        comp.parameters.forEach(function (param) {
                            if (param.id === arr[1]) {
                                _this.formulaSaver[element] = param.value;
                            }
                        });
                    });
                });
            }
        });
    };
    ModelMainComponent.prototype.drowLines = function () {
        var _this = this;
        this.data.forEach(function (value, index, arr) {
            value.selected.forEach(function (item) {
                var to = _this.searchById(item, _this.data);
                var from = _this.data[index];
                if (to) {
                    var x = +from.x;
                    var y = +from.y;
                    var x2 = +to.x;
                    var y2 = +to.y;
                    var minX = Math.abs(x - x2);
                    var minY = Math.abs(y - y2);
                    if (minX > minY) {
                        if (+x < +x2) {
                            x += 25;
                            x2 -= 25;
                        }
                        else {
                            x -= 25;
                            x2 += 25;
                        }
                    }
                    else {
                        if (+y < +y2) {
                            y += 25;
                            y2 -= 25;
                        }
                        else {
                            y -= 25;
                            y2 += 25;
                        }
                    }
                    var d = {
                        source: {
                            x: x,
                            y: y - 50
                        },
                        target: {
                            x: x2,
                            y: y2 - 50
                        }
                    };
                    var link = d3
                        .linkHorizontal()
                        .x(function (d) {
                        return d.x;
                    })
                        .y(function (d) {
                        return d.y;
                    });
                    _this.conteiner
                        .append("path")
                        .attr("d", link(d))
                        .attr("id", from.id + to.id)
                        .attr("class", "path")
                        .style("fill", "none")
                        .style("stroke", "#555")
                        .attr("stroke-opacity", 0.4)
                        .attr("stroke-width", 1.5)
                        .attr("marker-mid", "url(#triangle)");
                    _this.conteiner
                        .append("path")
                        .attr("class", "path")
                        .attr("d", link(d))
                        .style("fill", "none")
                        .style("stroke", "#555")
                        .attr("stroke-opacity", 0)
                        .attr("stroke-width", 15)
                        .on("click", function () {
                        // if (this.selectedLine) {
                        //   this.unselectArrow();
                        // }
                        _this.clickArrow = true;
                        _this.selectedLine = from.id + to.id;
                        _this.selectedLineId = index;
                        _this.selectedLineFrom = from;
                        _this.selectedLineTo = to;
                        d3.select(document.getElementById(from.id + to.id)).style("stroke-width", 2.5);
                        d3.select(document.getElementById(from.id + to.id)).style("stroke", "black");
                    });
                    _this.conteiner
                        .append("polyline")
                        .attr("points", d.source.x +
                        "," +
                        d.source.y +
                        " " +
                        (d.source.x + d.target.x) / 2 +
                        "," +
                        (d.source.y + d.target.y) / 2 +
                        " " +
                        d.target.x +
                        "," +
                        d.target.y)
                        .style("fill", "none")
                        .attr("marker-mid", "url(#triangle)");
                }
            });
        });
    };
    ModelMainComponent.prototype.shepClick = function (s) {
        var _this = this;
        this.selected = s[0].id;
        var id = this.selected;
        console.log(this.data[this.selected]);
        if (!this.activeArrow) {
            this.activeArrow = id;
            this.startDrowLine = id;
        }
        else {
            if (this.data[id].selected[0] &&
                this.data[id].selected[0] === this.data[this.activeArrow]._id) {
                return;
            }
            var count_2 = 0;
            this.data.forEach(function (element, index) {
                if (_this.data[_this.activeArrow].selected[0] &&
                    _this.data[_this.activeArrow].selected[0] === _this.data[index]._id) {
                    count_2++;
                }
            });
            if (count_2) {
                return;
            }
            if (id !== this.activeArrow) {
                this.data[this.activeArrow].selected.push(this.data[id]._id);
                this.txtQueryChanged.next({
                    value: "query",
                    selected: this.activeArrow
                });
            }
            this.activeArrow = null;
            this.startDrowLine = null;
        }
        this.removeAll();
        this.drowLines();
        this.drow();
    };
    ModelMainComponent.prototype.removeAll = function () {
        d3.selectAll("line").remove();
        d3.selectAll("polyline").remove();
        d3.selectAll("rect").remove();
        d3.selectAll("text").remove();
        d3.selectAll("circle").remove();
        // d3.selectAll("g").remove();
        d3.selectAll(".path").remove();
        d3.selectAll(".g").remove();
        // this.types.forEach(type => {
        //   d3.selectAll(type).remove();
        // });
    };
    ModelMainComponent.prototype.searchById = function (id, arr) {
        if (arr) {
            var result = arr.find(function (element) { return element._id === id; });
            return result;
        }
    };
    ModelMainComponent.prototype.uuidv4 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    ModelMainComponent.prototype.onFieldChange = function (query) {
        this.txtQueryChanged.next({
            value: query,
            selected: this.selectedModal
        });
    };
    ModelMainComponent.prototype.addParametr = function () {
        this.data[this.selectedModal].parameters.unshift(this.newParametr);
        this.newParametr = new model_1.ParameterClass("", "", "0", "");
        this.txtQueryChanged.next({
            value: this.newParametr,
            selected: this.selectedModal
        });
    };
    ModelMainComponent.prototype.onKeyDown = function (e) {
        var re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;
        if (!re.test(e.key)) {
            return false;
        }
    };
    ModelMainComponent.prototype.notEval = function (fn) {
        return new Function('return ' + fn)();
    };
    ModelMainComponent.prototype.rangeWidth = function (flag) {
        if (flag) {
            setTimeout(function () {
                document.getElementById("lineZoomRange").style.width = 50 + "%";
            }, 500);
        }
        else {
            var input = document.getElementById("range");
            var width = void 0;
            width = (input["value"] / 2) * 100;
            document.getElementById("lineZoomRange").style.width = width + "%";
        }
    };
    __decorate([
        core_1.HostListener("document:keyup", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModelMainComponent.prototype, "keyEvent", null);
    ModelMainComponent = __decorate([
        core_1.Component({
            selector: 'app-model-main',
            templateUrl: './model-main.component.html',
            styleUrls: ['./model-main.component.scss']
        }),
        __metadata("design:paramtypes", [model_service_1.ModelService,
            component_service_1.ComponentService,
            dialog_1.MatDialog,
            auth_service_1.AuthService,
            router_1.ActivatedRoute])
    ], ModelMainComponent);
    return ModelMainComponent;
}());
exports.ModelMainComponent = ModelMainComponent;
//# sourceMappingURL=model-main.component.js.map