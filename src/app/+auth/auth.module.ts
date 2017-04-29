import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './+sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
