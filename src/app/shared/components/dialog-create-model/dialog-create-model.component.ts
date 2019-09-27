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
  constructor(public dialogRef: MatDialogRef<DialogCreateModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.model.id = this.data.id;
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
