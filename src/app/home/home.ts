import {Component } from 'angular2/core';
@Component({selector: 'home',
 template: `
`})
export class Home{
  name: string = 'Angular2 User';
  test = function () {
    alert('click')
    name = 'test'
  }
}
