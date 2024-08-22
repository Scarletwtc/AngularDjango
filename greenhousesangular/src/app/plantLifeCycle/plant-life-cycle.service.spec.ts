import { TestBed } from '@angular/core/testing';

import { PlantLifeCycleService } from './plant-life-cycle.service';

describe('PlantLifeCycleService', () => {
  let service: PlantLifeCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantLifeCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
