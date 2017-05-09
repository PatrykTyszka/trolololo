import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Response } from '@angular/http';

import { AuthService } from '../services/auth.service';
import { NavbarService } from '../../shared/services/navbar.service';
import { NotificationsService } from './../../shared/services/notifications.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  public form: FormGroup;
  public errorMessage: any;

  constructor(public fb: FormBuilder,
              public authService: AuthService,
              private _location: Location,
              private router: Router,
              private navbarService: NavbarService,
              private notificationsService: NotificationsService) {
    if (this.authService.loggedIn()) {
      this._location.back();
    }
    this.form = fb.group({
      email : [ '', Validators.required ],
      password: [ '', Validators.required ],
    });
  }

  public submitForm(value: any) {
    this.authService.signIn({email: value.email, password: value.password})
                    .subscribe(auth => this.onSuccess(auth),
                               error => this.onError(error));
  }

  private onSuccess(jwt: string) {
    this.notificationsService.notice('Logged In!');
    this.navbarService.setFlag(true);
    this.router.navigate(['/boards']);
  }

  private onError(error: Response) {
    this.notificationsService.alert('Invalid email or password!');
  }
}
