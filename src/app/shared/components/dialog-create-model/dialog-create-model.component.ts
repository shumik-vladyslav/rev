import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ModelClass } from "../../model";

@Component({
  selector: "app-dialog-create-model",
  templateUrl: "./dialog-create-model.component.html",
  styleUrls: ["./dialog-create-model.component.scss"]
})
export class DialogCreateModelComponent implements OnInit {
  model = new ModelClass();
  label = ""
  deleteMode;
  dataArr;
  valid;
  constructor(public dialogRef: MatDialogRef<DialogCreateModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.model.id = this.data.id;
    this.model.name = this.data.name || "";
    this.model.description = this.data.description || "";
    this.label = this.data.label;
    this.deleteMode = this.data.deleteMode;
    this.dataArr = this.data.dataArr;
    console.log(this.dataArr)
    this.validChange(this.model.id);
  }

  validChange(e) {
    if (!e) {
      this.valid = false;
      return;
    }
    let res = this.dataArr.find(element => {
      return e === element.id;
    });

    if(!res){
      this.valid = true;
    } else {
      this.valid = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onKeyDown(e) {
    let re = /^(\d*[a-zA-Z]*\d*[a-zA-Z]*)*$/mg;
    if (!re.test(e.key)){
      return false;
    }
  }
}
