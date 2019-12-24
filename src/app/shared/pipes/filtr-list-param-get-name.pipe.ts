import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrListParamGetName'
})
export class FiltrListParamGetNamePipe implements PipeTransform {

  transform(data: any, listModel, listObjects, listParams): any {
    console.log(999, data, listModel, listObjects, listParams)
    let arr = data.split('.');
    let model = this.searchById(arr[0], listModel);
    let object = this.searchById(arr[1], listObjects);
    let param = this.searchById(arr[2], listParams);
    if(object && model && param && model.id && object.id && param.id)
      return model.id + "." + object.id + "." + param.id; 
    else 
      return "";
  }

  searchById(id, arr) {
    if (arr) {
      let result = arr.find(element => element._id === id);
      return result;
    }
  }

}
