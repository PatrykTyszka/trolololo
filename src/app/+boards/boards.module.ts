import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { BoardsComponent } from './boards.component'
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardComponent } from './+board/board.component'
import { BoardShowComponent } from './+board_show/board_show.component'
import { BoardService } from '../shared/services/board.service'
@NgModule({
  imports: [
    CommonModule,
    BoardsRoutingModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    BoardsComponent,
    BoardComponent,
    BoardShowComponent,
  ],
  providers: [
    BoardService,
  ],
})
export class BoardsModule {}
