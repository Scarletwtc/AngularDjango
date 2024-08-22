import { Component, OnInit } from '@angular/core';
import { Pesticide } from 'src/app/models/pesticide';
import { Router } from '@angular/router';
import { PesticideService } from '../pesticide.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pesticide-add',
  templateUrl: './pesticide-add.component.html',
  styleUrls: ['./pesticide-add.component.css']
})
export class PesticideAddComponent  {
  addPesticideForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pesticideService: PesticideService
  ) {
    this.addPesticideForm = this.fb.group({
      Type: ['', Validators.required],
      Date: ['', Validators.required],
      Plant: ['', Validators.required],
      Worker: ['', Validators.required],
    });
   }

  onSubmit(): void {
    if(this.addPesticideForm.valid){
      this.pesticideService.addPesticide(this.addPesticideForm.value).subscribe(()=>{
        this.router.navigate(['/list-pesticides']);
      })
    }
  }

}
