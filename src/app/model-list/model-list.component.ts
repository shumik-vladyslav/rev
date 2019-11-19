import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogCreateModelComponent } from '../shared/components/dialog-create-model/dialog-create-model.component';
import { ModelClass } from '../shared/model';
import { UI } from 'formulize';
import { ComponentService } from '../shared/component.service';

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
    private componentService: ComponentService
  ) { }

  ngOnInit() {
    this.authService.me().subscribe(data => {
      this.user = data.user;
      console.log(data)
      this.getData()
    });

  }

  getData(){
    this.modelService.getAllById(this.user._id).subscribe((data: any) => {
      console.log(data)
      this.data = data;
    });
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
          this.router.navigate(["model/" + data._id]);
        })
      }
    });
  }

  remove(item) {
    this.modelService.remove(item._id).subscribe((data) => {
      console.log(data);
      this.getData();
    });
  }

  edit(item) {
    this.router.navigate(["model/" + item._id]);
  }

  imp(){
    
  }

  export(item) {
    this.componentService.getAllById(item._id).subscribe((data: any) => {
      console.log(data);
      this.download(JSON.stringify(data), 'json.upm', 'json');

    });
  }
 download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
}
