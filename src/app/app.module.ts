import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { BoardsListComponent } from './+boards/boards_list.component'
import { PageNotFoundComponent } from './+error_pages/+page_not_found/page_not_found.component'


const appRoutes: Routes = [
  { path: 'boards', component: BoardsListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    BoardsListComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
