import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

      transform(value: any,filteredString:string):any {
        return( value.length==0 || filteredString=='')? value : value.filter((data)=>
          data.roleDescEn.toLowerCase().includes(filteredString.toLowerCase())
        )
      }

}
