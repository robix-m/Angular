import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/1.jpg'},
      { name: 'assets/images/2.PNG'},
      { name: 'assets/images/3.PNG'},
      { name: 'assets/images/4.PNG'},
    ];
  }
}
