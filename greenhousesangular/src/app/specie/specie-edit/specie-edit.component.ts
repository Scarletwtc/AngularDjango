import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { SpecieService } from '../specie.service';

@Component({
  selector: 'app-specie-edit',
  templateUrl: './specie-edit.component.html',
  styleUrls: ['./specie-edit.component.css']
})
export class SpecieEditComponent implements OnInit {

  editSpecieForm: FormGroup;
  specieId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private specieService: SpecieService,
    private route: ActivatedRoute,
  ) { 
    this.editSpecieForm = this.fb.group({
      CommonName: [ '', Validators.required],
      ScientificName: [ '', Validators.required],
      Plant:[ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.specieId =+this.route.snapshot.paramMap.get('id')!;
    this.specieService.getSpecieById(this.specieId).subscribe(specie =>{
      this.editSpecieForm.patchValue(specie);
    })
  }

  onSubmit(): void{
    if(this.editSpecieForm.valid){
      this.specieService.updateSpecie(this.specieId, this.editSpecieForm.value).subscribe(()=>{
        this.router.navigate(['/list-species']);
      })
    }

  }

}
