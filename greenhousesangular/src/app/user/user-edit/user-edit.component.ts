import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup;
  userId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { 
    this.editUserForm = this.fb.group({
      Email: [ '', Validators.required],
      Password: [ '', Validators.required],
      Username: [ '', Validators.required],
      DateJoined: [ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.userId =+this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(this.userId).subscribe(user =>{
      this.editUserForm.patchValue(user);
    })
  }

  onSubmit(): void{
    if(this.editUserForm.valid){
      this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(()=>{
        this.router.navigate(['/list-users']);
      })
    }

  }

}
