import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {
  user;
  model = {
    id: "",
    userId: "",
    name: "",
    description: ""
  }

  constructor(
    private modelService: ModelService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {


    this.authService.me().subscribe(data => {
      this.user = data.user;
      console.log(data)
      this.modelService.getAllById(this.user._id).subscribe((data) => {
        console.log(data)
      });
    });
  }

  createModel(){
    this.model.userId = this.user._id;
    this.model.id = "test1";
    this.model.description = "tes1t";
    this.model.name = "tes1t";
    this.modelService.create(this.model).subscribe((data) => {
      console.log(data)
    })
  }
  
}
