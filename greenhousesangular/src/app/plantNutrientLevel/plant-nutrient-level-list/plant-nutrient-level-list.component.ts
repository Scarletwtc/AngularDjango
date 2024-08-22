import { Component, OnInit } from '@angular/core';
import { PlantNutrientLevel } from 'src/app/models/plantNutrientLevel';
import { PlantNutrientLevelService } from '../plant-nutrient-level.service';
@Component({
  selector: 'app-plant-nutrient-level-list',
  templateUrl: './plant-nutrient-level-list.component.html',
  styleUrls: ['./plant-nutrient-level-list.component.css']
})
export class PlantNutrientLevelListComponent implements OnInit {
  plantNutrients: PlantNutrientLevel[] =[];
  constructor( private pservice: PlantNutrientLevelService) { }

  ngOnInit(): void {
    this.getPlantNutrientLevels();
  }
  getPlantNutrientLevels() : void{
    this.pservice.getPlantNutrientLevel().subscribe(data => {
      this.plantNutrients = data;
    })
  }

  deletePlantNutrientLevel(id:number): void {
    this.pservice.deletePlantNutrientLevel(id).subscribe(()=>{
      this.getPlantNutrientLevels();
    })
  }
  updatePlantNutrientLevel(id: number, updated: PlantNutrientLevel): void{
    this.pservice.updatePlantNutrientLevel(id, updated).subscribe(response =>{
      this.getPlantNutrientLevels();
    })
  }

}
