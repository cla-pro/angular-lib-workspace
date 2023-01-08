import { TestBed } from '@angular/core/testing';

import { NgxClosableService } from './ngx-closable.service';

describe('NgxClosableService', () => {
  let service: NgxClosableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxClosableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
