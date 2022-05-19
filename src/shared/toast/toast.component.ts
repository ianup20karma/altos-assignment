import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastAction } from 'src/models/notification-list.interface';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() toast: any;
  @Input() index: number = 0;
  @Output() toastActionEvent = new EventEmitter<ToastAction>();

  toastAction(toastAction: ToastAction) {
    this.toastActionEvent.emit(toastAction);
  }
}
