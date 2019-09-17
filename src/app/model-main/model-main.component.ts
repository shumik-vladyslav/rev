import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { ComponentService } from '../shared/component.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogParametersComponent } from '../shared/components/dialog-parameters/dialog-parameters.component';

@Component({
  selector: 'app-model-main',
  templateUrl: './model-main.component.html',
  styleUrls: ['./model-main.component.scss']
})
export class ModelMainComponent implements OnInit {
  picture;

  constructor(
    private modelService: ModelService,
    private componentService: ComponentService,
    public dialog: MatDialog,
  ) { }
  
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
    let model = {
      id: "first",
      name: "first",
      objectClass: "first",
      objectType: "first",
      description: "first",
      unit: "first",
      picture: "first",
      parameters: [{
        id: "first",
        name: "first",
        description: "first",
        value: 1,
        measurable: 1,
        changeable: 1,
        controlType: "first",
        showName: 1,
        showOnDiagram: 1,
        featureLabelNone: "first",
      }]
    }

    // this.componentService.create(model).subscribe((data) => {
    //   console.log(1, data)
    // })
  }

}
