import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent  {

  addWorkerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workerService : WorkerService,
    private router: Router
  ) {
    this.addWorkerForm = this.fb.group({
      Date: [ '', Validators.required],
      WorkHours: [ '', Validators.required],
      User:[ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.workerService.addWorker(this.addWorkerForm.value).subscribe(() =>{
      this.router.navigate(['list-workers'])
    })
  }


}
