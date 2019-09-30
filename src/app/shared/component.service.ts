import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TooltipComponent } from '@angular/material';

@Injectable()
export class ComponentService {

  constructor(private http : HttpClient) {}

  create(component){
    return this.http.post('/api/component', component)
  }

  getAll(){
    return this.http.get('/api/component')
  }

  update(component){
    return this.http.put('/api/component', component)
  }

  delete(component){
    return this.http.delete('/api/component/' + component._id)
  }

  getAllById(id){
    return this.http.get('/api/component/list/' + id)
  }
}
