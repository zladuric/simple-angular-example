import { Component, EventEmitter, Output } from '@angular/core';
import { ViewModeType } from '../../models/view-mode-type';

@Component({
  selector: 'bram-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent {
  @Output() viewModeChange = new EventEmitter<ViewModeType>();
  @Output() createUser = new EventEmitter<void>();
}
