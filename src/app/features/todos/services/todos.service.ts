import { Injectable } from '@angular/core';
import { BackendService } from '../../../core/backend/services/backend.service';
import { Observable, switchMap } from 'rxjs';
import { Todo, TodoJSON } from '../models/todo';
import { User, UserJSON } from '../../users-shared/models/user';
import { map } from 'rxjs/operators';

@Injectable()
export class TodosService {

  constructor(private backend: BackendService) {}

  getTodos(userId?: number): Observable<Todo[]> {
    return this.backend.get<TodoJSON[]>('todos')
      .pipe(
        map(todos => this.filterByUserId(todos, userId)),
        switchMap(todos => this.mergeUsers(todos))
      );
  }

  private mergeUsers(todos: TodoJSON[]): Observable<Todo[]> {
    const ids = todos.map(todo => todo.userId);
    return this.backend.get<UserJSON[]>('users')
      .pipe(
        map(users => this.mergeTodosWithUsers(users, todos))
      );
  }

  private mergeTodosWithUsers(users: UserJSON[], todos: TodoJSON[]): Todo[] {
    return todos
      .map(todoJson => ({
        ...todoJson,
        completed: todoJson.completed ? 'Done' : 'Not Done',
        username: users.find(u => u.id === todoJson.userId)?.username,
      }));
  }

  private filterByUserId(todos: TodoJSON[], userId: number | undefined): TodoJSON[] {
    if (!userId) {
      return todos;
    }
    return todos.filter(todo => todo.userId === userId);
  }
}
