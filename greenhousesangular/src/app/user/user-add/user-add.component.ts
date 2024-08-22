import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {


 addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService : UserService,
    private router: Router
  ) {
    this.addUserForm = this.fb.group({
      Email: [ '', Validators.required],
      Password: [ '', Validators.required],
      Username: [ '', Validators.required],
      DateJoined: [ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.userService.addUser(this.addUserForm.value).subscribe(() =>{
      this.router.navigate(['list-users'])
    })
  }


}
