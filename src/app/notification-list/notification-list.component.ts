import { Component, OnInit } from '@angular/core';
import Notifications from '../../assets/notifications.json';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  notifications = Notifications;
  toastCount = 0;

  constructor() { }
  
  ngOnInit(): void {
    this.toastCount = this.notifications.length;
    console.log(this.notifications, this.toastCount);
    this.notifications = [];
  }

  toastAction(toast: any, id: number, action: string) {
    const collection = document.getElementsByClassName('titleToast'+id)[0];
    if (action == 'check') {
      collection.setAttribute('style', 'font-weight: 400;')
      this.toastCount -= 1;
    } else {
      const index = this.notifications.indexOf(toast);
      if (index !== -1) { this.notifications.splice(index, 1); }
    }
    console.log(id, action, collection);
  }
}
