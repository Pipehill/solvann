import { TestBed } from '@angular/core/testing';

import { PowerpriceService } from './powerprice.service';

describe('PowerpriceService', () => {
  let service: PowerpriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerpriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
