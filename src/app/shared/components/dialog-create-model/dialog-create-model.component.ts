import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ModelClass } from "../../model";

@Component({
  selector: "app-dialog-create-model",
  templateUrl: "./dialog-create-model.component.html",
  styleUrls: ["./dialog-create-model.component.scss"]
})
export class DialogCreateModelComponent implements OnInit {
  model = new ModelClass();
  constructor(public dialogRef: MatDialogRef<DialogCreateModelComponent>) {}
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
