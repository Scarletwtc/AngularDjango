import { Component, OnInit } from '@angular/core';
import { Pesticide } from 'src/app/models/pesticide';
import { PesticideService } from '../pesticide.service';

@Component({
  selector: 'app-pesticide-list',
  templateUrl: './pesticide-list.component.html',
  styleUrls: ['./pesticide-list.component.css']
})
export class PesticideListComponent implements OnInit {
  pesticides: Pesticide[] = [];
  constructor( private pesticideService: PesticideService) { }

  ngOnInit(): void {
    this.getPesticides();
  }

  getPesticides(): void {
    this.pesticideService.getPesticide().subscribe(data => {
      this.pesticides = data;
    })
  }

  updatePesticide(id:number, pesticide: Pesticide) {
    this.pesticideService.updatePesticide(id, pesticide).subscribe(response => {
      this.getPesticides();
    } )
  }

  deletePesticide(id:number): void {
    this.pesticideService.deletePesticide(id).subscribe(() => {
      this.getPesticides();
    })
  }

}
