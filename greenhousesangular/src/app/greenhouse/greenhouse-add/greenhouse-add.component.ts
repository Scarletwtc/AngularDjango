import { Component } from '@angular/core';
import { GreenhouseService } from '../greenhouse.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-greenhouse-add',
  templateUrl: './greenhouse-add.component.html',
  styleUrls: ['./greenhouse-add.component.css']
})
export class GreenhouseAddComponent {
  addGreenhouseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private greenhouseService: GreenhouseService,
    private router: Router
  ) { 
    this.addGreenhouseForm = this.fb.group({
      Name: ['', Validators.required]
    })
  }

  onSubmit(): void {
    if(this.addGreenhouseForm.valid){
      this.greenhouseService.addGreenhouse(this.addGreenhouseForm.value).subscribe(() =>{
        this.router.navigate(['/list-greenhouses']);
      });
    }
  }

}
