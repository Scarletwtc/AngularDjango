import { TestBed } from '@angular/core/testing';

import { VisitTimeService } from './visit-time.service';

describe('VisitTimeService', () => {
  let service: VisitTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
