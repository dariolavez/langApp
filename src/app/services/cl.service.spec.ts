import { TestBed } from '@angular/core/testing';

import { ClService } from './cl.service';

describe('ClService', () => {
  let service: ClService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
