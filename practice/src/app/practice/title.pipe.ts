import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {
  transform(value: string, gender:string):string {
    return gender.toLowerCase() == 'male' ? 'Mr. ' + value : 'Miss. ' + value;
  }
  
}