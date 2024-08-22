import { Component, OnInit } from '@angular/core';
import { Watering } from 'src/app/models/watering';
import { WateringService } from '../watering.service';

@Component({
  selector: 'app-watering-list',
  templateUrl: './watering-list.component.html',
  styleUrls: ['./watering-list.component.css']
})
export class WateringListComponent implements OnInit {
  waterings: Watering[] = [];
  constructor(private wateringService: WateringService) { }

  ngOnInit(): void {
    this.getWatering();
  }

  getWatering(): void {
    this.wateringService.getWatering().subscribe(data => {
      this.waterings = data;
    });
  }

  deleteWatering(id: number): void {
    this.wateringService.deleteWatering(id).subscribe(() => {
      this.getWatering();
    });
  }
  updateWatering(id: number, updated: Watering): void {
    this.wateringService.updateWatering(id, updated).subscribe(() => {
      this.getWatering();
    });
  }
}
