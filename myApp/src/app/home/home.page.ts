import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  galleryImages: { url: string; title: string; description: string }[] = [
    {
      url: 'assets/img/slika1.jpg',
      title: 'Image 1',
      description: 'Ovo je prva slika',
    },
    {
      url: 'assets/img/slika2.jpg',
      title: 'Image 2',
      description: 'Ovo je druga slika',
    },
    {
      url: 'assets/img/slika3.jpg',
      title: 'Image 3',
      description: 'Ovo je treca slika',
    },
    {
      url: 'assets/img/slika4.jpg',
      title: 'Image 4',
      description: 'Ovo je cetvrta slika',
    },
    {
      url: 'assets/img/slika5.jpg',
      title: 'Image 5',
      description: 'Ovo je peta slika',
    },
  ];

  constructor() {}

  addPicture(url: string, title: string, description: string) {
    this.galleryImages.push({ url, title, description });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      const title = prompt('Enter the image title:');
      const description = prompt('Enter the image description:');
      if (title && description) {
        this.addPicture(url, title, description);
      }
    };
    reader.readAsDataURL(file);
  }
}
