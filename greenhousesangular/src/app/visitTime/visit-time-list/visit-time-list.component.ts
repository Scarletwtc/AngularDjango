import { Component, OnInit } from '@angular/core';
import { VisitTimeService } from '../visit-time.service';
import { VisitTime } from 'src/app/models/visitTime';

@Component({
  selector: 'app-visit-time-list',
  templateUrl: './visit-time-list.component.html',
  styleUrls: ['./visit-time-list.component.css']
})
export class VisitTimeListComponent implements OnInit {
  visitTimes: VisitTime[] = [];

  constructor(private visitTimeService: VisitTimeService) { }

  ngOnInit(): void {
    this.getVisitTimes();
  }

  getVisitTimes(): void {
    this.visitTimeService.getVisitTime().subscribe(data => {
      this.visitTimes = data;
    });
  }

  updateVisitTime(id: number, updatedData: VisitTime): void {
    this.visitTimeService.updateVisitTime(id, updatedData).subscribe(() => {
      this.getVisitTimes();
    });
  }

  deleteVisitTime(id: number): void {
    this.visitTimeService.deleteVisitTime(id).subscribe(() => {
      this.getVisitTimes();
    });
  }
}
