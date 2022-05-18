import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastAction } from 'src/app/models/notification-list.interface';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() toast: any;
  @Input() index: number = 0;
  @Output() toastActionEvent = new EventEmitter<ToastAction>();

  toastAction(toast: any, id: number, action: string) {
    const toastAction: ToastAction = Object.create({});
    toastAction.toast = toast;
    toastAction.id = id;
    toastAction.action = action;
    this.toastActionEvent.emit(toastAction);
  }
}
