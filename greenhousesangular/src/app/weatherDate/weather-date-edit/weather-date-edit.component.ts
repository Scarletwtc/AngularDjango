import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherDateService } from '../weather-date.service';
@Component({
  selector: 'app-weather-date-edit',
  templateUrl: './weather-date-edit.component.html',
  styleUrls: ['./weather-date-edit.component.css']
})
export class WeatherDateEditComponent implements OnInit {

  editWeatherDateForm: FormGroup;
  weatherDateId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private weatherDateService: WeatherDateService,
    private route: ActivatedRoute,
  ) { 
    this.editWeatherDateForm = this.fb.group({
      Date:  [ '', Validators.required],
      Temperature:  [ '', Validators.required],
      Humidity :  [ '', Validators.required],
      Location:  [ '', Validators.required],
      Percipitation:['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.weatherDateId =+this.route.snapshot.paramMap.get('id')!;
    this.weatherDateService.getWeatherDateById(this.weatherDateId).subscribe(weatherDate =>{
      this.editWeatherDateForm.patchValue(weatherDate);
    })
  }

  onSubmit(): void{
    if(this.editWeatherDateForm.valid){
      this.weatherDateService.updateWeatherDate(this.weatherDateId, this.editWeatherDateForm.value).subscribe(()=>{
        this.router.navigate(['/list-weather-dates']);
      })
    }

  }

}
