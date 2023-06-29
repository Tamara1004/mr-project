import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-liked-pictures',
  templateUrl: './liked-pictures.component.html',
  styleUrls: ['./liked-pictures.component.scss'],
})
export class LikedPicturesComponent implements OnInit {
  galleryImages: { url: string; title: string; description: string; liked: boolean }[];
  likedImages!: { url: string; title: string; description: string; liked: boolean }[];

  constructor(private afDatabase: AngularFireDatabase) {
    const savedImages = localStorage.getItem('galleryImages');
    this.galleryImages = savedImages ? JSON.parse(savedImages) : [];
    this.updateLikedImages();
  }

  toggleLike(index: number) {
    const likedImage = this.galleryImages[index];
    likedImage.liked = !likedImage.liked;
  
    // Update the like status in Firebase
    this.afDatabase.object(`pictures/${index}/liked`).set(likedImage.liked);
  
    this.updateLocalStorage();
    this.updateLikedImages();
  }
  

  removePicture(index: number) {
    if (confirm('Are you sure you want to remove this picture?')) {
      const removedImage = this.likedImages.splice(index, 1)[0];
      //Nadji indeks slike koju smo removali sa stranice
      const galleryIndex = this.galleryImages.findIndex(image => image.url === removedImage.url);
      if (galleryIndex !== -1) {
        this.galleryImages[galleryIndex].liked = false; // Setuj like dugme na false
      }
  
      this.updateLocalStorage();
    }
  }
  
  updateLocalStorage() {
    localStorage.setItem('galleryImages', JSON.stringify(this.galleryImages));
  }

  updateLikedImages() {
    this.likedImages = this.galleryImages.filter((image) => image.liked);
  }

  ngOnInit() {}
}
