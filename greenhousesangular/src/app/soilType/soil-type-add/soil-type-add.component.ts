import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SoilTypeService } from '../soil-type.service';

@Component({
  selector: 'app-soil-type-add',
  templateUrl: './soil-type-add.component.html',
  styleUrls: ['./soil-type-add.component.css']
})
export class SoilTypeAddComponent {
  addSoilTypeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private soilTypeService : SoilTypeService,
    private router: Router
  ) {
    this.addSoilTypeForm = this.fb.group({
      Type: [ '', Validators.required],
      Terrain: [ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.soilTypeService.addSoilType(this.addSoilTypeForm.value).subscribe(() =>{
      this.router.navigate(['/list-soil-types'])
    })
  }

}
