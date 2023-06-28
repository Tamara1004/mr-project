import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { LikedPicturesComponent } from './liked-pictures.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LikedPicturesComponent },
];

@NgModule({
  declarations: [LikedPicturesComponent],
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule to imports
    RouterModule.forChild(routes)
  ],
})
export class LikedPicturesModule { }
