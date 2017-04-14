import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { BoardsComponent } from './boards.component'
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardComponent } from './+board/board.component'
import { BoardShowComponent } from './+board_show/board_show.component'
@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule,
  ],
  declarations: [
    BoardsComponent,
    BoardComponent,
    BoardShowComponent,
  ],
})
export class BoardsModule {}
