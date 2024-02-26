import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {
  
  transform(value: any[], filterString:string ,propName:string): any[] {
    const resArray =[] 
    if(value?.length ===0 ||filterString === ""||propName === ''){
      return value;
    }
    else{
      for(const item of value){
        console.log(propName ,filterString )
        if(item[propName]===filterString ){
          resArray.push(item)
        }
      }
    }
    return resArray;
  }

}
