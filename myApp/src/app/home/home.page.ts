import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  galleryImages: { url: string; title: string; description: string }[];

  constructor() {
    const savedImages = localStorage.getItem('galleryImages');

    if (savedImages) {
      this.galleryImages = JSON.parse(savedImages);
    } else {
      this.galleryImages = [
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
    }
  }

  addPicture(url: string, title: string, description: string) {
    this.galleryImages.push({ url, title, description });
    this.updateLocalStorage();
  }

  updatePicture(index: number) {
    const newTitle = prompt('Enter the new title:', this.galleryImages[index].title);
    const newDescription = prompt('Enter the new description:', this.galleryImages[index].description);

    if (newTitle !== null) {
      this.galleryImages[index].title = newTitle;
    }
    if (newDescription !== null) {
      this.galleryImages[index].description = newDescription;
    }
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('galleryImages', JSON.stringify(this.galleryImages));
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const url = reader.result as string;
      const title = prompt('Enter the image title:');
      const description = prompt('Enter the image description:');

      if (url && title && description) {
        this.addPicture(url, title, description);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}