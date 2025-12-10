import { TestBed } from '@angular/core/testing';

import { SerenaService } from './serena.service';

describe('SerenaService', () => {
  let service: SerenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
