import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkScheduleService } from '../work-schedule.service';
@Component({
  selector: 'app-work-schedule-add',
  templateUrl: './work-schedule-add.component.html',
  styleUrls: ['./work-schedule-add.component.css']
})
export class WorkScheduleAddComponent {

  addWorkScheduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workScheduleService : WorkScheduleService,
    private router: Router
  ) {
    this.addWorkScheduleForm = this.fb.group({
      Date: [ '', Validators.required],
      WorkHours: [ '', Validators.required],
      Worker:[ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.workScheduleService.addWorkSchedule(this.addWorkScheduleForm.value).subscribe(() =>{
      this.router.navigate(['/list-work-schedules'])
    })
  }

}
