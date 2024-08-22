import { TestBed } from '@angular/core/testing';

import { PlantHarvestService } from './plant-harvest.service';

describe('PlantHarvestService', () => {
  let service: PlantHarvestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantHarvestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
