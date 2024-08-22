import { Component, OnInit } from '@angular/core';
import { PlantNutrientLevelService } from '../plant-nutrient-level.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant-nutrient-level-add',
  templateUrl: './plant-nutrient-level-add.component.html',
  styleUrls: ['./plant-nutrient-level-add.component.css']
})
export class PlantNutrientLevelAddComponent {
  addPlantNutrientLevelForm: FormGroup;
  constructor(
    private plantNutrientLevelService: PlantNutrientLevelService,
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.addPlantNutrientLevelForm = this.fb.group({
      Nitrogen :['', Validators.required],
      Phosphorus:['', Validators.required],
      Potassium:['', Validators.required],
      Plant:['', Validators.required],
    })
  }

  onSubmit(): void {
    this.plantNutrientLevelService.addPlantNutrientLevel(this.addPlantNutrientLevelForm.value).subscribe(() => {
      this.router.navigate(['list-plant-nutrient-levels']);
    })
  }

}
