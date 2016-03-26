import {Injectable} from 'angular2/core';

@Injectable()
export class NomineeOptions{
  options = ['DiCaprio','DiCaprio','DiCaprio','DiCaprio', 'Justin Bieber']

  constructor() { }
  get(){
    return this.options;
  }

}
