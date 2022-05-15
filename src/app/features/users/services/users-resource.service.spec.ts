import { TestBed } from '@angular/core/testing';

import { UsersResourceService } from './users-resource.service';

describe('UsersResourceService', () => {
  let service: UsersResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
