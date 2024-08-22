import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkerService } from '../worker.service';
@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  editWorkerForm: FormGroup;
  workerId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private workerService: WorkerService,
    private route: ActivatedRoute,
  ) { 
    this.editWorkerForm = this.fb.group({
      Date: [ '', Validators.required],
      WorkHours: [ '', Validators.required],
      User:[ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.workerId =+this.route.snapshot.paramMap.get('id')!;
    this.workerService.getWorkerById(this.workerId).subscribe(worker =>{
      this.editWorkerForm.patchValue(worker);
    })
  }

  onSubmit(): void{
    if(this.editWorkerForm.valid){
      this.workerService.updateWorker(this.workerId, this.editWorkerForm.value).subscribe(()=>{
        this.router.navigate(['/list-workers']);
      })
    }

  }

}
