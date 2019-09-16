import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {

  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit() {
    this.modelService.getAll().subscribe((data) => {
      console.log(data)
    })
  }

}
