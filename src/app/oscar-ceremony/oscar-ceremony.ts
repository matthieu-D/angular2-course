import {Component, Directive } from 'angular2/core';
import {NomineeList} from './nominee/nominee';
import {WelcomePipe} from './welcome';
import {ShadowComp} from './shadow-comp/shadow-comp'

@Component({selector: 'oscar-ceremony',
 directives:[NomineeList, ShadowComp],
 pipes:[WelcomePipe],
 template: require('./oscar-ceremony.html')})
export class OscarCeremony {
  hostname: string = 'Chuck Norris';
}
