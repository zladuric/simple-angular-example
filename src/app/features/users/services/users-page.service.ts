import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserJSON } from '../../users-shared/models/user';
import { UsersResourceService } from './users-resource.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UsersPageService {
  users$: Observable<User[]>;
  showUserForm$: Observable<boolean>;

  private usersSubject = new BehaviorSubject<User[]>([]);
  private showUserFormSubject = new BehaviorSubject<boolean>(false)


  constructor(private usersREST: UsersResourceService, private snackBar: MatSnackBar) {
    this.users$ = this.usersSubject.asObservable();
    this.showUserForm$ = this.showUserFormSubject.asObservable();
  }

  getUsers() {
    this.usersREST.getUsers()
      .subscribe(users => this.usersSubject.next(users));
  }

  addUser(user: Partial<UserJSON>) {
    this.usersREST.saveUser(user)
      .subscribe((res) => {
        console.log('Saved:', res);
        this.snackBar.open('Saved', 'Dismiss');
        this.showUserFormSubject.next(false);
      })
  }

  onCreateUser() {
    this.showUserFormSubject.next(true);
  }
}
