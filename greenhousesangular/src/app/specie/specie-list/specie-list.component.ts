import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../specie.service';
import { Specie } from 'src/app/models/specie';

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.css']
})
export class SpecieListComponent implements OnInit {
  species: Specie[] = [];

  constructor(private specieService: SpecieService) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    this.specieService.getSpecie().subscribe(data => {
      this.species = data;
    });
  }

  updateSpecie(id: number, updatedData: Specie): void {
    this.specieService.updateSpecie(id, updatedData).subscribe(() => {
      this.getSpecies();
    });
  }

  deleteSpecie(id: number): void {
    this.specieService.deleteSpecie(id).subscribe(() => {
      this.getSpecies();
    });
  }
}
