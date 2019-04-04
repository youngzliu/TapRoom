import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "kegPipe",
  pure: false
})

export class KegPipe implements PipeTransform {
  transform(input: Keg[], desiredPrice){
    desiredPrice = parseInt(desiredPrice);
    var output: Keg[] = [];
    for(let i = 0; i < input.length; i++){
      if(input[i].price <= desiredPrice){
        output.push(input[i]);
      }
    }
    return output;
  }
}
