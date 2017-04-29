import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './+sign-in/sign-in.component'

const authRoutes: Routes = [
  { path: 'sing-in', component: SignInComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
