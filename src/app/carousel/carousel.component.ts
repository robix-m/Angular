import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items: Array<string> = [];
  constructor() {
    this.items = [
      'assets/images/1.jpg',
      'assets/images/2.PNG',
      'assets/images/3.PNG',
      'assets/images/4.PNG',
    ];
  }
  public newCarouselItem: string;

  public addNewItemCarousel(): void {
    this.items.push(this.newCarouselItem);
    this.newCarouselItem = '';
  }

  ngOnInit() {
  }
}
