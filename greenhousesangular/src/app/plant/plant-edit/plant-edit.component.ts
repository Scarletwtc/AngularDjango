import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from '../plant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Greenhouse } from 'src/app/models/greenhouse';

@Component({
  selector: 'app-plant-edit',
  templateUrl: './plant-edit.component.html',
  styleUrls: ['./plant-edit.component.css']
})
export class PlantEditComponent implements OnInit {
  editPlantForm: FormGroup;
  plantId!: number;

  constructor( 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private plantService: PlantService,
    private router: Router
  ) {
    this.editPlantForm = this.fb.group({
      DatePlanted: ['', Validators.required],
      Height: ['', Validators.required],
      Greenhouse: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.plantId = +this.route.snapshot.paramMap.get('id')!;
    this.plantService.getPlantById(this.plantId).subscribe(plant => {
      this.editPlantForm.patchValue(plant);
    });
  }
  onSubmit(): void {
    if(this.editPlantForm.valid){
      this.plantService.updatePlant(this.plantId, this.editPlantForm.value).subscribe(()=>{
        this.router.navigate(['/list-plants']);
      })
    }
  }
}
