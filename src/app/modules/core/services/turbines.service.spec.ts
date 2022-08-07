import { TestBed } from '@angular/core/testing';

import { TurbinesService } from './turbines.service';

describe('TurbinesService', () => {
  let service: TurbinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurbinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
