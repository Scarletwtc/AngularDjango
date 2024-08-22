import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { PlantNutrientLevelService } from '../plant-nutrient-level.service';
@Component({
  selector: 'app-plant-nutrient-level-edit',
  templateUrl: './plant-nutrient-level-edit.component.html',
  styleUrls: ['./plant-nutrient-level-edit.component.css']
})
export class PlantNutrientLevelEditComponent implements OnInit {

  editPlantNutrientLevelForm: FormGroup;
  plantNutrientLevelId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private plantNutrientLevelService: PlantNutrientLevelService,
    private route: ActivatedRoute,
  ) { 
    this.editPlantNutrientLevelForm = this.fb.group({
      Nitrogen :['', Validators.required],
      Phosphorus:['', Validators.required],
      Potassium:['', Validators.required],
      Plant:['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.plantNutrientLevelId =+this.route.snapshot.paramMap.get('id')!;
    this.plantNutrientLevelService.getPlantNutrientLevelById(this.plantNutrientLevelId).subscribe(plantNutrientLevel =>{
      this.editPlantNutrientLevelForm.patchValue(plantNutrientLevel);
    })
  }

  onSubmit(): void{
    if(this.editPlantNutrientLevelForm.valid){
      this.plantNutrientLevelService.updatePlantNutrientLevel(this.plantNutrientLevelId, this.editPlantNutrientLevelForm.value).subscribe(()=>{
        this.router.navigate(['/list-plant-harvests']);
      })
    }

  }

}
