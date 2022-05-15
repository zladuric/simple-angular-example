import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserToolbarComponent } from './components/user-toolbar/user-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { UsersSharedModule } from '../users-shared/users-shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersPageService } from './services/users-page.service';


@NgModule({
  declarations: [UserListComponent, UsersPageComponent, UserToolbarComponent, UsersGridComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    UsersSharedModule,
    MatSnackBarModule,
  ],
  providers: [UsersPageService],
})
export class UsersModule { }
