import { Component, OnInit } from '@angular/core';
import { VisitService } from '../visit.service';
import { Visit } from 'src/app/models/visit';

@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  visits: Visit[] = [];

  constructor(private visitService: VisitService) { }

  ngOnInit(): void {
    this.getVisits();
  }

  getVisits(): void {
    this.visitService.getVisit().subscribe(data => {
      this.visits = data;
    });
  }

  updateVisit(id: number, updatedData: Visit): void {
    this.visitService.updateVisit(id, updatedData).subscribe(() => {
      this.getVisits();
    });
  }

  deleteVisit(id: number): void {
    this.visitService.deleteVisit(id).subscribe(() => {
      this.getVisits();
    });
  }
}
