import { TestBed } from '@angular/core/testing';

import { WaterinfluxService } from './waterinflux.service';

describe('WaterinfluxService', () => {
  let service: WaterinfluxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterinfluxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
