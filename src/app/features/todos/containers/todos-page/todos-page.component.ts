import { Component, OnInit, ViewChild } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';
import { ListComponent } from '../../../../shared/list/components/list/list.component';
import { ActivatedRoute } from '@angular/router';
import { UsersResourceService } from '../../../users/services/users-resource.service';
import { User } from '../../../users-shared/models/user';

@Component({
  selector: 'bram-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
  providers: [TodosService],
})
export class TodosPageComponent implements OnInit {
  @ViewChild('todoList') todoList!: ListComponent<Todo>;
  todos: Todo[] = [];
  user!: User;

  constructor(private todosService: TodosService,
              private usersService: UsersResourceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    const userId = +this.route.snapshot.params['userId'];
    this.todosService.getTodos(userId)
      .subscribe(todos => this.todos = todos);
    if (userId !== undefined && !Number.isNaN(userId)) {
      this.usersService.getUserById(userId)
        .subscribe(user => this.user = user);
    }
  }
}
