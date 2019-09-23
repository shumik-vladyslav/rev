import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from '@angular/material';
import { ComponentService } from "../../component.service";

@Component({
  selector: "app-dialog-parameters",
  templateUrl: "./dialog-parameters.component.html",
  styleUrls: ["./dialog-parameters.component.scss"]
})
export class DialogParametersComponent implements OnInit {
  listModel = [];
  listComponents = [];
  listClass = [];
  listObjects = [];
  listParams = [];
  selectedParam;
  selectedObject;
  selectedClass;
  sleectedModel;
  constructor(public dialogRef: MatDialogRef<DialogParametersComponent>,
    private componentService: ComponentService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.listModel = this.data.list;
  }

  modelChange(id) {
    console.log(id)
    this.componentService.getAllById(id).subscribe((data: any) => {
      this.listComponents = data;

      this.listComponents.forEach(item => {
        this.listClass.push(item.objectClass);
        this.listObjects.push(item.objectType);
        this.listParams = [...this.listParams, ...item.parameters]
      });

      this.listClass = [...this.listClass.filter(this.onlyUnique)];
      this.listObjects = [...this.listObjects.filter(this.onlyUnique)];

      console.log(this.listComponents)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  paramsFilter(e){
    
  }

  paramsChange(e){
    let item = this.searchById(e, this.listParams);
    console.log(e, item, this.sleectedModel)
  }

  searchById(id, arr) {
    if (arr) {
      let result = arr.find(element => element._id === id);
      return result;
    }
  }
}
