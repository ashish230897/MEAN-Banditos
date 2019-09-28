import { TestBed } from '@angular/core/testing';

import { OrganiserService } from './organiser.service';

describe('OrganiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganiserService = TestBed.get(OrganiserService);
    expect(service).toBeTruthy();
  });
});
