import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  galleryImages: { url: string; title: string }[] = [
    {
      url: 'assets/img/slika1.jpg',
      title: 'Image 1',
    },
    {
      url: 'assets/img/slika2.jpg',
      title: 'Image 2',
    },
    {
      url: 'assets/img/slika3.jpg',
      title: 'Image 3',
    },
    {
      url: 'assets/img/slika4.jpg', 
      title: 'Image 4',
    }, 
    {
      url: 'assets/img/slika5.jpg', 
      title: 'Image 5'
    }
  ];

  constructor() {}
}
