import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full',
  },
  {
    path: 'user-list',
    loadComponent: () => import('./components/user-list/user-list.component').then((m) => m.UserListComponent),
  },
  {
    path: 'add-user',
    loadComponent: () => import('./components/add-user/add-user.component').then((m) => m.AddUserComponent),
  },
  {
    path: 'edit-user/:id',
    loadComponent: () => import('./components/edit-user/edit-user.component').then((m) => m.EditUserComponent),
  },
  {
    path: 'role-management',
    loadComponent: () => import('./components/role-management/role-management.component').then((m) => m.RoleManagementComponent),
  },
  {
    path: 'delete-user/:id',
    loadComponent: () => import('./components/delete-user/delete-user.component').then((m) => m.DeleteUserComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
