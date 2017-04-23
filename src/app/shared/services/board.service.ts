import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Board } from '../../+boards/board'

@Injectable()
export class BoardService {
    constructor(private http: Http) { }

  getBoards(): Observable<Board[]> {
    return this.http.get('http://localhost:3000/api/v1/boards')
                    .map((response: any) => response.json());
  }

  create(title: string): Observable<Board> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = {'board': {'title': title} }

    return this.http.post('http://localhost:3000/api/v1/boards', JSON.stringify(data), options)
                    .map((response: any) => response.json());
  }
}
