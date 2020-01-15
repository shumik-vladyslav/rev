import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogCreateModelComponent } from '../shared/components/dialog-create-model/dialog-create-model.component';
import { ModelClass, ComponentClass } from '../shared/model';
import { ComponentService } from '../shared/component.service';
import { element } from '@angular/core/src/render3/instructions';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
  
})
export class ModelListComponent implements OnInit {
  user;
  model = new ModelClass();
  data: ModelClass[];
  selected;
  constructor(
    private modelService: ModelService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private componentService: ComponentService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(data => {
      this.user = data.user;
      console.log(data, this.user._id, 11);
      this.getData();
    });

  }

  getData() {
    this.modelService.getAllById(this.user._id).subscribe((data: any) => {
      console.log(data)
      this.data = data;
      this.data.forEach((element) => {
        this.componentService.getAllById(element._id).subscribe((obj: any) => {
          this.listObjects = [...obj, ...this.listObjects];
          obj.forEach(p => {
            this.listParams = [...p.parameters, ...this.listParams];
          });
        });
      })
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateModelComponent, {
      width: '450px',
      data: {
        id: 'mod' + (this.data.length + 1),
        label: 'Create Model',
        dataArr: this.data
      }
    });
    dialogRef.afterClosed().subscribe(model => {
      if (model) {
        model.userId = this.user._id;
        model.ver = "1.0";
        
        this.modelService.create(model).subscribe((data: any) => {
          this.router.navigate(['model/' + data._id]);
        });
      }
    });
  }

  remove(item) {
    const dialogRef = this.dialog.open(DialogCreateModelComponent, {
      width: '450px',
      data: {
        label: 'You delete the model! Are you sure?',
        deleteMode: true
      }
    });
    dialogRef.afterClosed().subscribe(model => {
      if (model) {
        this.modelService.remove(item._id).subscribe((data) => {
          this.getData();
        });
      }
    });

  }

  edit(item) {
    let id = item._id;
    const dialogRef = this.dialog.open(DialogCreateModelComponent, {
      width: '450px',
      data: {
        id: item.id,
        name: item.name,
        description: item.description,
        label: 'Edit Model',
        dataArr: this.data
      }
    });
    dialogRef.afterClosed().subscribe(model => {
      if (model) {
        item.id = model.id;
        item.name = model.name;
        item.description = model.description;
        this.modelService.updateById(item).subscribe((data) => {
          this.getData();
          this.componentService.getAllById(id).subscribe((arr: any) => {
            this.componentService.deleteAll(item).subscribe((data) => {
              this.createNewComponents(arr, item);
            });
          });
        });
      }
    });
  }

  clone(item) {
      const dialogRef = this.dialog.open(DialogCreateModelComponent, {
        width: '450px',
        data: {
          id: '',
          name: item.name,
          description: item.description,
          label: 'Clone Model',
          dataArr: this.data
        }
      });
      dialogRef.afterClosed().subscribe(model => {
        if (model) {
          model.userId = this.user._id;
          this.modelService.create(model).subscribe((newModel: ModelClass) => {
            this.componentService.getAllById(item._id).subscribe((arr: ComponentClass[]) => {
              this.createNewComponents(arr, newModel);
            });
          })
        }
      });
  }

  onChange(event) {
    var file = event.srcElement.files[0];
    if (file) {
        var reader = new FileReader();
        let self = this;
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt: any) {
            let arr = JSON.parse(evt.target.result).data;
            self.componentService.deleteAll(self.selected).subscribe((data) => {
              self.createNewComponents(arr, self.selected, true);
            });
        };
        reader.onerror = function (evt) {
            console.log('error reading file');
        }
    }
  }

