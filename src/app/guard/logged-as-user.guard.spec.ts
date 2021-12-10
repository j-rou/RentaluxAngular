import { TestBed } from '@angular/core/testing';

import { LoggedAsUserGuard } from './logged-as-user.guard';

describe('LoggedAsUserGuard', () => {
  let guard: LoggedAsUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedAsUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
