import { TestBed } from '@angular/core/testing';

import { PrdServService } from './prd-serv.service';

describe('PrdServService', () => {
  let service: PrdServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
