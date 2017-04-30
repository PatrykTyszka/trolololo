import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { NavbarService } from '../../shared/services/navbar.service';
@Injectable()
export class AuthService {
  public headers: any;
  public options: any;

  constructor(private http: Http,
              private navbarService: NavbarService,
              private router: Router) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public signIn(credentials: any) {
    let data = { 'auth': {'email': credentials.email, 'password': credentials.password } }
    return this.http.post('http://localhost:3000/api/v1/auth/auth_token', data, this.options)
                    .map((resp: any) => this.setJwtToken(resp))
                    .map((token: string) => this.setToken(token))
  }

  public loggedIn() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
    this.navbarService.setFlag({navbar: false});
    this.router.navigate(['/sign-in']);
  }

  private setToken(jwt: string) {
    localStorage.setItem('id_token', jwt);
    return jwt;
  }

  private setJwtToken(resp: any) {
    let response = resp.json();
    if (!response.jwt) {
        throw Error('JWT token missing');
    }
    return response.jwt;
  }
}
