import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsComponent } from './+boards/boards.component'
import { PageNotFoundComponent } from './+error_pages/+page_not_found/page_not_found.component'

const appRoutes: Routes = [
  { path: 'boards', component: BoardsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }