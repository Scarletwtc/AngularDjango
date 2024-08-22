import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../location.service';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent {
  addLocationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private router: Router
  ) { 
    this.addLocationForm = this.fb.group({  
      Name: ['', Validators.required],
      Region: ['', Validators.required],
      Climate: ['', Validators.required],
      Longitude: ['', Validators.required],
      Latitude: ['', Validators.required],
      Ecosystem: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addLocationForm.valid) {
      this.locationService.addLocation(this.addLocationForm.value).subscribe(() => {
        this.router.navigate(['/list-locations']);
      });
    }
  }
}
