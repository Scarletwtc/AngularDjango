import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitPriceService } from '../visit-price.service';

@Component({
  selector: 'app-visit-price-add',
  templateUrl: './visit-price-add.component.html',
  styleUrls: ['./visit-price-add.component.css']
})
export class VisitPriceAddComponent {

  addVisitPriceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private visitPriceService : VisitPriceService,
    private router: Router
  ) {
    this.addVisitPriceForm = this.fb.group({
      Price: [ '', Validators.required],
      Visit: [ '', Validators.required],
    })
   }

  onSubmit(): void {
    this.visitPriceService.addVisitPrice(this.addVisitPriceForm.value).subscribe(() =>{
      this.router.navigate(['list-visit-prices'])
    })
  }

}
