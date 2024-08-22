import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Worker } from 'src/app/models/worker';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {
  workers: Worker[] = [];

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this.workerService.getWorker().subscribe(data => {
      this.workers = data;
    });
  }

  updateWorker(id: number, updatedData: Worker): void {
    this.workerService.updateWorker(id, updatedData).subscribe(() => {
      this.getWorkers();
    });
  }

  deleteWorker(id: number): void {
    this.workerService.deleteWorker(id).subscribe(() => {
      this.getWorkers();
    });
  }
}
