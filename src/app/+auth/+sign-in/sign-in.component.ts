import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { NavbarService } from '../../shared/services/navbar.service';

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
              private navbarService: NavbarService) {
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
                               error => console.log('Unauthorized!'));
  }

  onSuccess(jwt: string) {
    // get user and set CurrentUser.
    this.navbarService.setFlag({navbar: true});
    this.router.navigate(['/boards']);
  }
}
