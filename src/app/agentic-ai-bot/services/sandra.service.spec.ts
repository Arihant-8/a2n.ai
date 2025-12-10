import { TestBed } from '@angular/core/testing';

import { SandraService } from './sandra.service';

describe('SandraService', () => {
  let service: SandraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
