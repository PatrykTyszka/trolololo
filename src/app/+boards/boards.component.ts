import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';

import { Board } from './board'
import { BoardService } from '../shared/services/board.service'
@Component({
  selector: 'boards-list',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
})
export class BoardsComponent implements OnInit {
  boards: Board[];
  errorMessage: string;
  someText: string;
  titleError: string;
  constructor(private boardService: BoardService) {}

  ngOnInit() { this.getBoards(); }

  getBoards() {
    this.boardService
      .getBoards()
      .subscribe(boards => this.boards = boards,
                 error =>  this.errorMessage = <any>error);
  }

  addBoard(val: string) {
    this.titleError = null;
    this.boardService.create(val)
      .subscribe(board  => this.boards.push(board),
                 response =>  this.addBoardError(response));
  }

  destroyBoard(board_id: number) {
    this.boardService.destroy(board_id)
      .subscribe(board  => this.removeBoard(board.id),
                 response =>  this.errorMessage = <any>response);
  }

  private removeBoard(board_id: number) {
    let indexToRemove = this.boards.findIndex(board => board.id == board_id)
    this.boards.splice(indexToRemove, 1);
  }

  private addBoardError(response: Response): void {
    let resp = response.json();
    if (resp.errors && resp.errors.title) {
      this.titleError = resp.errors.title;
    } else {
      throw 'Undefined error';
    }
  }
}
