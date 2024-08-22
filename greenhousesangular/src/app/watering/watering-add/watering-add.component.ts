import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WateringService } from '../watering.service';

@Component({
  selector: 'app-watering-add',
  templateUrl: './watering-add.component.html',
  styleUrls: ['./watering-add.component.css']
})
export class WateringAddComponent {

  addWateringForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private wateringService : WateringService,
    private router: Router
  ) {
    this.addWateringForm = this.fb.group({
      LastWatered: [ '', Validators.required],
      Frequency: [ '', Validators.required],
      Plant:[ '', Validators.required],
      Worker: ['', Validators.required]
    })
   }

  onSubmit(): void {
    this.wateringService.addWatering(this.addWateringForm.value).subscribe(() =>{
      this.router.navigate(['list-waterings'])
    })
  }


}
