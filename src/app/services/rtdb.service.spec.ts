import { TestBed } from '@angular/core/testing';

import { RtdbService } from './rtdb.service';

describe('RtdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RtdbService = TestBed.get(RtdbService);
    expect(service).toBeTruthy();
  });
});
