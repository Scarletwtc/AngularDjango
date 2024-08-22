import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { VisitTimeService } from '../visit-time.service';
@Component({
  selector: 'app-visit-time-edit',
  templateUrl: './visit-time-edit.component.html',
  styleUrls: ['./visit-time-edit.component.css']
})
export class VisitTimeEditComponent implements OnInit {

  editVisitTimeForm: FormGroup;
  visitTimeId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private visitTimeService: VisitTimeService,
    private route: ActivatedRoute,
  ) { 
    this.editVisitTimeForm = this.fb.group({
      Duration: [ '', Validators.required],
      Visit: [ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.visitTimeId =+this.route.snapshot.paramMap.get('id')!;
    this.visitTimeService.getVisitTimeById(this.visitTimeId).subscribe(visitTime =>{
      this.editVisitTimeForm.patchValue(visitTime);
    })
  }

  onSubmit(): void{
    if(this.editVisitTimeForm.valid){
      this.visitTimeService.updateVisitTime(this.visitTimeId, this.editVisitTimeForm.value).subscribe(()=>{
        this.router.navigate(['/list-visit-times']);
      })
    }

  }

}
