import { Component, OnInit } from '@angular/core';
import { Terrain } from 'src/app/models/terrain';
import { TerrainService } from '../terrain.service';


@Component({
  selector: 'app-terrain-list',
  templateUrl: './terrain-list.component.html',
  styleUrls: ['./terrain-list.component.css']
})
export class TerrainListComponent implements OnInit {
  terrains: Terrain[] = []
  constructor( private terrainService: TerrainService) { }

  ngOnInit(): void {
    this.getTerrains();
  }

  getTerrains(){
    this.terrainService.getTerrain().subscribe(data => {
      console.log(data);
      this.terrains = data;
    })
  }

  updateTerrain(id: number, updatedData: Terrain): void {
    this.terrainService.updateTerrain(id, updatedData).subscribe(response => {
      this.getTerrains();
    });
  }

  deleteTerrain(id: number): void{
    this.terrainService.deleteTerrain(id).subscribe(() =>{
      this.getTerrains();
    })
  }
}
