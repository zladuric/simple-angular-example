import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './containers/todos-page/todos-page.component';
import { ListModule } from '../../shared/list/list.module';
import { UsersSharedModule } from '../users-shared/users-shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TodosPageComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ListModule,
    UsersSharedModule,
    MatIconModule,
  ],
})
export class TodosModule { }
