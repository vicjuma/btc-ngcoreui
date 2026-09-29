import { TestBed } from '@angular/core/testing';

import { RawTransactionService } from './raw-transaction.service';

describe('RawTransactionService', () => {
  let service: RawTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
