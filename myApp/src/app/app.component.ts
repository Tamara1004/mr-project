import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: MenuItem[] = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Liked Pictures', url: '/liked-pictures', icon: 'heart' },
  ];
}
