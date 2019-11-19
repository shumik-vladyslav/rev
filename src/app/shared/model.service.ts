import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TooltipComponent } from '@angular/material';

@Injectable()
export class ModelService {

  constructor(private http: HttpClient) {}

  create(model) {
    return this.http.post('/api/model', model);
  }

  getAll() {
    return this.http.get('/api/model');
  }

  getAllById(id) {
    return this.http.get('/api/model/list/' + id);
  }

  remove(id) {
    return this.http.delete('/api/model/' + id);
  }

  updateById(model) {
    return this.http.put('/api/model', model);
  }
}
