import { Component, OnInit } from '@angular/core';
import { GreenhouseService } from '../greenhouse.service';
import { Greenhouse } from 'src/app/models/greenhouse';

@Component({
  selector: 'app-greenhouse-list',
  templateUrl: './greenhouse-list.component.html',
  styleUrls: ['./greenhouse-list.component.css']
})
export class GreenhouseListComponent implements OnInit {
  greenhouses: Greenhouse[] = [];
  constructor( private greenhouseService: GreenhouseService) { }

  ngOnInit(): void {
    this.getGreenhouses();
  }

  getGreenhouses():void {
    this.greenhouseService.getGreenhouse().subscribe(data =>{
      console.log(data);
      this.greenhouses = data;
    })
  }

  updateGreenhouse(id: number, updatedData: Greenhouse): void {
    this.greenhouseService.updateGreenhouse(id, updatedData).subscribe(response => {
      this.getGreenhouses();
    });
  }
  deleteGreenhouse(id: number): void{
    this.greenhouseService.deleteGreenhouse(id).subscribe(() =>{
      this.getGreenhouses();
    })
  }

}
