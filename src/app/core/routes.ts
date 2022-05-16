import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShouldLoginComponent } from './components/should-login/should-login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      label: 'Home'
    }
  },
  {
    path: 'todos',
    loadChildren: () => import('../features/todos/todos.module').then(m => m.TodosModule),
    data: {
      label: 'Todos',
    }
  },
  {
    path: 'users',
    loadChildren: () => import('../features/users/users.module').then(m => m.UsersModule),
    data: {
      label: 'Users',
    }
  },
  {
    path: 'posts',
    data: {
      label: 'Posts dummy',
    },
    loadChildren: () => import('../features/posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: 'unauthenticated',
    component: ShouldLoginComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];
