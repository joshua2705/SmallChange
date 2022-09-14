import { TestBed } from '@angular/core/testing';

import { GlobalstockService } from './globalstock.service';

describe('GlobalstockService', () => {
  let service: GlobalstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
