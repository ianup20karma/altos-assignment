import { Component, OnInit } from '@angular/core';
import Notifications from '../../assets/notifications.json';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  notifications = Notifications;
  toastCount = 0;
  toastReadValue: {read: boolean}[] = [];

  ngOnInit(): void {
    this.toastCount = this.notifications.length;
    for (let index = 0; index < this.notifications.length; index++) {
      this.toastReadValue.push({read: false});
    }
  }

  toastAction(event: any) {
    const collection = document.getElementsByClassName('titleToast' + event.id)[0];
    const index = this.notifications.indexOf(event.toast);
    if (index !== -1) {
      if ((event.action == 'check' || event.action == 'file') && !this.toastReadValue[index].read) {
        collection.setAttribute('style', 'font-weight: 400;');
        this.toastCount -= 1;
        this.toastReadValue[index].read = true;
      } else if (event.action == 'delete') {
        this.notifications.splice(index, 1);
      }
    }
  }
}
