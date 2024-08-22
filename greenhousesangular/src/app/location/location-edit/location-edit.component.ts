import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../location.service';
@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
  LocationForm: FormGroup;
  LocationId!: number;
  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.LocationForm = this.fb.group({
      Name: ['', Validators.required],
      Region: ['', Validators.required],
      Climate: ['', Validators.required],
      Longitude: ['', Validators.required],
      Latitude: ['', Validators.required],
      Ecosystem: ['', Validators.required]
      
    });
  }

  ngOnInit(): void {
    this.LocationId = +this.route.snapshot.paramMap.get('id')!;
    this.locationService.getLocationById(this.LocationId).subscribe(location => {
      this.LocationForm.patchValue(location);
    });
  }

  onSubmit(): void {
    if(this.LocationForm.valid){
      this.locationService.updateLocation(this.LocationId, this.LocationForm.value).subscribe(() => {
        this.router.navigate(['/list-locations']);
      });
    }
  }

}