  createNewComponents(arr, newModel, mask?) {
    let observableList = [];
    arr.forEach((m: ComponentClass) => {
      m.modelId = newModel._id;
      m.userId = this.user._id;
      m.parameters.forEach((p: any) => {
        delete p._id;
      //   if (p.value && p.value.charAt(0) === "="){
      //     let spcaSpit = p.value.split(" ");
      //     spcaSpit.forEach((element, index) => {
      //       let earr = element.split(".");
      //       if (earr.length == 3) {
      //         if (mask) {
      //           earr[0] = earr[0].slice(1, earr[0].length);
      //           earr[0] = earr[0].slice(0, earr[0].length - 1);
      //           console.log(this.getId(earr.join(".")),element,newModel)
      //           var re = new RegExp(`${this.getId(element)}`, 'g');
      //           p.value = p.value.replace(re, element);
      //         } else {
      //           var re = new RegExp(m.modelIdName, 'g');
      //           p.value = p.value.replace(re, newModel.id);
      //         }
      //       }
      //     });
      //   }
      });
      m.modelIdName = newModel.id;
      delete m._id;
      console.log(m)
      observableList.push(this.componentService.create(m));
    });
    let observableListUpdate = []
    let obs = forkJoin(observableList);
    obs.subscribe(t => {
      this.componentService.getAllById(newModel._id).subscribe((data: any) => {
        this.data.forEach((model) => {
          this.listObjects.forEach((comp) => {
            data.forEach((compNew:any) => {
              compNew.parameters.forEach(p => {
                if (p.value && p.value.charAt(0) === "="){
                  let spcaSpit = p.value.split(" ");
                  spcaSpit.forEach((element, index) => {
                    let earr = element.split(".");
                    if (earr.length == 3) {
                      if (mask) {

                        if(earr[0].charAt(0) === "#") {
                          // earr[0] = earr[0].slice(1, earr[0].length);
                          // earr[0] = earr[0].slice(0, earr[0].length - 1);
                          compNew.parameters.forEach(pNew => {
                            console.log(p.value, 
                              element, "#" + newModel.id + "#." + compNew.id + "." + pNew.id, 
                              newModel._id + "." + compNew._id + "." + pNew._id)
                              var re = new RegExp(`${ "#" + model.id + "#." + compNew.id + "." + pNew.id }`, 'g');
                              p.value = p.value.replace(re, newModel._id + "." + compNew._id + "." + pNew._id);
                              console.log(p.value, element, newModel._id + "." + compNew._id + "." + pNew._id)
                          });
               
                        } else {
                          comp.parameters.forEach(pO => {
                            console.log(element, model.id + "." + comp.id + "." + pO.id)
                            var re = new RegExp(`${model.id + "." + comp.id + "." + pO.id}`, 'g');
                            p.value = p.value.replace(re, model._id + "." + comp._id + "." + pO._id);
                          });

                        }
                      } 
                    }
                  });
                }
              });
              console.log(compNew)
              observableListUpdate.push(this.componentService.update(compNew));
            });
          });
        });
      })


      setTimeout(() => {
        console.log(observableListUpdate)
        let obsUpdate = forkJoin(observableListUpdate);
  
        obsUpdate.subscribe(t => {
          this.router.navigate(["model/" + newModel._id]);
        });
      }, 5000);
    });
  }

  export(item) {
    this.componentService.getAllById(item._id).subscribe((data: any) => {
      data.forEach(element => {
        element.userId = `#${element.userId}#`;
        element.parameters.forEach(p => {
          if (p.value && p.value.charAt(0) === "="){
            let spcaSpit = p.value.split(" ");
            spcaSpit.forEach((element, index) => {
              let earr = element.split(".");
              if (earr.length == 3) {
                var re = new RegExp(`${element}`, 'g');
                p.value = p.value.replace(re, `${this.getName(element, item.id)}`);
              }
            });
          }
        });
        delete element._id;
      });
      let verSplit = (item.ver || "1.0").split(".");
      let ver = +verSplit[0] + 1 + ".0";
      let obj = {
        "modelName ": item.name,
        "modelDescription ": item.description,
        "date": new Date(),
        "data": data,
        "ver": ver
      };
      item.ver = ver;
      this.modelService.updateById(item).subscribe(() => {});
      console.log(obj)
      this.download(JSON.stringify(obj), 'json.upm', 'json');

    });
  }
 download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  listObjects = [];
  listParams = [];
  getName(item, modelId) {
    console.log(1,item)
    let arr = item.split('.');
    let model = this.searchById(arr[0], this.data);
    let object = this.searchById(arr[1], this.listObjects);
    let param = this.searchById(arr[2], this.listParams);
    // console.log(this.data, this.listObjects , this.listParams )
    // console.log(model, object , param )
    // console.log(model.id,object.id, param.id )
    if(object && model && param && model.id && object.id && param.id)
      return (model.id === modelId ? ("#" + model.id + "#") : model.id) + "." + object.id + "." + param.id; 
    else 
      return item;
  }
  
  getId(item) {
        // console.log(1,item)
        let arr = item.split('.');
        let model = this.searchByName(arr[0], this.data);
        let object = this.searchByName(arr[1], this.listObjects);
        let param = this.searchByName(arr[2], this.listParams);
        // console.log(this.data, this.listObjects , this.listParams )
        console.log(model, object , param )
        // console.log(model.id,object.id, param.id )
    
        if(object && model && param && model.id && object.id && param.id)
          return model.id + "." + object.id + "." + param.id; 
        else 
          return "";
  }
  
  searchByName(id, arr) {
    if (arr) {
      console.log(id,arr)
      let result = arr.find(element => element.id === id);
      return result;
    }
  }

  searchById(id, arr) {
    if (arr) {
      let result = arr.find(element => element._id === id);
      return result;
    }
  }
}
