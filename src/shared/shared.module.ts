import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ActionControlsComponent } from './action-controls/action-controls.component';

@NgModule({
  declarations: [ToastComponent, ActionControlsComponent],
  imports: [CommonModule],
  exports: [ToastComponent, ActionControlsComponent],
})
export class SharedModule {}
