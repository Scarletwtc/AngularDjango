import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WateringService } from '../watering.service';
@Component({
  selector: 'app-watering-edit',
  templateUrl: './watering-edit.component.html',
  styleUrls: ['./watering-edit.component.css']
})
export class WateringEditComponent implements OnInit {

  editWateringForm: FormGroup;
  wateringId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private wateringService: WateringService,
    private route: ActivatedRoute,
  ) { 
    this.editWateringForm = this.fb.group({
      LastWatered: [ '', Validators.required],
      Frequency: [ '', Validators.required],
      Plant:[ '', Validators.required],
      Worker: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.wateringId =+this.route.snapshot.paramMap.get('id')!;
    this.wateringService.getWateringById(this.wateringId).subscribe(watering =>{
      this.editWateringForm.patchValue(watering);
    })
  }

  onSubmit(): void{
    if(this.editWateringForm.valid){
      this.wateringService.updateWatering(this.wateringId, this.editWateringForm.value).subscribe(()=>{
        this.router.navigate(['/list-waterings']);
      })
    }

  }

}
