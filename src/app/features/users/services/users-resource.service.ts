import { Injectable } from '@angular/core';
import { BackendService } from '../../../core/backend/services/backend.service';
import { User, UserJSON } from '../../users-shared/models/user';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersResourceService {

  constructor(private backend: BackendService) { }

  getUsers(): Observable<User[]> {
    return this.backend.get<UserJSON[]>('users')
      .pipe(
        map(users => this.formatUsers(users))
      )
  }

  getUserById(userId: number): Observable<User> {
    return this.backend.get<UserJSON>(`users/${userId}`)
      .pipe(
        map(user => this.formatUser(user))
      )
  }

  private formatUsers(users: UserJSON[]): User[] {
    return users.map(user => this.formatUser(user));
  }

  private formatUser(user: UserJSON): User {
    return {
      id: user.id,
      username: user.username,
      displayName: `${user.name}`,
      email: user.email,
      company: user.company.name,
      companyTag: user.company.catchPhrase,
      avatarUrl: 'http://placekitten.com/g/200/80'
    };
  }

  saveUser(user: Partial<UserJSON>) {
    return this.backend.post<UserJSON, User>('users');
  }
}
