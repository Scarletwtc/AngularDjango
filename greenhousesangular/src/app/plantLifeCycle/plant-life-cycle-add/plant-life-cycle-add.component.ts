import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantLifeCycleService } from '../plant-life-cycle.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plant-life-cycle-add',
  templateUrl: './plant-life-cycle-add.component.html',
  styleUrls: ['./plant-life-cycle-add.component.css']
})
export class PlantLifeCycleAddComponent  {
  addPlantLifeCycle: FormGroup;

  constructor(
    private fb: FormBuilder,
    private plantLifeCycleService: PlantLifeCycleService,
    private router: Router
  ) { 
    this.addPlantLifeCycle = this.fb.group({
      GerminationDate: ['', Validators.required],
      MaturityDate : ['', Validators.required],
      Plant: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.plantLifeCycleService.addPlantLifeCycle(this.addPlantLifeCycle.value).subscribe(() =>{
      this.router.navigate(['/list-plant-life-cycles']);
    })
  }

}
