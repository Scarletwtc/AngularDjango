import { Component, OnInit } from '@angular/core';
import { PlantHarvestService } from '../plant-harvest.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlantHarvest } from 'src/app/models/plantHarvest';

@Component({
  selector: 'app-plant-harvest-list',
  templateUrl: './plant-harvest-list.component.html',
  styleUrls: ['./plant-harvest-list.component.css']
})
export class PlantHarvestListComponent implements OnInit {
  plantHarvests: PlantHarvest [] =[]

  constructor( private plantHarvestService: PlantHarvestService ) { }

  ngOnInit(): void {
    this.getPlantHarvests();
  }

  getPlantHarvests(): void{
    this.plantHarvestService.getPlantHarvest().subscribe(data => {
      this.plantHarvests = data;
    })
  }

  deletePlantHarvest(id: number): void {
    this.plantHarvestService.deletePlantHarvest(id).subscribe(() => {
        this.getPlantHarvests();
    })
  }

  updatePlantHarvest(id: number, updated: PlantHarvest): void{
    this.plantHarvestService.updatePlantHarvest(id, updated).subscribe(response => {
      this.getPlantHarvests();
    })
  }

}
