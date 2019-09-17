import { Component, OnInit } from '@angular/core';
import { ModelService } from '../shared/model.service';
import { ComponentService } from '../shared/component.service';

@Component({
  selector: 'app-model-main',
  templateUrl: './model-main.component.html',
  styleUrls: ['./model-main.component.scss']
})
export class ModelMainComponent implements OnInit {

  constructor(
    private modelService: ModelService,
    private componentService: ComponentService,
    
  ) { }

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
