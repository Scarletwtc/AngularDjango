import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitPriceService } from '../visit-price.service';
@Component({
  selector: 'app-visit-price-edit',
  templateUrl: './visit-price-edit.component.html',
  styleUrls: ['./visit-price-edit.component.css']
})
export class VisitPriceEditComponent implements OnInit {

  editVisitPriceForm: FormGroup;
  visitPriceId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private visitPriceService: VisitPriceService,
    private route: ActivatedRoute,
  ) { 
    this.editVisitPriceForm = this.fb.group({
      Price: [ '', Validators.required],
      Visit: [ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.visitPriceId =+this.route.snapshot.paramMap.get('id')!;
    this.visitPriceService.getVisitPriceById(this.visitPriceId).subscribe(visitPrice =>{
      this.editVisitPriceForm.patchValue(visitPrice);
    })
  }

  onSubmit(): void{
    if(this.editVisitPriceForm.valid){
      this.visitPriceService.updateVisitPrice(this.visitPriceId, this.editVisitPriceForm.value).subscribe(()=>{
        this.router.navigate(['/list-visit-prices']);
      })
    }

  }
}
