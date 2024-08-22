import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] =[];
  constructor( private plantService: PlantService) { }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlant().subscribe(data => {
      console.log(data);
      this.plants = data;
    });
  }

  deletePlant(id: number): void {
    this.plantService.deletePlant(id).subscribe(()=>{
      this.getPlants();
    })
  }

  updatePlant(id: number, updatedData: Plant): void {
    this.plantService.updatePlant(id, updatedData).subscribe(response => {
      this.getPlants();
    });
  }

}
