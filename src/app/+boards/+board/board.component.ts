import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BoardService } from '../../shared/services/board.service';
import { NotificationsService } from './../../shared/services/notifications.service';

import { Board } from '../board';
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() board: Board;
  @Output() onDestroyBoard = new EventEmitter<number>();

  constructor(private router: Router,
              private boardService: BoardService,
              private notificationsService: NotificationsService) { }

  onSelect(board_id: number) {
     this.router.navigate(['/boards', board_id]);
  }

  onDelete(board_id: number) {
    this.notificationsService.notice(`Board with id: ${board_id} was successfully destroyed!`);
    this.onDestroyBoard.emit(board_id);
  }
}
