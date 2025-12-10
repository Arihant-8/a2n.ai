import { TestBed } from '@angular/core/testing';

import { JuliService } from './juli.service';

describe('JuliService', () => {
  let service: JuliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
