import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcosystemService } from '../ecosystem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecosystem-add',
  templateUrl: './ecosystem-add.component.html',
  styleUrls: ['./ecosystem-add.component.css']
})
export class EcosystemAddComponent {
  addEcosystemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ecosystemService: EcosystemService,
    private router: Router
  ) {
    this.addEcosystemForm = this.fb.group({
      Type: ['', Validators.required],
      Description: ['', Validators.required],
      Greenhouse: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addEcosystemForm.valid) {
      this.ecosystemService.addEcosystem(this.addEcosystemForm.value).subscribe(() => {
        this.router.navigate(['/list-ecosystems']);
      });
    }
  }
}
