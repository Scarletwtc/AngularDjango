import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { PlantLifeCycleService } from '../plant-life-cycle.service';
@Component({
  selector: 'app-plant-life-cycle-edit',
  templateUrl: './plant-life-cycle-edit.component.html',
  styleUrls: ['./plant-life-cycle-edit.component.css']
})
export class PlantLifeCycleEditComponent implements OnInit {

  editPlantLifeCycleForm: FormGroup;
  plantLifeCycleId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private plantLifeCycleService: PlantLifeCycleService,
    private route: ActivatedRoute,
  ) { 
    this.editPlantLifeCycleForm = this.fb.group({
      GerminationDate: ['', Validators.required],
      MaturityDate : ['', Validators.required],
      Plant: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.plantLifeCycleId =+this.route.snapshot.paramMap.get('id')!;
    this.plantLifeCycleService.getPlantLifeCycleById(this.plantLifeCycleId).subscribe(plantLifeCycle =>{
      this.editPlantLifeCycleForm.patchValue(plantLifeCycle);
    })
  }

  onSubmit(): void{
    if(this.editPlantLifeCycleForm.valid){
      this.plantLifeCycleService.updatePlantLifeCycle(this.plantLifeCycleId, this.editPlantLifeCycleForm.value).subscribe(()=>{
        this.router.navigate(['/list-plant-life-cycles']);
      })
    }

  }

}
