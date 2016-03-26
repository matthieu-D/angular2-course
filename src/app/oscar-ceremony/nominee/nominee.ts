import {Component } from 'angular2/core';
import {NomineeOptions} from './nominee-options';
@Component({selector: 'nominee-list',
 template: '<h2>The nominees are :{{nomineeOptions}}</h2>'})
export class NomineeList{
  nomineeOptions:String[];
  constructor(nomineeOptionsService:NomineeOptions){
    this.nomineeOptions = nomineeOptionsService.get();

  }
}
