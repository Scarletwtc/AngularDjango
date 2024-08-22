import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitService } from '../visit.service';
@Component({
  selector: 'app-visit-add',
  templateUrl: './visit-add.component.html',
  styleUrls: ['./visit-add.component.css']
})
export class VisitAddComponent {

  addVisitForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private visitService : VisitService,
    private router: Router
  ) {
    this.addVisitForm = this.fb.group({
      Greenhouse: [ '', Validators.required],
      User: [ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.visitService.addVisit(this.addVisitForm.value).subscribe(() =>{
      this.router.navigate(['list-visits'])
    })
  }

}
