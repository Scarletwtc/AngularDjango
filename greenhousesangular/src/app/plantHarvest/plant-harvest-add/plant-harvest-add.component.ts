import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantHarvestService } from '../plant-harvest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-harvest-add',
  templateUrl: './plant-harvest-add.component.html',
  styleUrls: ['./plant-harvest-add.component.css']
})
export class PlantHarvestAddComponent {
  addPlantHarvestForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private plantHarvestService: PlantHarvestService
  ) { 
    this.addPlantHarvestForm = this.fb.group ({
      DateHarvested: ['', Validators.required],
      Specie: ['', Validators.required],
      Plant: ['', Validators.required]
    })
  }

 onSubmit(){
  this.plantHarvestService.addPlantHarvest(this.addPlantHarvestForm.value).subscribe(() => {
    this.router.navigate(['/list-plant-harvests']);
  })
 }

}
