import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  galleryImages: { url: string; title: string; description: string; liked: boolean }[] = [];

  constructor(private navCtrl: NavController, private afDatabase: AngularFireDatabase) {
    // Retrieve gallery images from the database
    this.afDatabase
      .list('pictures')
      .valueChanges()
      .subscribe((images: any[]) => {
        this.galleryImages = images;
      });
  }

  addPicture(url: string, title: string, description: string) {
    // Create a new picture object
    const picture = {
      url: url,
      title: title,
      description: description,
      liked: false,
    };

    // Push the picture to the Firebase Realtime Database
    this.afDatabase.list('pictures').push(picture);
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

  deletePicture(index: number) {
    if (confirm('Are you sure you want to delete this picture?')) {
      this.galleryImages.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  toggleLike(index: number) {
    this.galleryImages[index].liked = !this.galleryImages[index].liked;
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

  handleButtonClick() {
    this.navCtrl.navigateForward('/liked-pictures');
  }
  

}
