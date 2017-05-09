import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BoardsModule } from './+boards/boards.module';
import { BoardsComponent } from './+boards/boards.component';
import { BoardComponent } from './+boards/+board/board.component';
import { BoardShowComponent } from './+boards/+board_show/board_show.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';

import { AuthModule } from './+auth/auth.module';
import { AuthGuard } from './shared/auth.guard';
import { PageNotFoundComponent } from './+error_pages/+page_not_found/page_not_found.component';

import { NavbarService } from './shared/services/navbar.service';
import { NotificationsService } from './shared/services/notifications.service';
@NgModule({
  imports: [
    BrowserModule,
    BoardsModule,
    AppRoutingModule,
    AuthModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NotificationsComponent,
  ],
  providers: [
    AuthGuard,
    NavbarService,
    NotificationsService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
