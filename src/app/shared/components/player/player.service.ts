import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TooltipComponent } from '@angular/material';

@Injectable()
export class PlayerService {

  dataEmitter = new EventEmitter();
  cursorEmitter = new EventEmitter();
  closePlayer = new EventEmitter();
  

  constructor(private http: HttpClient) {}
  
}
