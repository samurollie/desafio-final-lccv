import { TestBed } from '@angular/core/testing';

import { BensServiceService } from './bens-service.service';

describe('BensServiceService', () => {
  let service: BensServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BensServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
