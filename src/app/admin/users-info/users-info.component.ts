import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../shared/model.service';
import { ComponentService } from '../../shared/component.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {
  users = [];
  models = [];
  components = [];
  constructor(private modelService: ModelService, private componentService: ComponentService) {
    this.modelService.getAllUsers().subscribe((data:any) => {
      this.users = data;
      console.log(data)
    });
    this.modelService.getAll().subscribe((data:any) => {
      this.models = data;   
      console.log(data)
    });
    this.componentService.getAll().subscribe((data:any) => {
      this.components = data;
        console.log(data)
    });
   }

  ngOnInit() {
  }

  setAdmin(user){
    user.isAdmin = !user.isAdmin;
    this.modelService.updateUserById(user).subscribe(() => {
      this.modelService.getAllUsers().subscribe((data:any) => {
        this.users = data;
        console.log(data)
      });
    })
  }

  getModels(id){
    return this.models.filter((model) => {
      return model.userId === id;
    })
  }

  getComponents(id){
    return this.components.filter((component) => {
      return component.userId === id;
    })
  }
  
}
