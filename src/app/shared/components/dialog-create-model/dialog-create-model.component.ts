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
  onKeyUp(e) {
    let arr = e.target.value.split('');
    arr = arr.filter((item) => {
      if (item != " ") {
        return true;
      }
    })
    e.target.value = arr.join('')
  }
}
