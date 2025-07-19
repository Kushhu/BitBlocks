import { TestBed } from '@angular/core/testing';

import { BitblocksService } from './bitblocks.service';

describe('BitblocksService', () => {
  let service: BitblocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitblocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
