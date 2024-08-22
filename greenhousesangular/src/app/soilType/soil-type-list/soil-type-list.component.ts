import { Component, OnInit } from '@angular/core';
import { SoilTypeService } from '../soil-type.service';
import { SoilType } from 'src/app/models/soilType';

@Component({
  selector: 'app-soil-type-list',
  templateUrl: './soil-type-list.component.html',
  styleUrls: ['./soil-type-list.component.css']
})
export class SoilTypeListComponent implements OnInit {
  soilTypes: SoilType[] = [];

  constructor(private soilTypeService: SoilTypeService) { }

  ngOnInit(): void {
    this.getSoilTypes();
  }

  getSoilTypes(): void {
    this.soilTypeService.getSoilType().subscribe(data => {
      this.soilTypes = data;
    });
  }

  updateSoilType(id: number, updatedData: SoilType): void {
    this.soilTypeService.updateSoilType(id, updatedData).subscribe(() => {
      this.getSoilTypes();
    });
  }

  deleteSoilType(id: number): void {
    this.soilTypeService.deleteSoilType(id).subscribe(() => {
      this.getSoilTypes();
    });
  }
}
