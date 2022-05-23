//Each JS file is a module and each module can have multiple classes
import { Component, OnInit } from '@angular/core';

//Each of the constructor arguments becomes a member automatically
export class Todo{
  constructor(    
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){}
  
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Play with Penny', false, new Date()),
    new Todo(2, 'Become an expert in Angular', false, new Date()),
    new Todo(3, 'Visit Yosemite', false, new Date())
    // {id : 1, description: 'Play with Penny'},
    // {id : 2, description: 'Become an expert in Angular'},
    // {id : 3, description: 'Visit Yosemite'}
  ]
  //Creating a Todo object in JS
  // todo = {
  //   id : 1,
  //   description: 'Learn to Dance'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
