import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string='';
  password: string='';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  login() {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(this.email)) {
      this.presentAlert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(this.password)) {
      this.presentAlert(
        'Invalid Password',
        'Please enter a password with at least 6 characters, one uppercase letter, and one digit.'
      );
      return;
    }
  this.navCtrl.navigateForward('/home');
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
