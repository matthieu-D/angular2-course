import {Component, ViewEncapsulation  } from 'angular2/core';
@Component({selector: 'shadow-comp',
 template: '<input type="text"/>',
 styles:[`input {background-color:green}`],
 encapsulation:ViewEncapsulation.Emulated})
export class ShadowComp{
}
