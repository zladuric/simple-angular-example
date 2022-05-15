import { Component, Input } from '@angular/core';
import { User } from '../../../users-shared/models/user';

@Component({
  selector: 'bram-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss'],
})
export class UsersGridComponent {
  @Input() users: User[] = [];
}
