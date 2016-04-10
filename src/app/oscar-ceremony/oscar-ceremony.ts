import {Component, Directive } from 'angular2/core';
import {NomineeList} from './nominee/nominee';
import {WelcomePipe} from './welcome';

@Component({selector: 'oscar-ceremony',
 directives:[NomineeList],
 pipes:[WelcomePipe],
 template: require('./oscar-ceremony.html')})
export class OscarCeremony {
  hostname: string = 'Chuck Norris';
}
