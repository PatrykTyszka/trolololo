import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'

import { AuthService } from './+auth/services/auth.service';
import { NavbarService } from './shared/services/navbar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showNavbar: boolean;

  constructor(private authService: AuthService,
              private navbarService: NavbarService) {
    this.showNavbar = !!this.authService.loggedIn();
    this.subscription = this.navbarService.show().subscribe(val => { this.showNavbar = val.navbar });
  }

  public signOut() {
    this.authService.logout();
  }
}
