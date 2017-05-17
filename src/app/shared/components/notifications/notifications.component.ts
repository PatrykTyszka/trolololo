import { Component, OnInit } from '@angular/core';

import { NotificationsService } from './../../services/notifications.service';

@Component({
  selector: 'notify',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  message: string;
  className: string;

  constructor(private notificationsService: NotificationsService) {
      this.notificationsService.notificationListener().subscribe((response) => {
        this.message = response.msg;
        this.className = `notify ${response.type}`;
      });
  }
}
