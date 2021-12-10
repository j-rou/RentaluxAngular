import { TestBed } from '@angular/core/testing';

import { LoggedAsAdminGuard } from './logged-as-admin.guard';

describe('LoggedAsAdminGuard', () => {
  let guard: LoggedAsAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedAsAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
