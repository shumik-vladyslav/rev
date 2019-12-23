import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrListParam'
})
export class FiltrListParamPipe implements PipeTransform {

  transform(data: any, class_?: any, object?: any): any {
    data = data.filter((item) => {
      if (class_ && object) {
        if (item.objectClass === class_ && item.objectTypeId === object) {
          return true;
        }
      } else {
        if (class_ && item.objectClass === class_) {
          return true;
        }
        if (object && item.objectTypeId === object) {
          return true;
        }
      }
    });
    return data;
  }

}
