import { Component, OnInit } from '@angular/core';
import { PlantHarvest } from 'src/app/models/plantHarvest';
import { PlantHarvestService } from '../plant-harvest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
@Component({
  selector: 'app-plant-harvest-edit',
  templateUrl: './plant-harvest-edit.component.html',
  styleUrls: ['./plant-harvest-edit.component.css']
})
export class PlantHarvestEditComponent implements OnInit {
  editPlantHarvestForm: FormGroup;
  plantHarvestId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private plantHarvestService: PlantHarvestService,
    private route: ActivatedRoute,
  ) { 
    this.editPlantHarvestForm = this.fb.group({
      DateHarvested: ['', Validators.required],
      Specie: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.plantHarvestId =+this.route.snapshot.paramMap.get('id')!;
    this.plantHarvestService.getPlantHarvestById(this.plantHarvestId).subscribe(plantHarvest =>{
      this.editPlantHarvestForm.patchValue(plantHarvest);
    })
  }

  onSubmit(): void{
    if(this.editPlantHarvestForm.valid){
      this.plantHarvestService.updatePlantHarvest(this.plantHarvestId, this.editPlantHarvestForm.value).subscribe(()=>{
        this.router.navigate(['/list-plant-harvests']);
      })
    }

  }

}
