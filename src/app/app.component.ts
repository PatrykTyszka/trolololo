import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './+auth/services/auth.service';
import { NavbarService } from './shared/services/navbar.service';
import { NotificationsService } from './shared/services/notifications.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showNavbar: boolean;

  constructor(private authService: AuthService,
              private navbarService: NavbarService,
              private notificationsService: NotificationsService) {
    this.showNavbar = !!this.authService.loggedIn();
    this.navbarService.show().subscribe(val => { this.showNavbar = val });
  }

  public signOut() {
    this.notificationsService.notice('Logout!');
    this.authService.logout();
  }
}
