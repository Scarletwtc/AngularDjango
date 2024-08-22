import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitTimeService } from '../visit-time.service';
@Component({
  selector: 'app-visit-time-add',
  templateUrl: './visit-time-add.component.html',
  styleUrls: ['./visit-time-add.component.css']
})
export class VisitTimeAddComponent {

  addVisitTimeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private visitTimeService : VisitTimeService,
    private router: Router
  ) {
    this.addVisitTimeForm = this.fb.group({
      Duration: [ '', Validators.required],
      Visit: [ '', Validators.required],
     
    })
   }

  onSubmit(): void {
    this.visitTimeService.addVisitTime(this.addVisitTimeForm.value).subscribe(() =>{
      this.router.navigate(['list-visit-times'])
    })
  }


}
