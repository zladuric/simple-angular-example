import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'bram-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() title!: string;
}
