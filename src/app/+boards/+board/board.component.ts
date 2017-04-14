import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Board } from '../board'
@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() board: Board;

  constructor(private router: Router) {
  }

   onSelect(board_id: number) {
     this.router.navigate(['/boards', board_id]);
  }
}
