import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from './firebase-config';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CommonModule
  ],
})
export class FirebaseModule {}
