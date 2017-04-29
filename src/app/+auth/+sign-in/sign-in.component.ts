import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  public form: FormGroup;
  public errorMessage: any;

  constructor(public fb: FormBuilder, public authService: AuthService) {
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
    console.log("JWT " + jwt);
  }
}
