import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Board } from '../../+boards/board'

@Injectable()
export class BoardService {
  headers: any;
  options: any;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getBoards(): Observable<Board[]> {
    return this.http.get('http://localhost:3000/api/v1/boards')
                    .map((response: any) => response.json());
  }

  create(title: string): Observable<Board> {
    let data = {'board': {'title': title} }

    return this.http.post('http://localhost:3000/api/v1/boards', JSON.stringify(data), this.options)
                    .map((response: any) => response.json());
  }

  destroy(id: number): Observable<Board> {
    return this.http.delete('http://localhost:3000/api/v1/boards/' + id, this.options)
                    .map((response: any) => response.json());
  }
}
