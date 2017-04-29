import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public headers: any;
  public options: any;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public signIn(credentials: any) {
    let data = { 'auth': {'email': credentials.email, 'password': credentials.password } }
    return this.http.post('http://localhost:3000/api/v1/auth/auth_token', data, this.options)
                    .map((resp: any) => this.setJwtToken(resp))
                    .map((token: string) => this.setToken(token))
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
