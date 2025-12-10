import { TestBed } from '@angular/core/testing';

import { ReenaService } from './reena.service';

describe('ReenaService', () => {
  let service: ReenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
