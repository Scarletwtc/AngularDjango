import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TerrainService } from '../terrain.service';

@Component({
  selector: 'app-terrain-add',
  templateUrl: './terrain-add.component.html',
  styleUrls: ['./terrain-add.component.css']
})
export class TerrainAddComponent  {

  addTerrainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private terrainService : TerrainService,
    private router: Router
  ) {
    this.addTerrainForm = this.fb.group({
      Type: [ '', Validators.required],
      Features: [ '', Validators.required],
      Ecosystem:[ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.terrainService.addTerrain(this.addTerrainForm.value).subscribe(() =>{
      this.router.navigate(['list-terrains'])
    })
  }

}
