import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './containers/todos-page/todos-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodosPageComponent,
  },
  {
    path: 'by/:userId',
    component: TodosPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
