import { TestBed } from '@angular/core/testing';

import { SoilTypeService } from './soil-type.service';

describe('SoilTypeService', () => {
  let service: SoilTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoilTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
