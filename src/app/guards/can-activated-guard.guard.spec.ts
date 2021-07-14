import { TestBed } from '@angular/core/testing';

import { CanActivatedGuardGuard } from './can-activated-guard.guard';

describe('CanActivatedGuardGuard', () => {
  let guard: CanActivatedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivatedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
