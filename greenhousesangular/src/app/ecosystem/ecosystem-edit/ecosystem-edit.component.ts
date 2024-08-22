import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcosystemService } from '../ecosystem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ecosystem } from '../../models/ecosystem';

@Component({
  selector: 'app-ecosystem-edit',
  templateUrl: './ecosystem-edit.component.html',
  styleUrls: ['./ecosystem-edit.component.css']
})
export class EcosystemEditComponent implements OnInit {
  ecosystemForm: FormGroup;
  ecosystemId!: number;

  constructor(
    private fb: FormBuilder,
    private ecosystemService: EcosystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ecosystemForm = this.fb.group({
      Type: ['', Validators.required],
      Description: ['', Validators.required],
      Greenhouse: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get the ID from route parameters
    this.ecosystemId = +this.route.snapshot.paramMap.get('id')!;
    // Fetch the existing details for the ecosystem
    this.ecosystemService.getEcosystemById(this.ecosystemId).subscribe(ecosystem => {
      this.ecosystemForm.patchValue(ecosystem);
    });
  }

  onSubmit(): void {
    if (this.ecosystemForm.valid) {
      this.ecosystemService.updateEcosystem(this.ecosystemId, this.ecosystemForm.value).subscribe(() => {
        this.router.navigate(['/list-ecosystems']);
      });
    }
  }
}

/** 
-ecosystemForm: represents the form in the component.
-ecosystemid : Holds the ID of the ecosystem being edited. `!` to indicate that it will be assigned a value later.
-The constructor is where dependency injection happens.
  - private fb: FormBuilder: Injects Angular’s `FormBuilder` service, used to create reactive forms.
  - private ecosystemService: EcosystemService`: Injects a custom service for handling ecosystem-related API calls.
  - private router: Router: Injects Angular’s `Router` service, used to navigate between routes.
  - private route: ActivatedRoute: Injects Angular’s `ActivatedRoute` service, used to access route parameters.

Inside the constructor:
- this.ecosystemForm: Initializes the form using `FormBuilder`. The form has three fields: `Type`, `Description`, and `Greenhouse`, all marked as required with `Validators.required`.

  - this.ecosystemId = +this.route.snapshot.paramMap.get('id')!;`:
    - Uses `ActivatedRoute` to get the `id` parameter from the route. The `snapshot` is used to access the current route parameters.
    - The `+` operator converts the `id` from a string to a number.
    - The `!` operator asserts that `id` will not be `null` or `undefined`.
  - **`this.ecosystemService.getEcosystemById(this.ecosystemId).subscribe(ecosystem => { ... });`**:
    - Calls `getEcosystemById` on the `EcosystemService` to fetch the details of the ecosystem with the given ID.
    - The `subscribe` method handles the asynchronous response from the API. When data is received, `patchValue` updates the form fields with the current details of the ecosystem.

- `onSubmit()`  is called when the form is submitted.
  - `if (this.ecosystemForm.valid)`: Checks if the form is valid ( all required fields are filled out).
 */