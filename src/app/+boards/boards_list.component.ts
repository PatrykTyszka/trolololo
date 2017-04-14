import { Component } from '@angular/core';

import { Board } from './board'
@Component({
  selector: 'boards-list',
  templateUrl: './boards_list.component.html',
  styleUrls: ['./boards_list.component.scss'],
})
export class BoardsListComponent {
  boards: Array<Board>;

  constructor() {
    this.boards = [];
  }

  addBoard(val: string) {
    let id = this.boards.length + 1;
    this.boards.push(new Board(id, val));
  }
}
