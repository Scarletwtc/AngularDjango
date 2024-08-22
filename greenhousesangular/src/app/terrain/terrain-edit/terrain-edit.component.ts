import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TerrainService } from '../terrain.service';
@Component({
  selector: 'app-terrain-edit',
  templateUrl: './terrain-edit.component.html',
  styleUrls: ['./terrain-edit.component.css']
})
export class TerrainEditComponent implements OnInit {

  editTerrainForm: FormGroup;
  terrainId!: number;
    
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private terrainService: TerrainService,
    private route: ActivatedRoute,
  ) { 
    this.editTerrainForm = this.fb.group({
      Type: [ '', Validators.required],
      Features: [ '', Validators.required],
      Ecosystem:[ '', Validators.required],
    })
  }

  ngOnInit(): void {
    this.terrainId =+this.route.snapshot.paramMap.get('id')!;
    this.terrainService.getTerrainById(this.terrainId).subscribe(terrain =>{
      this.editTerrainForm.patchValue(terrain);
    })
  }

  onSubmit(): void{
    if(this.editTerrainForm.valid){
      this.terrainService.updateTerrain(this.terrainId, this.editTerrainForm.value).subscribe(()=>{
        this.router.navigate(['/list-terrains']);
      })
    }

  }

}
