import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-role-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent {
  users: User[] = [];

  constructor(private userService: UserService, private snackBar: MatSnackBar) {
    this.users = this.userService.getUsers();
  }

  updateRole(userId: string, role: string): void {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      user.role = role;
      this.userService.saveUsers(this.users);
      this.snackBar.open('Role updated successfully!', 'Close', { duration: 2000 });
    }
  }
}
