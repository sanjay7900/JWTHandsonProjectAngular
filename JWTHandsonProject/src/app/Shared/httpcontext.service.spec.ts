import { TestBed } from '@angular/core/testing';

import { HttpContextService } from './httpcontext.service';

describe('HttpContextService', () => {
  let service: HttpContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
