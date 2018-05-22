import { Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output()
  public removeItem: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public source: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  public remove(taskToRemove: string): void {
    this.removeItem.emit(taskToRemove);
  }

}
