import { TestBed } from '@angular/core/testing';

import { ScrollSearchSelectService } from './scroll-search-select.service';

describe('ScrollSearchSelectService', () => {
  let service: ScrollSearchSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSearchSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
