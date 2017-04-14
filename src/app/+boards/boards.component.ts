import { Component } from '@angular/core';

import { Board } from './board'
@Component({
  selector: 'boards-list',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent {
  boards: Array<Board>;
  someText: string;
  constructor() {
    this.boards = [];
    this.someText = 'ttteext';
  }

  addBoard(val: string) {
    let id = this.boards.length + 1;
    this.boards.push(new Board(id, val));
  }
}
