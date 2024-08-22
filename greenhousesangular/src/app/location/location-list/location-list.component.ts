import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Location } from 'src/app/models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  constructor( private locationService: LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.locationService.getLocation().subscribe(data => {
      this.locations = data;
    })
  }

  updateLocation(id: number, updatedData: Location): void {
    this.locationService.updateLocation(id, updatedData).subscribe(response => {
      this.getLocations();
    })
  }
  deleteLocation(id:number): void{
    this.locationService.deleteLocation(id).subscribe(() => {
      this.getLocations();
    })
  }

}
