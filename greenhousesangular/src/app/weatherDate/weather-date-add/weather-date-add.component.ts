import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherDateService } from '../weather-date.service';

@Component({
  selector: 'app-weather-date-add',
  templateUrl: './weather-date-add.component.html',
  styleUrls: ['./weather-date-add.component.css']
})
export class WeatherDateAddComponent {

  addWeatherDateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherDateService : WeatherDateService,
    private router: Router
  ) {
    this.addWeatherDateForm = this.fb.group({
     
      Date:  [ '', Validators.required],
      Temperature:  [ '', Validators.required],
      Humidity :  [ '', Validators.required],
      Location:  [ '', Validators.required],
      Percipitation:['', Validators.required]
    })
   }

  onSubmit(): void {
    this.weatherDateService.addWeatherDate(this.addWeatherDateForm.value).subscribe(() =>{
      this.router.navigate(['list-weather-dates'])
    })
  }


}
