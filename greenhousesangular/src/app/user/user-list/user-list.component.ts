import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUser().subscribe(data => {
      this.users = data;
    });
  }

  updateUser(id: number, updatedData: User): void {
    this.userService.updateUser(id, updatedData).subscribe(() => {
      this.getUsers();
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }
}
