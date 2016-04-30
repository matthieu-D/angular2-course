import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'welcome'
})

export class WelcomePipe implements PipeTransform {
  transform(value: String, args: any) : String{
    return 'Welcome'+args+ ' ' + value;
  }
}
