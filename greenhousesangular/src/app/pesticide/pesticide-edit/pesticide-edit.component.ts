import { Component, OnInit } from '@angular/core';
import { PesticideService } from '../pesticide.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pesticide-edit',
  templateUrl: './pesticide-edit.component.html',
  styleUrls: ['./pesticide-edit.component.css']
})
export class PesticideEditComponent implements OnInit {
  editPesticideForm: FormGroup;
  pesticideId!: number;
  constructor(
    private fb : FormBuilder,
    private pesticideService: PesticideService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.editPesticideForm = this.fb.group({
      Type: ['', Validators.required],
      Date: ['', Validators.required],
      Plant: ['', Validators.required],
      Worker: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.pesticideId = +this.route.snapshot.paramMap.get('id')!;
    this.pesticideService.getPesticideById(this.pesticideId).subscribe(pesticide => {
      this.editPesticideForm.patchValue(pesticide);
    });
  }
  onSubmit(){ 
    this.pesticideService.updatePesticide(this.pesticideId, this.editPesticideForm.value).subscribe(() => {
      this.router.navigate(['/list-pesticides']);
    });
  }
}
