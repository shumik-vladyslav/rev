import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { ComponentService } from '../shared/component.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogParametersComponent } from '../shared/components/dialog-parameters/dialog-parameters.component';
import { ComponentClass } from '../shared/model';
import { ActivatedRoute } from '@angular/router';
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/internal/operators";
declare var d3;
@Component({
  selector: 'app-model-main',
  templateUrl: './model-main.component.html',
  styleUrls: ['./model-main.component.scss']
})
export class ModelMainComponent implements OnInit {
  types = [
    "Input",
    "Output",
    "InputOutput",
    "Process",
    "Board"
  ]
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

  constructor(
    private modelService: ModelService,
    private componentService: ComponentService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) { 
    this.modelId = this.activatedRoute.snapshot.paramMap.get('id');

    this.componentService.getAllById(this.modelId).subscribe((data: any) => {
      console.log(data)
      this.data = data;
      this.drow();
    });

    this.txtQueryChanged
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(model => {
      this.componentService.update(this.data[this.selectedModal]).subscribe((data) => {});
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogParametersComponent, {
      width: '450px',
      data: 'Hi dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'The dialog was closed');
    });
  }

  ngOnInit() {
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
        // if (!this.readOnly) {
        //   this.slider.property("value", currentTransform.k);
        //   this.rangeWidth();
        // } else {
        //   if (this.zoomTrans.k !== this.zoomTransHeader.k) {
        //     this.rangeWidthHeader.emit(currentTransform);
        //   }
        // }

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

    document.getElementById("graph").addEventListener("mousemove", e => {
      let dummyX = e.offsetX;
      let dummyY = e.offsetY;

      if (this.startDrowLine) {
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
            // if ((this.isStart && type === 'Start') || (this.isStop && type === 'Stop')) {
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
        switch (this.dragType) {
          // case 'Stop':
          //   this.isStop = true
          //   break;
          case "Start":
            this.isStart = true;
            break;
          default:
            break;
        }

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
        console.log(model)
        model.x = x;
        model.y = y;
        model.objectClass = this.dragType;
        model.modelId = this.modelId;
        this.componentService.create(model).subscribe((data) => {
          console.log(1, data);
          this.data.push(data)
    
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
          let d, dx, dy, color;
          dx = element.x - 10;
          dy = element.y - 8;
          color = "#3cd57c";
          let g = this.conteiner.append("g");
          g.append("svg:circle")
            .attr("class", "nodes")
            .attr("id", index)
            .attr("cx", element.x)
            .attr("cy", element.y)
            .attr("r", "30px")
            .attr("fill", color)
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
              // if (this.instanceId || this.workflowFlag) {
              //   this.shepClick(s);
              // }
              this.selectedModal = s[0].id;
              this.showSide = !this.showSide;
              console.log(2)
            })
            .call(
              d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            );

          break;

        case "Process":
        case "Board":
          dx = element.x - 10;
          dy = element.y - 8;
          color = "#3cd57c";
          let gr = this.conteiner.append("g");
          gr.append("rect")
            .attr("id", index)
            .attr("class", "nodes coco-bpm-rect-style")
            .attr("x", element.x - 25)
            .attr("y", element.y - 30)
            .attr("width", 60)
            .attr("height", 60)
            .attr("rx", 10)
            .attr("ry", 10)


            // gr.append("rect")
            //   .attr("id", index)
            //   .attr("class", "nodes coco-bpm-rect-fun")
            //   .attr("x", element.x - 25)
            //   .attr("y", element.y - 30)
            //   .attr("width", 160)
            //   .attr("height", 60)
            //   .attr("rx", 10)
            //   .attr("ry", 10)
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
              // if (this.instanceId || this.workflowFlag) {
              //   this.shepClick(s);
              // }
            })
            .call(
              d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            );
          break;

        default:
          break;
      }
      // this.generateDownloadJsonUri();
      if (this.marker)
        this.marker
          .append("path")
          .attr("class", "path")
          .attr("d", "M 0 0 12 6 0 12 3 6")
          .style("fill", "#999");
      let self = this;

      function dragstarted(d) {
        d3.select(this)
          .raise()
          .classed("active", true);
        self.start_x = +d3.event.x;
        self.start_y = +d3.event.y;
      }

      function dragged(d) {
        let current_scale, current_scale_string;
        if (this.getAttribute("transform") === null) {
          current_scale = 1;
        } else {
          current_scale_string = this.getAttribute("transform").split(" ")[1];
          current_scale = +current_scale_string.substring(
            6,
            current_scale_string.length - 1
          );
        }

        self.data[this.getAttribute("id")].x =
          self.start_x + (d3.event.x - self.start_x) / current_scale;
        self.data[this.getAttribute("id")].y =
          self.start_y + (d3.event.y - self.start_y) / current_scale;
        self.componentService.update(self.data[this.getAttribute("id")]).subscribe((data) => {
        })
        self.removeAll();
        self.drow();
        // self.data[this.getAttribute("id")].x = d3.event.x - 100;
        // self.data[this.getAttribute("id")].y = d3.event.y - 250;
        // self.removeAll();
        // self.drow();
        // self.menuOptions.hide = true;
      }

      function dragended(d) {
        d3.select(this).classed("active", false);
      }
    });
  }

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
              y: y
            },
            target: {
              x: x2,
              y: y2
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
              // if (!this.readOnly) {
              //   if (this.selectedLine) {
              //     this.unselectArrow();
              //   }
              //   this.clickArrow = true;

              //   this.selectedLine = from.id + to.id;
              //   this.selectedLineId = value.id;
              //   this.selectedLineFrom = from;
              //   this.selectedLineTo = to;

              //   d3.select(document.getElementById(from.id + to.id)).style(
              //     "stroke-width",
              //     2.5
              //   );
              //   d3.select(document.getElementById(from.id + to.id)).style(
              //     "stroke",
              //     "black"
              //   );
              // }
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
      if (id !== this.activeArrow){
        this.data[this.activeArrow].selected.push(this.data[id]._id);
        this.componentService.update(this.data[this.activeArrow]).subscribe((data) => {})
      }
        console.log(this.data)
      this.activeArrow = null;
      this.startDrowLine = null;
      
      this.removeAll();
      this.drow();
      this.drowLines();
    }
  }

  removeAll() {
    d3.selectAll("line").remove();
    d3.selectAll("polyline").remove();
    d3.selectAll("rect").remove();
    d3.selectAll("circle").remove();

    // d3.selectAll("g").remove();

    d3.selectAll(".path").remove();
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
  onFieldChange(query:string){
    this.txtQueryChanged.next(query);
  }
}
