import { TestBed } from '@angular/core/testing';

import { DropSiteService } from './drop-site.service';

describe('DropSiteService', () => {
  let service: DropSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
