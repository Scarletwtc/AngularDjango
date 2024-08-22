import { TestBed } from '@angular/core/testing';

import { PlantNutrientLevelService } from './plant-nutrient-level.service';

describe('PlantNutrientLevelService', () => {
  let service: PlantNutrientLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantNutrientLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
