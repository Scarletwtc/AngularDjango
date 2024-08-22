import { Component, OnInit } from '@angular/core';
import { WeatherDateService } from '../weather-date.service';
import { WeatherDate } from 'src/app/models/weatherDate';

@Component({
  selector: 'app-weather-date-list',
  templateUrl: './weather-date-list.component.html',
  styleUrls: ['./weather-date-list.component.css']
})
export class WeatherDateListComponent implements OnInit {
  weatherDates: WeatherDate[] = [];

  constructor(private weatherDateService: WeatherDateService) { }

  ngOnInit(): void {
    this.getWeatherDates();
  }

  getWeatherDates(): void {
    this.weatherDateService.getWeatherDate().subscribe(data => {
      this.weatherDates = data;
    });
  }

  updateWeatherDate(id: number, updatedData: WeatherDate): void {
    this.weatherDateService.updateWeatherDate(id, updatedData).subscribe(() => {
      this.getWeatherDates();
    });
  }

  deleteWeatherDate(id: number): void {
    this.weatherDateService.deleteWeatherDate(id).subscribe(() => {
      this.getWeatherDates();
    });
  }
}
