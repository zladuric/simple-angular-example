import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserJSON } from '../../../users-shared/models/user';
import { UsersPageService } from '../../services/users-page.service';
import { ViewModeType } from '../../models/  view-mode-type';

@Component({
  selector: 'bram-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  viewMode: ViewModeType = 'grid';
  users$: Observable<User[]>;
  showUserForm$: Observable<boolean>;

  constructor(private usersService: UsersPageService) {
    this.users$ = this.usersService.users$;
    this.showUserForm$ = this.usersService.showUserForm$;
  }

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  onViewModeChange(viewMode: ViewModeType) {
    this.viewMode = viewMode;
  }

  onCreateUser() {
    this.usersService.onCreateUser();
  }

  onAddUser(user: Partial<UserJSON>) {
    this.usersService.addUser(user);
  }
}
