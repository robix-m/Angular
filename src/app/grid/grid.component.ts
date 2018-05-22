import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

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
