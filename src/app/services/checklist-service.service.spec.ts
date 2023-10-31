import { TestBed } from '@angular/core/testing';

import { ChecklistServiceService } from './checklist-service.service';

describe('ChecklistServiceService', () => {
  let service: ChecklistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
