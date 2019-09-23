import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrListParam'
})
export class FiltrListParamPipe implements PipeTransform {

  transform(data: any, class_?: any, object?: any): any {
    data = data.filter((item) => {
      if (class_ && object){
        if (item.objectClass === class_ && item.objectType === object) {
          return true;
        }
      } else {
        if (class_ && item.objectClass === class_) {
          return true;
        }
        if (object && item.objectType === object) {
          return true;
        }
      }
    });
    console.log(data);
    return data;
  }

}
