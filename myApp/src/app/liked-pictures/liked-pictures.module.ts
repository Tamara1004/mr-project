import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { LikedPicturesComponent } from './liked-pictures.component';

const routes: Routes = [
  { path: '', component: LikedPicturesComponent },
];

@NgModule({
  declarations: [LikedPicturesComponent],
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule here
    RouterModule.forChild(routes),
  ],
})
export class LikedPicturesModule {}
