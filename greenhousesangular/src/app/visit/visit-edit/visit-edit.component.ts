import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitService } from '../visit.service';
@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.css']
})
export class VisitEditComponent implements OnInit {

  editVisitForm: FormGroup;
  visitId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private visitService: VisitService,
    private route: ActivatedRoute,
  ) { 
    this.editVisitForm = this.fb.group({
      Greenhouse: [ '', Validators.required],
      User: [ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.visitId =+this.route.snapshot.paramMap.get('id')!;
    this.visitService.getVisitById(this.visitId).subscribe(visit =>{
      this.editVisitForm.patchValue(visit);
    })
  }

  onSubmit(): void{
    if(this.editVisitForm.valid){
      this.visitService.updateVisit(this.visitId, this.editVisitForm.value).subscribe(()=>{
        this.router.navigate(['/list-visits']);
      })
    }

  }
}
