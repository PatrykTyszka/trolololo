import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardShowComponent } from './+board_show/board_show.component'

import { AuthGuard } from '../shared/auth.guard';
const boardsRoutes: Routes = [
  { path: 'boards/:id', component: BoardShowComponent, canActivate: [AuthGuard] }
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
