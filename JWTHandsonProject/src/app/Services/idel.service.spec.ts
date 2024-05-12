import { TestBed } from '@angular/core/testing';

import { IdelService } from './idel.service';

describe('IdelService', () => {
  let service: IdelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
