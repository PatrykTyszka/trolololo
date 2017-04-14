import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardShowComponent } from './+board_show/board_show.component'

const boardsRoutes: Routes = [
  { path: 'boards/:id', component: BoardShowComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(boardsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BoardsRoutingModule { }
