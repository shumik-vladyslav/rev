import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogCreateModelComponent } from '../shared/components/dialog-create-model/dialog-create-model.component';
import { ModelClass } from '../shared/model';
import { UI } from 'formulize';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {
  user;
  model = new ModelClass();
  data: ModelClass[];
  constructor(
    private modelService: ModelService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(data => {
      this.user = data.user;
      console.log(data)
      this.modelService.getAllById(this.user._id).subscribe((data: any) => {
        console.log(data)
        this.data = data;
      });
    });

    setTimeout(() => {
      
const target = document.getElementById('formulize');
const formulize = new UI(target, {
});

const data = {
  operator: '*',
  operand1: { value: { type: 'unit', unit: 1 } },
  operand2: { value: { type: 'unit', unit: 2 } }
};
formulize.setData(data);
    }, 5000);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCreateModelComponent, {
      width: '450px',
      data: {
        id: "mod" + (this.data.length + 1)
      }
    });
    dialogRef.afterClosed().subscribe(model => {
      if (model) {
        model.userId = this.user._id;
        this.modelService.create(model).subscribe((data: any) => {
          console.log(data)
          this.router.navigate(["model/" + data._id])
        })
      }
    });
  }

}
