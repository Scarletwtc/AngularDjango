import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { SoilTypeService } from '../soil-type.service';
@Component({
  selector: 'app-soil-type-edit',
  templateUrl: './soil-type-edit.component.html',
  styleUrls: ['./soil-type-edit.component.css']
})
export class SoilTypeEditComponent implements OnInit {
  editSoilTypeForm: FormGroup;
  soilTypeId!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private soilTypeService: SoilTypeService
  ) {
    this.editSoilTypeForm = this.fb.group({
      Type: [ '', Validators.required],
      Terrain: [ '', Validators.required],
    })
   }

  ngOnInit(): void {
    this.soilTypeId = +this.route.snapshot.paramMap.get('id')!;
    this.soilTypeService.getSoilTypeById(this.soilTypeId).subscribe(soilType => {
        this.editSoilTypeForm.patchValue(soilType);
    })
  }

  onSubmit(): void{
    this.soilTypeService.updateSoilType(this.soilTypeId, this.editSoilTypeForm.value).subscribe(() =>{
      this.router.navigate(['list-soil-types'])
    })
  }

  

}
