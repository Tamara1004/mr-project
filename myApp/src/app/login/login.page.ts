import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string='';
  password: string='';

  constructor(private router: Router) {}

 login() {
    // Ovde možete dodati logiku za prijavu korisnika
    // Na primer, možete koristiti AuthService za proveru korisničkih podataka i autentifikaciju
    // ili poslati HTTP zahtev ka serveru za proveru i autentifikaciju korisnika

    // Nakon uspešne prijave, možete preusmeriti korisnika na drugu stranicu
    this.router.navigate(['/home']);
  }
}
