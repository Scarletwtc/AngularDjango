import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkScheduleService } from '../work-schedule.service';
@Component({
  selector: 'app-work-schedule-edit',
  templateUrl: './work-schedule-edit.component.html',
  styleUrls: ['./work-schedule-edit.component.css']
})
export class WorkScheduleEditComponent implements OnInit {

  editWorkScheduleForm: FormGroup;
  workScheduleId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private workScheduleService: WorkScheduleService,
    private route: ActivatedRoute,
  ) { 
    this.editWorkScheduleForm = this.fb.group({
      Date: [ '', Validators.required],
      WorkHours: [ '', Validators.required],
      Worker:[ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.workScheduleId =+this.route.snapshot.paramMap.get('id')!;
    this.workScheduleService.getWorkScheduleById(this.workScheduleId).subscribe(workSchedule =>{
      this.editWorkScheduleForm.patchValue(workSchedule);
    })
  }

  onSubmit(): void{
    if(this.editWorkScheduleForm.valid){
      this.workScheduleService.updateWorkSchedule(this.workScheduleId, this.editWorkScheduleForm.value).subscribe(()=>{
        this.router.navigate(['/list-work-schedules']);
      })
    }

  }

}
