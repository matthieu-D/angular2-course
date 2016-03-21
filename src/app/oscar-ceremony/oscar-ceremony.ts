import {Component, Directive } from 'angular2/core';
import {NomineeList} from './nominee/nominee';
@Component({selector: 'oscar-ceremony',
 directives:[NomineeList],
 template: require('./oscar-ceremony.html')})
export class OscarCeremony {
  hostname: string = 'Chuck Norris';
}
