import { Component, OnInit, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { ComponentService } from '../shared/component.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogParametersComponent } from '../shared/components/dialog-parameters/dialog-parameters.component';
import { ComponentClass, ParameterClass } from '../shared/model';
import { ActivatedRoute } from '@angular/router';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/internal/operators";
import { AuthService } from '../auth/auth.service';
declare var d3;
@Component({
  selector: 'app-model-main',
  templateUrl: './model-main.component.html',
  styleUrls: ['./model-main.component.scss']
})
export class ModelMainComponent implements OnInit, AfterViewInit, OnDestroy {
  types = [
    "Input",
    "Output",
    "InputOutput",
    "Process",
    "Board"
  ];

  colors = {
    "Input": "#f2f2f2",
    "Output": "#fbe5d6",
    "InputOutput": "#e2f0d9",
    "Process": "#b4c7e7",
    "Board": "#ffe699"
  }

  picture;
  zoom;
  zoomTrans;
  conteiner;
  dragType;
  isStart;
  vis;
  data = [];
  start_x;
  start_y;
  activeArrow;
  selected;
  startDrowLine;
  marker;
  modelId;
  showSide;
  selectedModal;
  optionsModal = {};
  dragSelected;
  user;
  modelList;
  setInterval;
  formulaSaverOld = {};
  saverComponent = [];
  modelsKeys = {};

  constructor(
    private modelService: ModelService,
    private componentService: ComponentService,
    public dialog: MatDialog,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.modelId = this.activatedRoute.snapshot.paramMap.get('id');
    this.authService.me().subscribe(data => {
      this.user = data.user;
      this.modelService.getAllById(this.user._id).subscribe((data: any) => {
        console.log(data);
        this.componentService.getAllByUserId(this.user._id).subscribe((data: any) => {
          this.formulaData = data;
        });
        this.modelList = data;
        this.modelList.forEach((model) => {
          this.modelsKeys[model._id] = model.id;
        })
        this.componentService.getAllById(this.modelId).subscribe((data: any) => {
          this.data = data;
          this.saverComponent = [JSON.parse(JSON.stringify( this.data ))];
          console.log(data);

          this.calc();
          setTimeout(() => {
            this.removeAll();
            this.drowLines();
            this.drow();
          }, 1000);
        });
      });
    });

    // this.setInterval = setInterval(() => {
    //   this.removeAll()
    //   this.drowLines()
    //   this.drow();
    //   this.txtQueryChanged.next(this.uuidv4());
    // }, 5000);

    this.txtQueryChanged
      // .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe(model => {
        this.saverComponent.push(JSON.parse(JSON.stringify( this.data )));

        let id = this.data[model.selected];
        if (id) {
          this.componentService.update(id).subscribe((data) => {
          });

          if (!model.drag) {
            this.componentService.getAllByUserId(this.user._id).subscribe((data: any) => {
              this.formulaData = data;
              this.formulaSaver = {};
              this.calc();
            });
          }
        }
        if (!model.drag)
          setTimeout(() => {
            this.removeAll();
            this.drow();
          }, 1000);
      });
  }

  calc() {
    this.data.forEach((comp) => {
      comp.parameters.forEach(element => {
        if (element.value) {
          let v = element.value;
          let spcaSpit = v.split(" ");
          spcaSpit.forEach((element, index) => {
            let earr = element.split(".");
            if (earr.length == 3) {
              if (!this.formulaSaver[earr[2]] && !this.formulaSaver[element]) {
                this.formulaSearch(element);
              }
            }
          });
        }
      });
    });
  }

  clear() {
    this.selected = null;
    this.activeArrow = null;
    this.clickArrow = null;
    this.selectedLine = null;
    this.selectedLineId = null;
    this.selectedLineFrom = null;
    this.selectedLineTo = null;
    this.startDrowLine = null;
    this.removeAll();
    this.drowLines();
    console.log(8)
    this.drow();
  }

  @HostListener("document:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    // if (
    //   (event.keyCode === 46 || event.keyCode === 8) && this.selected
    // ) {
    //   this.saverComponent.push(JSON.parse(JSON.stringify( this.data )));
    //   this.componentService.delete(this.data[this.selected]).subscribe((data) => {
    //     this.data.splice(this.selected, 1);

    //     this.clear();
    //   });
    // }

    if (event.keyCode === 90 && (event.ctrlKey || event.metaKey)) {
      this.undo();
    }

    if (event.keyCode === 27) {
      if (this.startDrowLine) {
        this.removeAll();
        document.documentElement.style.cursor = "default";
        this.clear();
      }

      if (!this.clickArrow) {
        this.unselectArrow();
      }
    }

    if ((event.keyCode === 46 || event.keyCode === 8) && (this.selectedLineId || this.selectedLineId === 0)) {
      this.selectedLineFrom.selected.forEach((id, index) => {
        if (id === this.selectedLineTo._id) {
          this.saverComponent.push(JSON.parse(JSON.stringify( this.data )));
          this.data.forEach((element, i) => {
            if (element._id === this.selectedLineFrom._id) {
              this.data[i].selected.splice(index, 1);

              this.txtQueryChanged.next({
                value: this.selectedLine,
                selected: i
              });
            }
          });

        }
      });
      this.clear();
    }
  }

  openDialogItem;
  slider;

  openDialog(item): void {
    this.openDialogItem = item;
    const dialogRef = this.dialog.open(DialogParametersComponent, {
      width: '450px',
      data: {
        list: this.modelList,
        formula: item.value,
        modelId: this.modelId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      item.value = result.formula;
      this.txtQueryChanged.next({
        value: item.value,
        selected: this.selectedModal
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.setInterval);
  }

  ngAfterViewInit() {
    this.init();
  }

  undo(){
    if (this.saverComponent) {
      let arr = this.saverComponent[this.saverComponent.length - 2];
      if (arr && this.saverComponent.length > 1) {
        this.data = JSON.parse(JSON.stringify( arr ));
        this.saverComponent.pop();

        this.data.forEach(element => {
          this.componentService.update(element).subscribe((data) => {
          });
        });
        this.componentService.getAllByUserId(this.user._id).subscribe((data: any) => {
          this.formulaData = data;
          this.formulaSaver = {};
          this.calc();
          // this.removeAll();
          // this.drowLines();
          // this.clear();
          // this.drow();
        });
      }
    }
  }

  init() {

    this.menuInit();

    this.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", () => {
        this.zoomTrans = d3.event.transform;
        // this.conteiner.attr("transform", d3.event.transform);
        const currentTransform = d3.event.transform;
        if (!currentTransform.x) {
          currentTransform.x = 0;
          currentTransform.y = 0;
        }
        this.conteiner.attr("transform", currentTransform);
        this.slider.property("value", currentTransform.k);
        this.rangeWidth();

      });
    this.vis = d3.select("#graph").append("svg");
    var w = "100%",
      h = "100%";
    this.vis
      .attr("width", w)
      .attr("height", h)
      .on("click", () => {
        // if (!this.readOnly) {
        //   this.unselect();

        if (this.startDrowLine) {
          this.removeAll();
          this.startDrowLine = null;
          this.activeArrow = null;
          document.documentElement.style.cursor = "default";
          this.drow();
        }

        if (!this.clickArrow) {
          this.unselectArrow();
        }


      });
    this.vis.call(this.zoom).on("dblclick.zoom", null);

    this.conteiner = this.vis.append("g").attr("id", "wrap");
    let g = d3
      .select("#graph")
      .append("div")
      .datum({})
      .attr("class", "coco-bpm-d3-zoom-wrap");
    let g1 = g;
    let icon1 = g1
    .append("svg")
    .attr("width", "14")
    .attr("height", "14")
    .attr("viewBox", "0 0 14 14")
    .on("click", () => {
      this.undo();
    })
    .append("g")
    .attr("fill", "#2196F3")
    .attr("transform", "translate(-384.000000, -144.000000)")
    .attr("fill-rule", "nonzero");

    icon1
      .append("path")
      .attr(
        "d",
        "M391.5,157 C389.014719,157 387,154.985281 387,152.5 C387,152.331018 387.009314,152.164211 387.027464,152 L385.018945,152 C385.00639,152.165053 385,152.33178 385,152.5 C385,156.089851 387.910149,159 391.5,159 C395.089851,159 398,156.089851 398,152.5 C398,149.078368 395.356198,146.27423 392,146.018945 L392,148.027464 C394.249941,148.27615 396,150.183701 396,152.5 C396,154.985281 393.985281,157 391.5,157 L391.5,157 Z M388,147 L392,150 L392,144 L388,147 L388,147 Z M388,147"
      );

    let icon = g1
      .append("svg")
      .attr("width", "14")
      .attr("height", "14")
      .attr("viewBox", "0 0 14 14")
      .append("g")
      .attr("fill", "#2196F3")
      .attr("fill-rule", "nonzero");
    icon
      .append("path")
      .attr(
        "d",
        "M12.316 9.677a5.677 5.677 0 0 0 0-8.019 5.676 5.676 0 0 0-8.019 0 5.56 5.56 0 0 0-.853 6.843s.094.158-.033.284L.518 11.678c-.575.576-.712 1.381-.202 1.892l.088.088c.51.51 1.316.373 1.892-.202l2.886-2.887c.133-.133.29-.04.29-.04a5.56 5.56 0 0 0 6.844-.852zM5.344 8.63a4.194 4.194 0 0 1 0-5.925 4.194 4.194 0 0 1 5.925 0 4.194 4.194 0 0 1 0 5.925 4.195 4.195 0 0 1-5.925 0z"
      );
    icon
      .append("path")
      .attr(
        "d",
        "M5.706 5.331a.584.584 0 0 1-.539-.813A3.688 3.688 0 0 1 9.996 2.56a.585.585 0 0 1-.457 1.078 2.516 2.516 0 0 0-3.294 1.336.585.585 0 0 1-.54.357z"
      );
    let g2 = g1
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
      .on("input", () => {
        this.zoom.scaleTo(this.vis, d3.select("#range").property("value"));
        this.rangeWidth();
      });

    g2.append("div")
      .datum({})
      .attr("class", "coco-bpm-line-range")
      .attr("id", "lineZoomRange");

    document.getElementById("graph").addEventListener("mousemove", e => {
      let dummyX = e.offsetX;
      let dummyY = e.offsetY;

      if (this.startDrowLine && this.data[this.startDrowLine]) {
        this.removeAll();
        d3.selectAll("#drowLine").remove();
        let x, y;
        if (
          document.getElementById("wrap").getAttribute("transform") === null
        ) {
          x = e.offsetX;
          y = e.offsetY;
        } else {
          x = (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
          y = (e.offsetY - this.zoomTrans.y) / this.zoomTrans.k;
        }

        var d = {
          source: {
            x: this.data[this.startDrowLine].x + 20,
            y: this.data[this.startDrowLine].y
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

        this.conteiner
          .append("path")
          .attr("class", "path")
          .attr("id", "drowLine")
          .attr("d", link(d))
          .style("fill", "none")
          .style("stroke", "#555")
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 1.5);

        this.conteiner
          .append("polyline")
          .attr(
            "points",
            d.source.x +
            "," +
            d.source.y +
            " " +
            (d.source.x + d.target.x) / 2 +
            "," +
            (d.source.y + d.target.y) / 2 +
            " " +
            d.target.x +
            "," +
            d.target.y
          )

          .style("fill", "none");

        this.drow();
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
  }


  menuInit() {
    this.types.forEach(type => {
      if (document.getElementById(type)) {
        document.getElementById(type).addEventListener(
          "dragstart",
          ev => {
            this.dragType = type;
            if (this.isStart && type === "Start") {
              event.preventDefault();
            }
          },
          false
        );
      }
    });

    document.addEventListener("dragover", function (event) {
      event.preventDefault();
    });
    document.getElementById("graph").addEventListener(
      "drop",
      ev => {
        let x, y;
        if (
          document.getElementById("wrap").getAttribute("transform") === null
        ) {
          x = ev.offsetX;
          y = ev.offsetY;
        } else {
          x = (ev.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
          y = (ev.offsetY - this.zoomTrans.y) / this.zoomTrans.k;
        }
        ev.preventDefault();
        let model = new ComponentClass();
        model.x = x;
        model.y = y;
        model.objectClass = this.dragType;
        model.modelId = this.modelId;
        model.userId = this.user._id;
        model.id = this.dragType + (this.data.filter(value => value.objectClass === this.dragType).length + 1);
        let p1 = new ParameterClass("Cost", "Cost", "0", 1);
        let p2 = new ParameterClass("Rate", "Rate", "0", 1);
        let p3 = new ParameterClass("Price", "Price", "0", 1);
        model.parameters = [p1, p2, p3];
        this.componentService.create(model).subscribe((data) => {
          this.saverComponent.push(JSON.parse(JSON.stringify( this.data )));
          this.data.push(data);
          this.removeAll();
          this.drow();
          this.dragType = null;
        });
      },
      false
    );
  }

  drow() {
    this.drowLines();

    console.log(2323)

    this.data.forEach((element, index, arr) => {
      switch (element.objectClass) {
        case "Input":
        case "Output":
        case "InputOutput":
        case "Process":
        case "Board":
          let d, dx, dy, color;
          dx = element.x - 10;
          dy = element.y - 8;
          color = this.colors[element.objectClass];
          let count = 0;

          element.parameters.forEach((param, index) => {
            if (param.showOnDiagram) {

              count++;
            }
          });

          let h = (60 + (count > 3 ? ((count - 3) * 16 + (count * 5)) : 0));
          let selected = (this.selected !== null && (+this.selected === +index)) ? "stroke-width:1;stroke:rgb(0,0,0)" : "";
          let g = this.conteiner.append("g").attr("class", "g");
          g.append("rect")
            .attr("class", "nodes")
            .attr("id", index)
            .attr("style", selected)
            .attr("fill", color)
            .attr("x", element.x - 5)
            .attr("y", element.y - 10)
            .attr("width", 160)
            .attr("height", h)
            .attr("rx", 10)
            .attr("ry", 10)
            .on("mouseover", (q, w, e) => {
              d3.event.stopPropagation();
              if (this.activeArrow) {
                document.documentElement.style.cursor = "default";
                d3.select(document.getElementById(e[0].id + "main")).style(
                  "fill",
                  "#84bd96"
                );
              }
            })
            .on("mouseout", (q, w, e) => {
              d3.event.stopPropagation();
              d3.select(document.getElementById(e[0].id + "main")).style(
                "fill",
                "#2196f3"
              );
              if (this.activeArrow) {
                document.documentElement.style.cursor = "not-allowed";
              }
            })
            .on("click", (d, i, s) => {
              d3.event.stopPropagation();
              if (this.activeArrow)
                this.shepClick(s[0].id);
            })
            .on("dblclick", (d, i, s) => {
              this.selectedModal = s[0].id;
              let name = this.data[this.selectedModal].objectClass + (this.data[this.selectedModal].parameters.length + 1);
              this.newParametr = new ParameterClass("Par" + (this.data.filter(value => value.objectClass === this.data[this.selectedModal].objectClass).length + 1), "", "0")
              this.showSide = true;
              this.selected = s[0].id;
              this.removeAll();
              this.drow();
              this.activeArrow = null;
              this.startDrowLine = null;
            });

          g.append("text")
            .attr("x", element.x - 5)
            .attr("y", element.y - 13)
            .text((element.name || element.id));

          g.append("text")
            .attr("id", index + "-remove")
            .attr("x", element.x + 140)
            .attr("y", element.y - 13)
            .text("X")
            .on("click", (d, i, s) => {
              d3.event.stopPropagation();
              let id = s[0].id.split("-")[0];

              this.componentService.delete(this.data[id]).subscribe((data) => {
                this.data.splice(id, 1);

                this.clear();
              });
            });

          g.append("text")
            .attr("id", index + "-arrow")
            .attr("x", element.x + 135)
            .attr("y", element.y + 5)
            .text("=>")
            .on("click", (d, i, s) => {
              d3.event.stopPropagation();
              let id = s[0].id.split("-")[0];
              this.shepClick(id);
            });

          g.append("text")
            .attr("id", index + "-drag")
            .attr("x", element.x)
            .attr("y", element.y + 5)
            .text("|||")
            .call(
              d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            );

          let countIndex = 0;
          let parameters = element.parameters.slice();
          parameters.forEach((param, paramIndex) => {
            if (param.showOnDiagram) {
              let py = element.y + 70 - 50 - (countIndex * 20) + (count >= 3 ? ((count - 3) * 16 + (count * 7)) : (count > 1) ? (count * 4) : -9);
              switch (param.controlType) {
                case "Value":
                case "":
                  let v = param.value;

                  if (v && v.charAt(0) === "=") {
                    let spcaSpit = v.split(" ");

                    spcaSpit.forEach((element, index) => {
                      let earr = element.split(".");
                      if (earr.length == 3) {
                          spcaSpit[index] = this.formulaSaver[element];
                      }
                    });
                    spcaSpit.shift();
                    try {
                      this.formulaSaver[this.modelsKeys[element.modelId] + "." + element.id + "." + param.id] = this.notEval(spcaSpit.join(''));
                    } catch {
                      this.calc();
                    }

                    g.append("text")
                      .attr("x", element.x + 20)
                      .attr("y", py)
                      .text((param.name || param.id) + " - " + (parseFloat(this.formulaSaver[this.modelsKeys[element.modelId] + "." + element.id + "." + param.id] || "").toFixed(1)));

                  } else {
                    g.append("text")
                      .attr("x", element.x + 20)
                      .attr("y", py)
                      .text((param.name || param.id) + " - " + parseFloat(v || "").toFixed(1));
                  }

                  break;
                case "Input":
                  let gI = g.append("g");
                  gI.append("text")
                    .attr("x", element.x + 15)
                    .attr("y", py)
                    .text((param.name || param.id) + " - ");
                  let l = (param.name || param.id).length;
                  gI.append("foreignObject")
                    .attr("x", element.x + (l < 7 ? l * 9 : l * 7) + 15)
                    .attr("y", py - 13)
                    .attr("width", 50)
                    .attr("height", 16)
                    .attr("class", "foreignObject-input-bmp")
                    .html((d) => {
                      return `<input id="${index}-${paramIndex}" type="number" value="${param.value}" />`
                    });
                  let inputElement: any = document.getElementById(`${index}-${paramIndex}`);
                  let self = this;
                  inputElement.onchange = function (e) {
                    setTimeout(() => {
                      self.dragSelected = index;
                      self.data[index].parameters[paramIndex].value = inputElement.value.toString();
                      self.txtQueryChanged.next({
                        value: inputElement.value,
                        selected: self.dragSelected
                      });
                    }, 500);
                  };
                  break;
                case "Slider":
                  let gR = g.append("g");
                  // gR.append("text")
                  //   .attr("x", element.x)
                  //   .attr("y", py)
                  //   .text((param.name || param.id) + " - ");
                   l = (param.name || param.id).length;
                   console.log(param)
                  gR.append("foreignObject")
                    .attr("x", element.x + ((param.name || param.id).length) + 5)
                    .attr("y", py - 10)
                    .attr("width", 120)
                    .attr("height", 16)
                    .attr("class", "foreignObject-input-bmp")
                    .html((d) => {
                      return `
                      <div style="display:flex;align-items: center;">
                      <input id="${index}-${paramIndex}-left" class="range-button" type="button" value="<">
                      </input>
                      <input id="${index}-${paramIndex}" type="range" 
                      min="${+param.sliderMin - 1}" max="${+param.sliderMax + 1}" 
                      step="${param.sliderStep}" value="${param.value}" />
                      <input id="${index}-${paramIndex}-right" class="range-button" type="button" value=">">
                      </input>
                      </div>
                
                      `
                    });
                  gR.append("text")
                    .attr("font-size", "10px")
                    .attr("x", element.x + 50)
                    .attr("y", py - 6)
                    .text((param.name || param.id) + "-" + parseFloat(param.value || "").toFixed(1));

                  self = this;
                  let rangeElement: any = document.getElementById(`${index}-${paramIndex}`);
                  rangeElement.onchange =  (e) => {
                    setTimeout(() => {
                      this.dragSelected = index;
                      this.data[index].parameters[paramIndex].value = rangeElement.value.toString();
                      this.txtQueryChanged.next({
                        value: rangeElement.value,
                        selected: this.dragSelected
                      });
                    }, 150);
                  };

                  let rangeElementleft: any = document.getElementById(`${index}-${paramIndex}-left`);
                  rangeElementleft.onclick = function (e) {
                    
                    setTimeout(() => {
                    let value = +rangeElement.value - +param.sliderStep;
                      if (value >= param.sliderMin) {
                        self.dragSelected = index;
                        self.data[index].parameters[paramIndex].value = value.toString();
                        self.txtQueryChanged.next({
                          value: value,
                          selected: self.dragSelected
                        });
                      }
                    }, 20);
                  };

                  let rangeElementright: any = document.getElementById(`${index}-${paramIndex}-right`);
                  rangeElementright.onclick = function (e) {
                    setTimeout(() => {
                      let value = +rangeElement.value + +param.sliderStep;
                      if (value <= param.sliderMax) {
                        self.dragSelected = index;
                        self.data[index].parameters[paramIndex].value = value.toString();
                        self.txtQueryChanged.next({
                          value: value,
                          selected: self.dragSelected
                        });
                      }
                    }, 20);
                  };
                  break;
                default:
                  break;
              }

              countIndex++;
            }
          });

          break;

        default:
          break;
      }
      if (this.marker)
        this.marker
          .append("path")
          .attr("class", "path")
          .attr("d", "M 0 0 12 6 0 12 3 6")
          .style("fill", "#999");
      let self = this;

      function dragstarted(d) {
        // d3.select(this)
        //   .classed("active", true);
        self.start_x = +d3.event.x;
        self.start_y = +d3.event.y;
      }

      function dragged(d) {
        let current_scale, current_scale_string;
        let transform = document.getElementById('wrap')
        if (transform.getAttribute("transform") === null) {
          current_scale = 1;
        } else {
          current_scale_string = transform.getAttribute("transform").split(" ")[1];
          current_scale = +current_scale_string.substring(
            6,
            current_scale_string.length - 1
          );
        }

        if (!self.zoomTrans) {
          self.zoomTrans = {
            x: 0,
            y: 0,
            k: 1,
          };
        }

        self.dragSelected = this.getAttribute("id").split("-")[0];
        self.data[self.dragSelected].x =
          (d3.event.x - self.zoomTrans.x) / self.zoomTrans.k;
        // self.start_x + (d3.event.x - self.start_x) / current_scale;
        // (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
        let scale = 30;
        if (self.zoomTrans.k < 0.33) {
          scale = 50;
        }
        self.data[self.dragSelected].y = (
          (d3.event.y - self.zoomTrans.y) / self.zoomTrans.k - (scale / self.zoomTrans.k)) - 25;
        // self.start_y + (d3.event.y - self.start_y) / current_scale;
        self.removeAll();
        self.drow();


      }

      function dragended(d) {
        d3.select(this).classed("active", false);
        self.txtQueryChanged.next({
          value: self.zoomTrans,
          selected: self.dragSelected,
          drag: 1
        });
      }
    });
  }

  formulaSaver = {};
  formulaSearchRun;
  formulaData;

  formulaSearch(element) {
    let arr = element.split(".");
    if (!this.formulaSearchRun) {
      this.formulaSearchRun = true;
      this.componentService.getAllByUserId(this.user._id).subscribe((data: any) => {
        this.formulaData = data;
        this.formulaDataSearch(data, arr, element);
      });
    } else if (this.formulaData) {
      this.formulaDataSearch(this.formulaData, arr, element);
    }
  }

  formulaDataSearch(data, arr, element) {
    data.forEach(comp => {
      comp.parameters.forEach(param => {
        if (this.modelsKeys[comp.modelId] === arr[0] && comp.id === arr[1] && param.id === arr[2]) {
          this.formulaSaver[element] = +param.value;
        }
      });
    });
    setTimeout(() => {
      this.clear();
    }, 200);
  }

  clickArrow;

  selectedLine;
  selectedLineId;
  selectedLineFrom;
  selectedLineTo;

  drowLines() {
    this.data.forEach((value, index, arr) => {
      value.selected.forEach(item => {
        let to = this.searchById(item, this.data);
        let from = this.data[index];
        if (to) {
          let x = +from.x;
          let y = +from.y;
          let x2 = +to.x;
          let y2 = +to.y;
          let minX = Math.abs(x - x2);
          let minY = Math.abs(y - y2);
          if (minX > minY) {
            if (+x < +x2) {
              x += 25;
              x2 -= 25;
            } else {
              x -= 25;
              x2 += 25;
            }
          } else {
            if (+y < +y2) {
              y += 25;
              y2 -= 25;
            } else {
              y -= 25;
              y2 += 25;
            }
          }

          var d = {
            source: {
              x: x + 30,
              y: y + 15
            },
            target: {
              x: x2 + 30,
              y: y2 + 15
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

          this.conteiner
            .append("path")
            .attr("d", link(d))
            .attr("id", from.id + to.id)
            .attr("class", "path")
            .style("fill", "none")
            .style("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .attr("marker-mid", "url(#triangle)");

          this.conteiner
            .append("path")
            .attr("class", "path")
            .attr("d", link(d))
            .style("fill", "none")
            .style("stroke", "#555")
            .attr("stroke-opacity", 0)
            .attr("stroke-width", 15)
            .on("click", () => {

              this.selected = undefined;

              this.removeAll();
              this.drow();
              // if (this.selectedLine) {
              //   this.unselectArrow();
              // }
              this.clickArrow = true;

              this.selectedLine = from.id + to.id;
              this.selectedLineId = index;
              this.selectedLineFrom = from;
              this.selectedLineTo = to;

              d3.select(document.getElementById(from.id + to.id)).style(
                "stroke-width",
                2.5
              );
              d3.select(document.getElementById(from.id + to.id)).style(
                "stroke",
                "black"
              );

            });

          this.conteiner
            .append("polyline")
            .attr(
              "points",
              d.source.x +
              "," +
              d.source.y +
              " " +
              (d.source.x + d.target.x) / 2 +
              "," +
              (d.source.y + d.target.y) / 2 +
              " " +
              d.target.x +
              "," +
              d.target.y
            )
            .style("fill", "none")
            .attr("marker-mid", "url(#triangle)");
        }

      });
    });
  }

  shepClick(s) {
    this.selected = s;
    let id = this.selected;
    if (!this.activeArrow) {
      this.activeArrow = id;
      this.startDrowLine = id;
    } else {
      let count = 0;
      this.data[id].selected.forEach((element, index) => {
        if (this.data[this.activeArrow]._id === element) {
          count++;
        }
      });
      this.data[this.activeArrow].selected.forEach((element, index) => {
        if (this.data[id]._id === element) {
          count++;
        }
      });
      if (count) {
        this.activeArrow = null;
        this.startDrowLine = null;
        this.removeAll();
        this.drowLines();
        this.drow();
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
  }

  removeAll() {
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

  }
  searchById(id, arr) {
    if (arr) {
      let result = arr.find(element => element._id === id);
      return result;
    }
  }
  uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  txtQuery: string; // bind this to input with ngModel
  txtQueryChanged: Subject<any> = new Subject<any>();
  onFieldChange(query: string) {
    this.txtQueryChanged.next({
      value: query,
      selected: this.selectedModal
    });
  }

  newParametr = new ParameterClass("", "", "0", "");

  addParametr() {
    this.saverComponent.push(JSON.parse(JSON.stringify( this.data )));
    this.data[this.selectedModal].parameters.unshift(this.newParametr);
    this.newParametr = new ParameterClass("", "", "0", "");
    this.txtQueryChanged.next({
      value: this.newParametr,
      selected: this.selectedModal
    });
  }

  onKeyDown(e) {
    let re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;
    if (!re.test(e.key)) {
      return false;
    }
  }

  notEval(fn) {
    return new Function('return ' + fn)();
  }


  rangeWidth(flag?) {
    if (flag) {
      setTimeout(() => {
        document.getElementById("lineZoomRange").style.width = 50 + "%";
      }, 500);
    } else {
      let input = document.getElementById("range");
      let width;
      width = (input["value"] / 2) * 100;
      document.getElementById("lineZoomRange").style.width = width + "%";
    }
  }

  unselectArrow() {
    if (this.selectedLine) {
      this.data.forEach((element, index) => {
        d3.select(document.getElementById(this.selectedLine)).style(
          "stroke-width",
          1.5
        );
        d3.select(document.getElementById(this.selectedLine)).style(
          "stroke",
          "#555"
        );
      });
      this.selectedLine = null;
      this.clickArrow = false;
    }
  }
}
