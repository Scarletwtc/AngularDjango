import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from '../plant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Greenhouse } from 'src/app/models/greenhouse';

@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.css']
})
export class PlantAddComponent {
  addPlantForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private plantService: PlantService,
    private router: Router
  ) { 
    this.addPlantForm = this.fb.group({
      DatePlanted: ['', Validators.required],
      Height: ['', Validators.required],
      Greenhouse: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.plantService.addPlant(this.addPlantForm.value).subscribe(() =>{
      this.router.navigate(['/list-plants']);
    })
  }

}
