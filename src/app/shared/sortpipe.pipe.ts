import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(value: Array<string>, args: any[]): any {
    // console.log(args)
    const sortField = args[0]
    const sortDirection   = args[1]
    let multiplier = 1 ;
    if (sortDirection=='aesc'){
      multiplier = -1;
    }
    
    value?.sort((a:any, b:any) => {
      if(a[sortField]< b[sortField]){
        return 1*multiplier;
      }
      else if(a[sortField]> b[sortField]){
        return -1*multiplier;
      }
      else{
        return 0;
      }
    });
    return value;
  };

}
