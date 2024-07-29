import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent {
  constructor(private notification: NzNotificationService) {}

  static createBasicNotification(notificationService: NzNotificationService, title: string, message: string, bgColor: string): void {
    notificationService.blank(title, message, {
      nzDuration: 3000,
      nzClass: 'custom-notification'
    });

    const notificationElements = document.getElementsByClassName('custom-notification');
    if (notificationElements.length > 0) {
      const notificationElement = notificationElements[0];
      notificationElement.setAttribute('style', `color: white; background-color: ${bgColor};`);

      const titleElement = notificationElement.querySelector('.ant-notification-notice-message');
      if (titleElement) {
        titleElement.setAttribute('style', 'color: white; font-weight: bold;');
      }
    }
  }
}

