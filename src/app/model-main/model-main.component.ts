import { Component, OnInit, OnDestroy,  HostListener, AfterViewInit } from '@angular/core';
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
        console.log(data)
        this.modelList = data;
        this.componentService.getAllById(this.modelId).subscribe((data: any) => {
          this.data = data;
        console.log(data)

          this.calc();
          setTimeout(() => {
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
    // }, 5000)

    this.txtQueryChanged
      .pipe(debounceTime(1800), distinctUntilChanged())
      .subscribe(model => {
        console.log(model)
        let id = this.data[model.selected];
        if (id) {
          this.componentService.update(id).subscribe((data) => {
          });

          if (!model.drag){
            this.formulaSaver = {};
            this.calc();
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
    console.log(5)
    this.data.forEach((comp) => {
      comp.parameters.forEach(element => {
        if (element.value) {
          let v = element.value
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
    })

  }

  @HostListener("document:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
      if (
        (event.keyCode === 46 || event.keyCode === 8) && this.selected
      ) {
        this.componentService.delete(this.data[this.selected]).subscribe((data) => {
          this.data.splice(this.selected, 1);
      
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
          this.drow();

        })
      }

      if( (event.keyCode === 46 || event.keyCode === 8) && (this.selectedLineId || this.selectedLineId === 0) ){
          this.selectedLineFrom.selected.forEach((id, index) => {
            if(id === this.selectedLineTo._id){
              this.data.forEach((element, i) => {
              if(element._id === this.selectedLineFrom._id ){
                 this.data[i].selected.splice(index, 1)
            
                  this.txtQueryChanged.next({
                    value: this.selectedLine,
                    selected: i
                  })
                }
      
              })

            }
          });
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
          this.drow();




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
        modelId:this.modelId
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

  ngOnDestroy(){
    clearInterval(this.setInterval);
  }

  ngAfterViewInit(){
    this.init();
  }

  init() {

    this.menuInit();

    this.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", () => {
        this.zoomTrans = d3.event.transform
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
    let g = d3
      .select("#graph")
      .append("div")
      .datum({})
      .attr("class", "coco-bpm-d3-zoom-wrap");
    let g1 = g;
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
            x: this.data[this.startDrowLine].x,
            y: this.data[this.startDrowLine].y - 50
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
        let model = new ComponentClass()
        model.x = x;
        model.y = y;
        model.objectClass = this.dragType;
        model.modelId = this.modelId;
        model.id = this.dragType + (this.data.filter(value => value.objectClass === this.dragType).length + 1);
        let p1 = new ParameterClass("Price" + model.id, "Price", "0", 1)
        let p2 = new ParameterClass("Speed" + model.id, "Speed", "0", 1)
        let p3 = new ParameterClass("CostPrice" + model.id, "CostPrice", "0", 1)
        model.parameters = [p1, p2, p3]
        this.componentService.create(model).subscribe((data) => {
          this.data.push(data);
          this.removeAll();
          this.drow();
          this.dragType = null;
        })

      },
      false
    );
  }

  drow() {
    this.drowLines();

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


          let selected = +this.selected === +index ? "stroke-width:1;stroke:rgb(0,0,0)" : "";
          let g = this.conteiner.append("g").attr("class", "g");
          g.append("rect")
            .attr("class", "nodes")
            .attr("id", index)
            .attr("style", selected)
            .attr("fill", color)
            .attr("x", element.x - 25)
            .attr("y", element.y - 80)
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
              this.shepClick(s);
            })
            .on("dblclick", (d, i, s) => {
              this.selectedModal = s[0].id;
              this.newParametr = new ParameterClass("par" + (this.data[this.selectedModal].parameters.length + 1), "" , "0")
              this.showSide = !this.showSide;
              this.removeAll();
              this.drow();
              this.activeArrow = null;
              this.startDrowLine = null;
              this.selected = null;
            })
            .call(
              d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            );

            g.append("text")
            .attr("x", element.x + 40)
            .attr("y", element.y - 90)
            .text((element.name || element.id));
          let countIndex = 0;
          let parameters = element.parameters.slice();
          parameters.forEach((param, paramIndex) => {
            if (param.showOnDiagram) {
              let py = element.y - 50 - (countIndex * 20) + (count >= 3 ? ((count - 3) * 16 + (count * 7)) : (count > 1) ? (count * 4) : -9);
              switch (param.controlType) {
                case "Value":
                case "":
                  let v = param.value;

                  if (v && v.charAt(0) === "=") {
                    let spcaSpit = v.split(" ");

                    spcaSpit.forEach((element, index) => {
                      let earr = element.split(".");
                      if (earr.length == 3) {
                        if (this.formulaSaver[earr[2]]) {
                          spcaSpit[index] = this.formulaSaver[earr[2]];
                        } else {
                          spcaSpit[index] = this.formulaSaver[element];
                        }
                      }
                    });
                    spcaSpit.shift();
                    try {
                      this.formulaSaver[param.id] = this.notEval(spcaSpit.join(''));
                    } catch {
                      this.calc();
                    }

                    g.append("text")
                      .attr("x", element.x)
                      .attr("y", py)
                      .text((param.name || param.id) + " - " + (this.formulaSaver[param.id] || ""));

                  } else {
                    g.append("text")
                      .attr("x", element.x)
                      .attr("y", py)
                      .text((param.name || param.id) + " - " + (v || ""));
                  }

                  break;
                case "Input":
                  let gI = g.append("g");
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
                    .html((d) => {
                      return `<input id="${index}-${paramIndex}" type="number" value="${param.value}" />`
                    });
                  let inputElement: any = document.getElementById(`${index}-${paramIndex}`);
                  let self = this;
                  inputElement.onkeypress = function (e) {
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
                  gR.append("foreignObject")
                    .attr("x", element.x + ((param.name || param.id).length * 10) - 50)
                    .attr("y", py - 15)
                    .attr("width", 120)
                    .attr("height", 16)
                    .attr("class", "foreignObject-input-bmp")
                    .html((d) => {
                      return `
                      <div style="display:flex;align-items: center;">
                      <input id="${index}-${paramIndex}-left" class="range-button" type="button" value="<">
                      </input>
                      <input id="${index}-${paramIndex}" type="range" 
                      min="${param.sliderMin}" max="${param.sliderMax}" 
                      step="${param.Step}" value="${param.value}" />
                      <input id="${index}-${paramIndex}-right" class="range-button" type="button" value=">">
                      </input>
                      </div>
                
                      `
                    });
                  gR.append("text")
                    .attr("font-size", "10px")
                    .attr("x", element.x+40)
                    .attr("y", py-10)
                    .text((param.name || param.id) + "-" + (param.value));
                    
                  self = this;
                  let rangeElement: any = document.getElementById(`${index}-${paramIndex}`);
                  rangeElement.onchange = function (e) {
                    setTimeout(() => {
                      self.dragSelected = index;
                      self.data[index].parameters[paramIndex].value = rangeElement.value.toString();
                      self.txtQueryChanged.next({
                        value: rangeElement.value,
                        selected: self.dragSelected
                      });
                    }, 500);
                  };

                  let rangeElementleft: any = document.getElementById(`${index}-${paramIndex}-left`);
                  rangeElementleft.onclick = function (e) {
                    setTimeout(() => {
                      let value = +rangeElement.value - +param.sliderStep;
                      if(value > param.sliderMin){
                        self.dragSelected = index;
                        self.data[index].parameters[paramIndex].value = value.toString();
                        self.txtQueryChanged.next({
                          value: value,
                          selected: self.dragSelected
                        });
                      }
                    }, 200);
                  };

                  let rangeElementright: any = document.getElementById(`${index}-${paramIndex}-right`);
                  rangeElementright.onclick = function (e) {
                    setTimeout(() => {
                      let value = +rangeElement.value + +param.sliderStep;
                      console.log(value)
                      if(value < param.sliderMax){
                        self.dragSelected = index;
                        self.data[index].parameters[paramIndex].value = value.toString();
                        self.txtQueryChanged.next({
                          value: value,
                          selected: self.dragSelected
                        });
                      }
                    }, 200);
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
          }

        }

        self.dragSelected = this.getAttribute("id");
        self.data[this.getAttribute("id")].x =
          (d3.event.x - self.zoomTrans.x) / self.zoomTrans.k;
        // self.start_x + (d3.event.x - self.start_x) / current_scale;
        // (e.offsetX - this.zoomTrans.x) / this.zoomTrans.k;
        let scale = 30;
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
          drag : 1
        });

      }

      function dragended(d) {
        d3.select(this).classed("active", false);
      }
    });
  }

  formulaSaver = {};

  formulaSearch(element) {
    let arr = element.split(".");
    this.modelList.forEach(model => {
      if (model.id === arr[0]) {
        this.componentService.getAllById(model._id).subscribe((data: any) => {
          data.forEach(comp => {
            comp.parameters.forEach(param => {
              if (param.id === arr[2]) {
                this.formulaSaver[element] = param.value;
              }
            });
          });

        });

      }
    });
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

      })
    })
  }

  shepClick(s) {
    this.selected = s[0].id;
    let id = this.selected;
      if (!this.activeArrow) {
          this.activeArrow = id;
          this.startDrowLine = id;
      } else {
        if(this.data[id].selected[0] && 
          this.data[id].selected[0] === this.data[this.activeArrow]._id){
          return;
        }
        let count = 0 ;
        this.data.forEach((element, index) => {
          if(this.data[this.activeArrow].selected[0] &&
            this.data[this.activeArrow].selected[0] === this.data[index]._id){
              count++;
         }
        });
        if(count){
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

  newParametr = new ParameterClass("","", "0","");

  addParametr() {
    this.data[this.selectedModal].parameters.unshift(this.newParametr);
    this.newParametr = new ParameterClass("", "", "0", "");
    this.txtQueryChanged.next({
      value: this.newParametr,
      selected: this.selectedModal
    });
  }

  onKeyDown(e) {
    let re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;
    if (!re.test(e.key)){
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
}
