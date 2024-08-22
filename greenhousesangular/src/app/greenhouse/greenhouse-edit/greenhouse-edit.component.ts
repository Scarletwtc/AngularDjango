import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { GreenhouseService } from '../greenhouse.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Greenhouse } from 'src/app/models/greenhouse';

@Component({
  selector: 'app-greenhouse-edit',
  templateUrl: './greenhouse-edit.component.html',
  styleUrls: ['./greenhouse-edit.component.css']
})
export class GreenhouseEditComponent implements OnInit {
  greenhouseForm: FormGroup;
  greenhouseId!: number;

  constructor(
    private fb: FormBuilder,
    private greenhouseService: GreenhouseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.greenhouseForm = this.fb.group({
      Name: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.greenhouseId = +this.route.snapshot.paramMap.get('id')!;
    this.greenhouseService.getGreenhouseById(this.greenhouseId).subscribe(greenhouse => {
      this.greenhouseForm.patchValue(greenhouse);
    })
  }

  onSubmit(): void{
    if(this.greenhouseForm.valid) {
      this.greenhouseService.updateGreenhouse(this.greenhouseId, this.greenhouseForm.value).subscribe(() =>{
        this.router.navigate(['/list-greenhouses']);
      })
    }
  }

}
