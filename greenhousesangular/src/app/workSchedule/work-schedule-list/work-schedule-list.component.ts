import { Component, OnInit } from '@angular/core';
import { WorkScheduleService } from '../work-schedule.service';
import { WorkSchedule } from 'src/app/models/workSchedule';

@Component({
  selector: 'app-work-schedule-list',
  templateUrl: './work-schedule-list.component.html',
  styleUrls: ['./work-schedule-list.component.css']
})
export class WorkScheduleListComponent implements OnInit {
  workSchedules: WorkSchedule[] = [];

  constructor(private workScheduleService: WorkScheduleService) { }

  ngOnInit(): void {
    this.getWorkSchedules();
  }

  getWorkSchedules(): void {
    this.workScheduleService.getWorkSchedule().subscribe(data => {
      this.workSchedules = data;
    });
  }

  updateWorkSchedule(id: number, updatedData: WorkSchedule): void {
    this.workScheduleService.updateWorkSchedule(id, updatedData).subscribe(() => {
      this.getWorkSchedules();
    });
  }

  deleteWorkSchedule(id: number): void {
    this.workScheduleService.deleteWorkSchedule(id).subscribe(() => {
      this.getWorkSchedules();
    });
  }
}
