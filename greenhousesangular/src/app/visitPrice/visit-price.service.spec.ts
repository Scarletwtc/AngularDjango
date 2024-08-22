import { TestBed } from '@angular/core/testing';

import { VisitPriceService } from './visit-price.service';

describe('VisitPriceService', () => {
  let service: VisitPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
