import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecieService } from '../specie.service';

@Component({
  selector: 'app-specie-add',
  templateUrl: './specie-add.component.html',
  styleUrls: ['./specie-add.component.css']
})
export class SpecieAddComponent  {

  addSpecieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private specieService : SpecieService,
    private router: Router
  ) {
    this.addSpecieForm = this.fb.group({
      CommonName: [ '', Validators.required],
      ScientificName: [ '', Validators.required],
      Plant:[ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.specieService.addSpecie(this.addSpecieForm.value).subscribe(() =>{
      this.router.navigate(['/list-species'])
    })
  }

}
