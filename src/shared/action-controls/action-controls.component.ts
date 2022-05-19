import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastAction } from 'src/models/notification-list.interface';

@Component({
  selector: 'app-action-controls',
  templateUrl: './action-controls.component.html',
  styleUrls: ['./action-controls.component.scss']
})
export class ActionControlsComponent {
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
