import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public view: boolean = true;

  public todoTasks: Array<string> = [];
  public newTask: string = '';

  constructor() { }

  ngOnInit() {
  }

  public addNewTask(): void {
    this.todoTasks.push(this.newTask);
    this.newTask = '';
  }

  public showList(): void {
    this.view = true;
  }

  public showGrid(): void {
    this.view = false;
  }

  public removeItemFromArray(taskToRemove: string): void {
    const indexToRemove = this.todoTasks.indexOf(taskToRemove);
    if (indexToRemove >= 0) {
      this.todoTasks.splice(indexToRemove, 1);
    }
  }

}
