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
      { name: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pozna%C5%84_UAM_Wydzia%C5%82_Matematyki_i_Informatyki_panorama.jpg/550px-Pozna%C5%84_UAM_Wydzia%C5%82_Matematyki_i_Informatyki_panorama.jpg'},
      { name: 'http://picresize.com/dl.php?i=rsz_1cropped-245472.jpg'},
      { name: 'http://picresize.com/dl.php?i=rsz_62687020.jpg'},
      { name: 'http://picresize.com/dl.php?i=rsz_85878466.jpg'},
    ];
  }
}
