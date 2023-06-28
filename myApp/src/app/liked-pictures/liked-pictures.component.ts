import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-pictures',
  templateUrl: './liked-pictures.component.html',
  styleUrls: ['./liked-pictures.component.scss'],
})
export class LikedPicturesComponent implements OnInit {
  galleryImages: { url: string; title: string; description: string; liked: boolean }[];
  likedImages: { url: string; title: string; description: string; liked: boolean }[];

  constructor() {
    // Retrieve galleryImages from localStorage or initialize it
    const savedImages = localStorage.getItem('galleryImages');
    this.galleryImages = savedImages ? JSON.parse(savedImages) : [];

    // Filter and store liked images
    this.likedImages = this.galleryImages.filter((image) => image.liked);
  }

  ngOnInit() {}
}
