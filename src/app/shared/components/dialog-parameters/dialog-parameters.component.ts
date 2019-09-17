import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-parameters",
  templateUrl: "./dialog-parameters.component.html",
  styleUrls: ["./dialog-parameters.component.scss"]
})
export class DialogParametersComponent implements OnInit {
  data = "DIalog data";
  constructor(public dialogRef: MatDialogRef<DialogParametersComponent>) {}
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
