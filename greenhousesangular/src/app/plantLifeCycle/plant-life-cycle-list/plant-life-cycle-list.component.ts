import { Component, OnInit } from '@angular/core';
import { PlantLifeCycle } from 'src/app/models/plantLifeCycle';
import { PlantLifeCycleService } from '../plant-life-cycle.service';
@Component({
  selector: 'app-plant-life-cycle-list',
  templateUrl: './plant-life-cycle-list.component.html',
  styleUrls: ['./plant-life-cycle-list.component.css']
})
export class PlantLifeCycleListComponent implements OnInit {
  plc: PlantLifeCycle [] =[];

  constructor( private plantLifeCycleService: PlantLifeCycleService) { }

  ngOnInit(): void {
    this.getPlantLifeCycles();
  }

  getPlantLifeCycles(): void{
    this.plantLifeCycleService.getPlantLifeCycle().subscribe(data => {
      this.plc =data;
    })
  }
  deletePlantLifeCycle(id: number): void{
    this.plantLifeCycleService.deletePlantLifeCycle(id).subscribe(() =>{
      this.getPlantLifeCycles();
    })
  }
  updatePlantLifeCycle(id: number, updated: PlantLifeCycle): void {
    this.plantLifeCycleService.updatePlantLifeCycle(id, updated).subscribe(respoonse =>{
      this.getPlantLifeCycles();
    })
  }

}
